document.addEventListener('DOMContentLoaded', () => {
  // Include shared header/footer links while leaving on-page navigation intact.
  document.querySelectorAll('a[href]').forEach(link => {
    const url = new URL(link.href, location.href);
    if (/^https?:$/.test(url.protocol) && url.origin !== location.origin) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
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
    caption.textContent = photo.querySelector('figcaption').textContent.replace('↗', '').trim();
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
