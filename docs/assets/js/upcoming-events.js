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
    '&singleEvents=true&orderBy=startTime&maxResults=5';

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

      var thisYear = new Date().getFullYear();

      items.forEach(function (event) {
        var isAllDay = !event.start.dateTime;
        var date;

        if (isAllDay) {
          // An all-day event's 'YYYY-MM-DD' goes through the Date constructor as
          // UTC midnight, which formats as the day before anywhere west of
          // Greenwich — build the date in local time so it isn't off by one.
          var parts = event.start.date.split('-');
          date = new Date(+parts[0], +parts[1] - 1, +parts[2]);
        } else {
          date = new Date(event.start.dateTime);
        }

        // Spell out the year only when it isn't the current one, so instances of
        // a yearly event aren't five identical-looking rows.
        var opts = { weekday: 'short', month: 'short', day: 'numeric' };
        if (date.getFullYear() !== thisYear) opts.year = 'numeric';
        if (!isAllDay) {
          opts.hour = 'numeric';
          opts.minute = '2-digit';
        }

        var dateLabel = date.toLocaleString(undefined, opts);

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
