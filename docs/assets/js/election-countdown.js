(function () {
  var el = document.getElementById('election-countdown');
  if (!el) return;

  var target = new Date(el.getAttribute('data-target'));
  var daysEl = el.querySelector('.election-countdown-days');
  var labelEl = el.querySelector('.election-countdown-label');
  if (!daysEl || !labelEl) return;

  var msPerDay = 24 * 60 * 60 * 1000;
  var diff = Math.ceil((target - new Date()) / msPerDay);

  if (diff > 0) {
    daysEl.textContent = diff;
    labelEl.textContent = diff === 1 ? 'day until the November 3, 2026 election' : 'days until the November 3, 2026 election';
  } else if (diff === 0) {
    daysEl.textContent = '';
    labelEl.textContent = 'Today is Election Day — go vote!';
  } else {
    el.style.display = 'none';
  }
})();
