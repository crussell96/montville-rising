---
layout: page
title: Submit a Question for the Candidate Forum
permalink: /submit-a-question/
hide_heading: true
---

<section class="page-section" markdown="1">

## Submit a Question for the Candidate Forum

On October 21st, 2026 at 6:30pm the four candidates for the Montville Township Committee
will have an opportunity to share their plans for the town.

If you can't attend in person, the event will be livestreamed at
[youtube.com/live/C_8hAgwbdl0](https://www.youtube.com/live/C_8hAgwbdl0) and recorded.

Have a question you'd like to see asked at the forum? Submit it below by **October 1st**. You
can optionally include your name, or submit anonymously.

<form id="forum-question-form" class="contact-form" data-formspree-url="https://formspree.io/f/xaeykgdq" data-thank-you-url="{{ "/thank-you/" | relative_url }}">
  <div class="contact-form-field">
    <label for="forum-question-name">Name (optional)</label>
    <input type="text" id="forum-question-name" name="name" value="Anonymous">
  </div>
  <div class="contact-form-field">
    <label for="forum-question-question">Your Question</label>
    <textarea id="forum-question-question" name="question" rows="5" required></textarea>
  </div>
  <input type="text" name="_gotcha" class="contact-form-honeypot" tabindex="-1" autocomplete="off">
  <button type="submit" class="btn">Submit Question</button>
  <p class="contact-form-status" role="status"></p>
</form>

<script src="{{ "/assets/js/forum-question-form.js" | relative_url }}"></script>

</section>
