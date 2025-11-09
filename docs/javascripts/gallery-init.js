document$.subscribe(() => {
    const gallery = document.getElementById('gallery');
    if (gallery && !gallery.classList.contains('lg-initialized')) {
      lightGallery(gallery, {
        plugins: [lgZoom],
        zoom: true,
        download: false
      });
      gallery.classList.add('lg-initialized');
    }
  });
  