document.addEventListener('DOMContentLoaded', () => {
  // Silent demos play automatically when visible, not while far off-screen.
  document.querySelectorAll('[data-automat-motion]').forEach(video => {
    const toggle = video.parentElement.querySelector('.automat-motion-toggle');
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    let paused = motion.matches;
    let visible = false;
    let fallback;
    const updateLabel = () => {
      toggle.textContent = paused ? 'Play' : 'Pause';
      toggle.setAttribute('aria-label', paused ? 'Play animation' : 'Pause animation');
    };
    const useGif = () => {
      if (fallback || paused || !visible || document.hidden) return;
      fallback = document.createElement('img');
      fallback.src = video.dataset.gifUrl;
      fallback.alt = video.getAttribute('aria-label');
      video.hidden = true;
      video.parentElement.appendChild(fallback);
    };
    const update = () => {
      updateLabel();
      if (fallback) {
        fallback.hidden = paused || !visible || document.hidden;
        video.hidden = !paused;
        return;
      }
      if (paused || !visible || document.hidden) { video.pause(); return; }
      if (!video.src) {
        video.src = video.dataset.videoUrl;
        video.muted = true;
        video.load();
      }
      const playback = video.play();
      if (playback) playback.catch(useGif);
    };
    video.hidden = false;
    toggle.hidden = false;
    toggle.addEventListener('click', () => { paused = !paused; update(); });
    video.addEventListener('error', useGif);
    document.addEventListener('visibilitychange', update);
    motion.addEventListener('change', () => { paused = motion.matches; update(); });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(entries => { visible = entries[0].isIntersecting; update(); }, { threshold: 0.1 }).observe(video.parentElement);
    } else { visible = true; update(); }
  });
  // Measure the actual sticky navigation, including its wrapped mobile row.
  const productNav = document.querySelector('.product-sticky-nav');
  if (productNav) {
    const updateAnchorOffset = () => {
      document.documentElement.style.setProperty('--product-nav-offset', `${Math.ceil(productNav.getBoundingClientRect().height) + 16}px`);
    };
    updateAnchorOffset();
    if ('ResizeObserver' in window) new ResizeObserver(updateAnchorOffset).observe(productNav);
    else window.addEventListener('resize', updateAnchorOffset);
  }
  // Include shared header/footer links while leaving on-page navigation intact.
  document.querySelectorAll('a[href]').forEach(link => {
    const url = new URL(link.href, location.href);
    if (/^https?:$/.test(url.protocol) && url.origin !== location.origin) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
  });

  // Alternative-app photos. No library needed; the first image also works
  // without JavaScript. Never auto-advance while someone interacts with it.
  document.querySelectorAll('[data-app-slideshow]').forEach(slideshow => {
    const slides = [...slideshow.querySelectorAll('[data-app-slide]')];
    const controls = slideshow.querySelector('[data-slideshow-controls]');
    const buttons = [...controls.querySelectorAll('[data-slide-index]')];
    const pause = controls.querySelector('[data-slideshow-pause]');
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
    let index = 0;
    let paused = reducedMotion.matches;
    let visible = false;
    let hovered = false;
    let timer;
    const show = next => {
      index = (next + slides.length) % slides.length;
      slides.forEach((slide, i) => { slide.hidden = i !== index; });
      buttons.forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
    };
    const update = () => {
      clearInterval(timer);
      pause.textContent = paused ? 'Play slideshow' : 'Pause slideshow';
      if (!paused && visible && !hovered && !document.hidden && !slideshow.contains(document.activeElement)) {
        timer = setInterval(() => show(index + 1), 6000);
      }
    };
    buttons.forEach(button => button.addEventListener('click', () => {
      show(Number(button.dataset.slideIndex));
      paused = true;
      update();
    }));
    pause.addEventListener('click', () => { paused = !paused; update(); });
    slideshow.addEventListener('mouseenter', () => { hovered = true; update(); });
    slideshow.addEventListener('mouseleave', () => { hovered = false; update(); });
    slideshow.addEventListener('focusin', update);
    slideshow.addEventListener('focusout', () => setTimeout(update, 0));
    document.addEventListener('visibilitychange', update);
    reducedMotion.addEventListener('change', () => { paused = reducedMotion.matches; update(); });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(entries => {
        visible = entries[0].isIntersecting;
        update();
      }, { threshold: 0.25 }).observe(slideshow);
    } else {
      visible = true;
    }
    controls.hidden = false;
    update();
  });

  // Reusable clip lists: one Instagram player in a dialog, loaded on request.
  // Direct post links remain available without JS or when embeds are blocked.
  document.querySelectorAll('[data-social-dialog]').forEach(button => {
    const modal = document.getElementById(button.dataset.socialDialog);
    if (!modal || typeof modal.showModal !== 'function') return;
    button.hidden = false;
    button.addEventListener('click', () => {
      const player = modal.querySelector('[data-social-player]');
      const frame = document.createElement('iframe');
      frame.src = button.dataset.embedUrl;
      frame.title = button.dataset.embedTitle;
      frame.allow = 'encrypted-media; fullscreen; picture-in-picture';
      frame.allowFullscreen = true;
      frame.referrerPolicy = 'strict-origin-when-cross-origin';
      player.replaceChildren(frame);
      modal.querySelector('h3').textContent = button.dataset.embedTitle;
      modal.querySelector('[data-social-post]').href = button.dataset.postUrl;
      modal.showModal();
      document.documentElement.classList.add('tbd-lightbox-open');
      modal.addEventListener('close', () => {
        player.replaceChildren(); // Stops playback and releases the embed.
        document.documentElement.classList.remove('tbd-lightbox-open');
        button.focus({preventScroll: true});
      }, {once: true});
    });
  });
  document.querySelectorAll('.social-preview-dialog').forEach(modal => {
    modal.querySelector('[data-social-close]').addEventListener('click', () => modal.close());
    modal.addEventListener('click', event => {
      const rect = modal.getBoundingClientRect();
      if (event.target === modal && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) modal.close();
    });
  });

  const dialog = document.querySelector('.tbd-lightbox');
  const photos = [...document.querySelectorAll('.tbd-gallery-grid a')];
  if (!dialog || typeof dialog.showModal !== 'function') return;
  const image = dialog.querySelector('.tbd-lightbox-image');
  const caption = dialog.querySelector('figcaption');
  const counter = dialog.querySelector('.tbd-lightbox-counter');
  let index = 0;
  let opener;
  const show = next => {
    index = (next + photos.length) % photos.length;
    const photo = photos[index];
    image.src = photo.href;
    image.alt = photo.querySelector('img').alt;
    caption.textContent = image.alt;
    counter.textContent = `${index + 1} / ${photos.length}`;
  };
  photos.forEach((photo, i) => {
    photo.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      opener = photo;
      show(i);
      dialog.showModal();
      document.documentElement.classList.add('tbd-lightbox-open');
    });
  });
  dialog.querySelector('.tbd-lightbox-close').addEventListener('click', () => dialog.close());
  dialog.querySelectorAll('[data-direction]').forEach(button => {
    button.addEventListener('click', () => show(index + Number(button.dataset.direction)));
  });
  dialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      show(index + (event.key === 'ArrowLeft' ? -1 : 1));
    }
  });
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.documentElement.classList.remove('tbd-lightbox-open');
    opener?.focus({preventScroll: true});
  });
});
