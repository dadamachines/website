// Small behaviour tests, without installing browser/test dependencies.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const element = () => ({
  hidden: true, handlers: {}, attrs: {},
  classList: { toggle() {} },
  addEventListener(name, fn) { this.handlers[name] = fn; },
  setAttribute(name, value) { this.attrs[name] = value; }
});
const source = fs.readFileSync(new URL('../assets/js/hero-slider.js', import.meta.url), 'utf8');
function setup(reduced = false) {
  const slides = [element(), element(), element()];
  const dots = [element(), element(), element()];
  const controls = element();
  const pause = element();
  const slider = Object.assign(element(), {
    contains: () => false,
    querySelectorAll: s => s === '.hero-slide' ? slides : dots,
    querySelector: s => s === '.hero-slider-dots' ? controls : pause
  });
  const motion = { matches: reduced, addEventListener() {} };
  let tick;
  const document = { hidden: false, querySelectorAll: () => [slider], addEventListener() {} };
  vm.runInNewContext(source, {
    document, window: {}, matchMedia: () => motion,
    setInterval: fn => { tick = fn; return 1; },
    clearInterval: () => { tick = undefined; }, setTimeout: fn => fn()
  });
  return { slides, dots, controls, pause, slider, next: () => tick?.(), running: () => Boolean(tick) };
}
const normal = setup();
assert.equal(normal.controls.hidden, false);
assert.equal(normal.slides[1].inert, true);
normal.next();
assert.equal(normal.slides[0].inert, true);
assert.equal(normal.dots[1].attrs['aria-pressed'], 'true');
normal.slider.handlers.mouseenter();
assert.equal(normal.running(), false);
normal.slider.handlers.mouseleave();
assert.equal(normal.running(), true);
normal.dots[2].handlers.click();
assert.equal(normal.running(), false);
assert.equal(normal.slides[2].attrs['aria-hidden'], 'false');
normal.pause.handlers.click();
assert.equal(normal.running(), true);
assert.equal(setup(true).running(), false);
console.log('Hero slider: rotation, inactive focus, hover, selection, pause and reduced motion passed.');
