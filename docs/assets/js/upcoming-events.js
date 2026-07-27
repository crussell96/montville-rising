(function () {
  var section = document.getElementById('upcoming-events');
  if (!section) return;

  var list = document.getElementById('upcoming-events-list');
  var calendarId = section.getAttribute('data-calendar-id');
  var apiKey = section.getAttribute('data-api-key');

  function showMessage(text) {
    list.textContent = '';
    var li = document.createElement('li');
    li.textContent = text;
    list.appendChild(li);
  }

  if (!calendarId || !apiKey || apiKey.indexOf('ADD') !== -1) {
    showMessage('Add a Google Calendar API key in _config.yml to show upcoming events here.');
    return;
  }

  var timeMin = new Date().toISOString();
  var url = 'https://www.googleapis.com/calendar/v3/calendars/' +
    encodeURIComponent(calendarId) + '/events' +
    '?key=' + encodeURIComponent(apiKey) +
    '&timeMin=' + encodeURIComponent(timeMin) +
    '&singleEvents=true&orderBy=startTime&maxResults=3';

  fetch(url)
    .then(function (res) {
      if (!res.ok) throw new Error('Calendar request failed: ' + res.status);
      return res.json();
    })
    .then(function (data) {
      var items = data.items || [];
      list.textContent = '';

      if (!items.length) {
        showMessage('No upcoming events scheduled right now.');
        return;
      }

      items.forEach(function (event) {
        var startValue = event.start.dateTime || event.start.date;
        var date = new Date(startValue);
        var dateLabel = event.start.dateTime
          ? date.toLocaleString(undefined, { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })
          : date.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });

        var li = document.createElement('li');

        var strong = document.createElement('strong');
        strong.textContent = dateLabel;
        li.appendChild(strong);

        li.appendChild(document.createTextNode(' — '));

        var link = document.createElement('a');
        link.href = event.htmlLink;
        link.target = '_blank';
        link.rel = 'noopener';
        link.textContent = event.summary || 'Untitled event';
        li.appendChild(link);

        list.appendChild(li);
      });
    })
    .catch(function (err) {
      showMessage("Couldn't load events right now — see the full calendar below.");
      console.error('upcoming-events fetch failed:', err);
    });
})();
