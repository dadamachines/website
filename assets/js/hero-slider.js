// Dots-only carousel. Keep inactive links out of keyboard navigation.
document.querySelectorAll('.hero-slider').forEach(slider => {
  const slides = [...slider.querySelectorAll('.hero-slide')];
  const dots = [...slider.querySelectorAll('.hero-slider-dot')];
  const controls = slider.querySelector('.hero-slider-dots');
  const pause = slider.querySelector('.hero-slider-pause');
  if (slides.length < 2) return;
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  let index = 0;
  let paused = motion.matches;
  let hovered = false;
  let visible = true;
  let timer;
  const show = next => {
    index = (next + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      slide.classList.toggle('is-active', i === index);
      slide.inert = i !== index;
      slide.setAttribute('aria-hidden', String(i !== index));
      dots[i].classList.toggle('is-active', i === index);
      dots[i].setAttribute('aria-pressed', String(i === index));
    });
  };
  const update = () => {
    clearInterval(timer);
    pause.textContent = paused ? 'Play slideshow' : 'Pause slideshow';
    if (!paused && visible && !hovered && !document.hidden && !slider.contains(document.activeElement)) {
      timer = setInterval(() => show(index + 1), 6000);
    }
  };
  dots.forEach((dot, i) => dot.addEventListener('click', () => {
    show(i);
    paused = true;
    update();
  }));
  pause.addEventListener('click', () => { paused = !paused; update(); });
  slider.addEventListener('mouseenter', () => { hovered = true; update(); });
  slider.addEventListener('mouseleave', () => { hovered = false; update(); });
  slider.addEventListener('focusin', update);
  slider.addEventListener('focusout', () => setTimeout(update, 0));
  document.addEventListener('visibilitychange', update);
  motion.addEventListener('change', () => { paused = motion.matches; update(); });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      update();
    }, { threshold: .25 }).observe(slider);
  }
  controls.hidden = false;
  pause.hidden = false;
  show(0);
  update();
});
