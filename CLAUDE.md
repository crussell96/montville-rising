# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The Jekyll source for the montville-rising.org website (a local community activist group site), deployed via GitHub Pages to the custom domain `www.montville-rising.org`. All site source lives under `docs/` (this is the GitHub Pages publishing root, not documentation).

## Commands

Run everything from `docs/`, not the repo root:

```
cd docs
bundle install          # first-time setup / after Gemfile changes
bundle exec jekyll serve
```

Site serves at `http://localhost:4000/`. There is no test suite, linter, or build step beyond Jekyll's own build.

`_config.yml` is only read at server startup — restart `jekyll serve` after editing it.

## Architecture

- **`docs/_config.yml`** — site-wide settings (title, url, calendar IDs/keys). `calendar_id` and `calendar_api_key` are consumed client-side by `assets/js/upcoming-events.js`, which calls the Google Calendar API directly from the browser to render the "next 5 events" list on the home page. Because this is a static site with no server, that key is necessarily public in the shipped JS — it isn't meant to be secret. Its security depends on being scoped/restricted in Google Cloud Console (Calendar API only, HTTP referrer restriction to the site's domain), not on being hidden.
- **`docs/events.markdown`** additionally embeds the same Google Calendar directly via `<iframe>` (grid + agenda views) for the full calendar view.
- **Layouts**: `_layouts/default.html` wraps every page with `_includes/header.html` (nav) and `_includes/footer.html`; `_layouts/page.html` (used by most content pages) adds the post-title header and wraps content in `.post-content`.
- **Nav** is driven by `header_pages` in `_config.yml` (an ordered list of source filenames) — adding a page to the nav means adding its filename there, not just creating the file.
- **Styling**: single `assets/main.scss`, imported via minima's `assets/main.scss` convention. No component-level CSS files — new UI patterns get added as new blocks in this one file.
- **Recurring content patterns** (reused across pages, styled in `main.scss`):
  - `.focus-accordion` / `.focus-accordion-item` (`<details>`/`<summary>`) — used for "Past Events & Wins" entries on `events.markdown`.
  - `.partner-org-list` / `.partner-org-card` — used for the partner org grid on `get-involved.markdown`.
  - `.photo-carousel` (driven by `assets/js/photo-carousel.js`, `data-interval` attribute) — auto-advancing image carousel embedded inside accordion bodies and About page cards.
- **`assets/js/`** — one plain vanilla-JS file per interactive feature, no bundler: `contact-form.js` (Formspree AJAX submit for the contact form), `election-countdown.js`, `photo-carousel.js`, `upcoming-events.js`. Each is self-contained and looked up by DOM id/attributes from the page that needs it, then included with a `<script src>` tag at the bottom of that specific page — they are not global includes.
- Photos referenced by pages live under `docs/images/`, organized into subfolders like `picstocyclethrough/` and per-context folders (e.g. `delaney/`) — carousels reference these via Liquid's `relative_url` filter.
