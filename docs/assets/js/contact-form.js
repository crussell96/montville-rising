(function () {
  var form = document.getElementById('contact-form');
  if (!form) return;

  var url = form.getAttribute('data-formspree-url');
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
          status.textContent = 'Thanks — your message has been sent!';
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
