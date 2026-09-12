---
layout: page
title: Submit a Question
permalink: /submit-a-question/
---

<section class="page-section" markdown="1">

## Submit a Question for the Candidate Forum

Have a question you'd like to see asked at our Township Committee candidate forum? Submit
it below. You can optionally include your name, or submit anonymously.

<form id="forum-question-form" class="contact-form" data-formspree-url="https://formspree.io/f/xaeykgdq">
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
