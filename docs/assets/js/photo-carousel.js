(function () {
  var carousels = document.querySelectorAll('.photo-carousel');

  carousels.forEach(function (carousel) {
    var slides = carousel.querySelectorAll('.carousel-slide');
    if (!slides.length) return;

    var interval = parseInt(carousel.getAttribute('data-interval'), 10) || 4000;
    var index = 0;
    var timer = null;

    function show(i) {
      index = (i + slides.length) % slides.length;
      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle('active', slideIndex === index);
      });
    }

    function next() {
      show(index + 1);
    }

    function prev() {
      show(index - 1);
    }

    function startAuto() {
      stopAuto();
      timer = setInterval(next, interval);
    }

    function stopAuto() {
      if (timer) clearInterval(timer);
    }

    var nextButton = carousel.querySelector('.carousel-next');
    var prevButton = carousel.querySelector('.carousel-prev');

    if (nextButton) {
      nextButton.addEventListener('click', function () {
        next();
        startAuto();
      });
    }

    if (prevButton) {
      prevButton.addEventListener('click', function () {
        prev();
        startAuto();
      });
    }

    carousel.addEventListener('mouseenter', stopAuto);
    carousel.addEventListener('mouseleave', startAuto);

    show(0);
    startAuto();
  });
})();
