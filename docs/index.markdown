---
layout: home
---

<h1 class="home-heading">Montville Rising &amp; The Visibility Brigade</h1>

<p class="home-intro">
  Neighbors organizing for democracy — through peaceful action, civic engagement, and visible
  community presence. Explore our <a href="{{ "/about/" | relative_url }}">mission</a>, upcoming
  <a href="{{ "/events/" | relative_url }}">events</a>, and ways to get
  <a href="{{ "/get-involved/" | relative_url }}">involved</a>.
</p>

<section class="quote-photo"
         style="background-image: url('{{ "/images/weareamericans_wide.jpg" | relative_url }}');">
  <blockquote class="pull-quote pull-quote-onphoto">
    We disrupt apathy, spark public discourse, and defend democratic values.
  </blockquote>
</section>

<section class="page-section section-tint compact">
  <h2>Upcoming Events &amp; Important Dates</h2>

  <section id="upcoming-events" class="upcoming-events"
           data-calendar-id="{{ site.calendar_id }}"
           data-api-key="{{ site.calendar_api_key }}">
    <ul id="upcoming-events-list">
      <li>Loading upcoming events…</li>
    </ul>
  </section>

  <p><a href="{{ "/events/" | relative_url }}">See the full calendar &rarr;</a></p>
</section>

<section class="page-section">
  <h2>What We're Focused On Right Now</h2>

  <div class="focus-accordion">
    <details class="focus-accordion-item" open>
      <summary><span class="pillar-icon" aria-hidden="true">📣</span> Weekly Visibility Brigade Action</summary>
      <div class="focus-accordion-body">
        <p>Every Wednesday, 4:30–5:30 PM.</p>
        <ul>
          <li>Get out there and let your voice be heard. Learn more about <a href="https://www.visibilitybrigade.com/" target="_blank" rel="noopener">The Visibility Brigade.</a>
          </li>
          <li>
            Follow us on Instagram:
            <a href="https://www.instagram.com/vbmontvillerising/" target="_blank" rel="noopener">@vbmontvillerising</a>
          </li>
        </ul>
      </div>
    </details>
    <details class="focus-accordion-item">
      <summary><span class="pillar-icon" aria-hidden="true">🗳️</span> 2026 Midterm Elections</summary>
      <div class="focus-accordion-body">
        <p>The most important midterms of our lives are coming up in November.</p>
        <ul>
          <li>
            Make sure you're registered to vote. Go here for
            <a href="https://www.nj.gov/state/elections/vote.shtml" target="_blank" rel="noopener">voter information in NJ</a>.
            <div class="qr-row">
              <div class="qr-item">
                <img src="{{ "/images/RegistertoVoteQR.PNG" | relative_url }}" alt="QR code to register to vote">
                <span>Register to Vote</span>
              </div>
              <div class="qr-item">
                <img src="{{ "/images/CheckRegistration_QR.PNG" | relative_url }}" alt="QR code to check your voter registration">
                <span>Check Your Registration</span>
              </div>
            </div>
          </li>
          <li>
            Join the Indivisible
            <a href="https://indivisible.org/events/hands-off-our-vote-2/" target="_blank" rel="noopener">Hands Off Our Vote kickoff call</a>
            on 7/30 at 8PM.
          </li>
        </ul>
      </div>
    </details>
    <details class="focus-accordion-item">
      <summary><span class="pillar-icon" aria-hidden="true">⚠️</span> Delaney Hall</summary>
      <div class="focus-accordion-body">
        <p>The detainees at Delaney Hall still need our assistance. [ADD MORE INFO]</p>
      </div>
    </details>
    <details class="focus-accordion-item">
      <summary><span class="pillar-icon" aria-hidden="true">🏛️</span> Montville Township Committee</summary>
      <div class="focus-accordion-body">
        <p>
          Emily Ryzuk and Shari Seffer are running for Montville Township Committee. Join their
          campaign kickoff on Sunday, August 2 from 7–9 PM at the Black Rabbit Saloon.
        </p>
        <a href="{{ "/images/SheriKickoff.jpg" | relative_url }}" target="_blank" rel="noopener">
          <img src="{{ "/images/SheriKickoff.jpg" | relative_url }}"
               alt="Campaign kickoff flyer for Emily Ryzuk and Shari Seffer, Sunday August 2, 7-9pm at Black Rabbit Saloon"
               class="focus-flyer">
        </a>
      </div>
    </details>
  </div>

</section>

<section class="page-section section-tint cta-section">
  <h2>Get Involved</h2>
  <p>Want to join us?</p>
  <a class="btn" href="{{ "/get-involved/" | relative_url }}">See How to Get Involved</a>
</section>

<script src="{{ "/assets/js/upcoming-events.js" | relative_url }}"></script>
