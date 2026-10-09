(function () {
  var triggers = document.querySelectorAll('.lightbox-trigger');
  if (!triggers.length) return;

  var overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.hidden = true;

  var img = document.createElement('img');
  img.className = 'lightbox-image';
  img.alt = '';

  var close = document.createElement('button');
  close.type = 'button';
  close.className = 'lightbox-close';
  close.setAttribute('aria-label', 'Close');
  close.innerHTML = '&times;';

  overlay.appendChild(img);
  overlay.appendChild(close);
  document.body.appendChild(overlay);

  var lastTrigger = null;

  function open(trigger) {
    lastTrigger = trigger;
    var thumb = trigger.querySelector('img');
    img.src = trigger.getAttribute('data-lightbox-src');
    img.alt = thumb ? thumb.alt : '';
    overlay.hidden = false;
    document.body.classList.add('lightbox-open');
    close.focus();
  }

  function hide() {
    overlay.hidden = true;
    document.body.classList.remove('lightbox-open');
    if (lastTrigger) lastTrigger.focus();
  }

  Array.prototype.forEach.call(triggers, function (t) {
    t.addEventListener('click', function () { open(t); });
  });

  overlay.addEventListener('click', hide);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !overlay.hidden) hide();
  });
})();
