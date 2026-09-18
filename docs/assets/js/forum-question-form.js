(function () {
  var form = document.getElementById('forum-question-form');
  if (!form) return;

  var url = form.getAttribute('data-formspree-url');
  var thankYouUrl = form.getAttribute('data-thank-you-url');
  var status = form.querySelector('.contact-form-status');
  var submitButton = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    submitButton.disabled = true;
    status.textContent = 'Sending…';
    status.className = 'contact-form-status';

    fetch(url, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(form)
    })
      .then(function (response) {
        if (response.ok) {
          form.reset();
          if (thankYouUrl) {
            window.location.href = thankYouUrl;
            return;
          }
          status.textContent = 'Thanks — your question has been submitted!';
          status.classList.add('contact-form-status-success');
        } else {
          status.textContent = 'Something went wrong. Please try again or email us directly.';
          status.classList.add('contact-form-status-error');
        }
      })
      .catch(function () {
        status.textContent = 'Something went wrong. Please try again or email us directly.';
        status.classList.add('contact-form-status-error');
      })
      .finally(function () {
        submitButton.disabled = false;
      });
  });
})();
