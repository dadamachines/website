// DOM-contract tests, not a substitute for real-browser playback/consent QA.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const events = () => ({
  handlers: new Map(),
  addEventListener(name, fn, options) {
    const list = this.handlers.get(name) || [];
    list.push({ fn, once: options?.once }); this.handlers.set(name, list);
  },
  emit(name, event = {}) {
    const list = this.handlers.get(name) || [];
    this.handlers.set(name, list.filter(item => !item.once));
    for (const item of list) item.fn(event);
  }
});
const player = { children: [], replaceChildren(...children) { this.children = children; } };
const closeButton = events();
const heading = {};
const postLink = {};
const modal = Object.assign(events(), {
  showModal() { this.open = true; },
  close() { this.open = false; this.emit('close'); },
  querySelector(selector) {
    return ({ '[data-social-player]': player, h3: heading, '[data-social-post]': postLink, '[data-social-close]': closeButton })[selector];
  },
  getBoundingClientRect() { return { left: 10, top: 10, right: 490, bottom: 830 }; }
});
const button = Object.assign(events(), {
  hidden: true,
  dataset: { socialDialog: 'sketches', embedUrl: 'https://www.instagram.com/p/example/embed/', embedTitle: 'Sound sketch by Servando', postUrl: 'https://www.instagram.com/p/example/' },
  focus() { this.focused = true; }
});
const classes = new Set();
const style = new Map();
const motionToggle = Object.assign(events(), { setAttribute() {} });
const motionFigure = { querySelector: () => motionToggle, appendChild(image) { this.fallback = image; } };
const motionVideo = Object.assign(events(), {
  parentElement: motionFigure,
  dataset: { videoUrl: '/demo.mp4', gifUrl: '/demo.gif' },
  getAttribute: () => 'Demo animation',
  load() { this.loaded = true; },
  play() { this.playing = true; return Promise.resolve(); },
  pause() { this.playing = false; }
});
let observeMotion;
class IntersectionObserver {
  constructor(callback) { observeMotion = callback; }
  observe(target) { assert.equal(target, motionFigure); }
}
const document = Object.assign(events(), {
  documentElement: {
    style: { setProperty: (key, value) => style.set(key, value) },
    classList: { add: value => classes.add(value), remove: value => classes.delete(value) }
  },
  querySelector: selector => selector === '.product-sticky-nav' ? { getBoundingClientRect: () => ({ height: 132 }) } : null,
  querySelectorAll: selector => ({ '[data-automat-motion]': [motionVideo], '[data-social-dialog]': [button], '.social-preview-dialog': [modal] })[selector] || [],
  getElementById: () => modal,
  createElement: name => ({ tagName: name })
});
vm.runInNewContext(fs.readFileSync('assets/js/product-story.js', 'utf8'), {
  document, window: { addEventListener() {}, IntersectionObserver }, IntersectionObserver,
  matchMedia: () => ({ matches: false, addEventListener() {} }),
  location: { href: 'https://example.com', origin: 'https://example.com' }, URL
});
document.emit('DOMContentLoaded');
assert.equal(motionVideo.src, undefined, 'Offscreen videos do not download initially');
observeMotion([{ isIntersecting: true }]);
assert.equal(motionVideo.src, '/demo.mp4');
assert.equal(motionVideo.playing, true, 'Visible demos automatically play');
observeMotion([{ isIntersecting: false }]);
assert.equal(motionVideo.playing, false, 'Offscreen demos pause');
observeMotion([{ isIntersecting: true }]);
motionToggle.emit('click');
assert.equal(motionVideo.playing, false, 'Users can pause animation');
motionToggle.emit('click');
motionVideo.emit('error');
assert.equal(motionFigure.fallback.src, '/demo.gif', 'GIF fallback on playback failure');
motionToggle.emit('click');
assert.equal(motionFigure.fallback.hidden, true, 'GIF fallback can also be paused');
assert.equal(style.get('--product-nav-offset'), '148px');
assert.equal(player.children.length, 0, 'No Instagram request before interaction');
assert.equal(button.hidden, false);
button.emit('click');
assert.equal(modal.open, true);
assert.equal(player.children[0].src, button.dataset.embedUrl);
assert.equal(player.children[0].title, button.dataset.embedTitle);
assert.equal(postLink.href, button.dataset.postUrl);
assert.equal(classes.has('tbd-lightbox-open'), true);
closeButton.emit('click');
assert.equal(player.children.length, 0, 'Closing removes player and stops playback');
assert.equal(classes.has('tbd-lightbox-open'), false);
assert.equal(button.focused, true);
button.emit('click');
modal.emit('click', { target: modal, clientX: 0, clientY: 0 });
assert.equal(modal.open, false, 'Backdrop closes the dialog');

const analytics = fs.readFileSync('_includes/google-analytics.html', 'utf8');
assert.match(analytics, /type="text\/plain"/);
assert.match(analytics, /data-cookiescript="accepted"/);
assert.match(analytics, /data-cookiecategory="performance"/);
assert.doesNotMatch(analytics, /<script\b[^>]*\bsrc=/i, 'No executable remote analytics tag before consent');
console.log('Product interactions: automatic visible demos, offscreen pause, GIF fallback, user pause, anchor offset, click-only Instagram load, close cleanup, focus return, backdrop and analytics blocking contract passed.');
