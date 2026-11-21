---
title: Subscribe
subtitle: Pick what you want to hear about
layout: page
hide_hero: true
full_width_content: true
permalink: /subscribe/
---

<form action="https://app.keila.io/forms/nfrm_kVPeqPR8" method="post">
    <section class="section is-small">
        <div class="container" style="max-width: 800px;">

            <div class="has-text-centered mb-4">
                <h1 class="is-size-3 mb-2">Stay in the loop</h1>
                <p class="is-size-6 has-text-grey">
                    Tell us what you&rsquo;re curious about — change any time by coming back here.
                </p>
            </div>

            <div class="field mb-4" style="max-width: 480px; margin: 0 auto;">
                <label class="label has-text-centered mb-2" for="contact_email_subscribe">Your email address</label>
                <div class="control">
                    <input class="input is-large newsletter-input"
                           id="contact_email_subscribe"
                           name="contact[email]"
                           type="email"
                           placeholder="you@example.com"
                           required>
                </div>
            </div>

            <div class="has-text-centered mb-3">
                <p class="is-size-6 has-text-grey">Pick any — leave them all blank for general dadamachines news.</p>
            </div>

            {%- comment -%}
              Each interest is a checkbox + hidden `false` companion. The hidden
              input wins when the checkbox is unchecked, so unticking a box
              actively sets the field to false on the contact — necessary
              behaviour for an "update my preferences" form. See
              docs/features/11 in dada-calculator and Philipp from Keila's
              email reply 2026-05-16.
            {%- endcomment -%}

            <div class="columns is-multiline">
                <div class="column is-one-third">
                    <label class="subscribe-card">
                        <input type="hidden" name="contact[data][interest_automat_toolkit]" value="false">
                        <input type="checkbox" name="contact[data][interest_automat_toolkit]" value="true" class="subscribe-card-input">
                        <div class="subscribe-card-image" style="background-image: url('/img/projects/dadamachines-automat-toolkit.jpg');"></div>
                        <div class="subscribe-card-body">
                            <div class="subscribe-card-head">
                                <h3 class="is-size-4">automat toolkit</h3>
                                <div class="subscribe-card-check"></div>
                            </div>
                            <p class="is-size-6 has-text-grey">Accessories, firmware, projects.</p>
                        </div>
                    </label>
                </div>

                <div class="column is-one-third">
                    <label class="subscribe-card">
                        <input type="hidden" name="contact[data][interest_tbd_sixteen]" value="false">
                        <input type="checkbox" name="contact[data][interest_tbd_sixteen]" value="true" class="subscribe-card-input">
                        <div class="subscribe-card-image" style="background-image: url('/img/products/tbd16_03_Samples_pastel-blue_16x9.png');"></div>
                        <div class="subscribe-card-body">
                            <div class="subscribe-card-head">
                                <h3 class="is-size-4">tbd-16</h3>
                                <div class="subscribe-card-check"></div>
                            </div>
                            <p class="is-size-6 has-text-grey">Reservation news + launch updates.</p>
                        </div>
                    </label>
                </div>

                <div class="column is-one-third">
                    <label class="subscribe-card">
                        <input type="hidden" name="contact[data][interest_edad]" value="false">
                        <input type="checkbox" name="contact[data][interest_edad]" value="true" class="subscribe-card-input">
                        <div class="subscribe-card-image" style="background-image: url('/img/products/everydivision.png');"></div>
                        <div class="subscribe-card-body">
                            <div class="subscribe-card-head">
                                <h3 class="is-size-4">every division and duration</h3>
                                <div class="subscribe-card-check"></div>
                            </div>
                            <p class="is-size-6 has-text-grey">Eurorack module — pre-order news.</p>
                        </div>
                    </label>
                </div>
            </div>

            <!-- Honeypot field for spam protection -->
            <input aria-hidden="true" autocomplete="off" name="h[url]" novalidate style="display: none;" type="text">

            {%- comment -%}
              Adoption-tracking timestamp for the Slice 1.5 "set your
              preferences" campaign — populated by the inline JS below
              right before submit. Keila silently drops this unless a
              Custom field with Data Key `preferences_set_at` (Type:
              Text) is configured on form nfrm_kVPeqPR8. When the field
              is added, every submit stamps the contact with the time
              they last touched this page, so we can answer "X of
              3,412 set preferences within 30 days" later.
            {%- endcomment -%}
            <input type="hidden" name="contact[data][preferences_set_at]" id="contact_preferences_set_at" value="">

            <!-- hCaptcha -->
            <div class="mt-4 mb-4" style="display: flex; justify-content: center;">
                <div class="h-captcha" data-sitekey="a1c5fab7-71df-4ea4-af75-87a3d07c61de" data-theme="light"></div>
            </div>

            <div class="has-text-centered">
                <button class="explore-link is-dark is-large is-reversed" type="submit">Subscribe</button>
            </div>

            <p class="is-size-7 has-text-grey has-text-centered mt-3">
                Already subscribed? Re-submit with the same email to update your interests. Unsubscribe any time via the link in any newsletter.
            </p>
        </div>
    </section>
</form>

<script src="https://hcaptcha.com/1/api.js" async defer></script>
<script>
  (function () {
    // Pre-fill the email field from ?email= so the Slice 1.5 campaign
    // can deep-link people to a form that already knows who they are.
    // Campaign template uses Keila's Liquid:
    //   /subscribe/?email={{ contact.email | url_encode }}
    var params = new URLSearchParams(window.location.search);
    var emailFromUrl = params.get("email");
    var emailEl = document.getElementById("contact_email_subscribe");
    if (emailFromUrl && emailEl) {
      emailEl.value = emailFromUrl;
    }

    // Stamp preferences_set_at. Set it on page load AND on form submit
    // (belt-and-braces). Setting on load is the load-bearing one — Keila's
    // Ecto cast/3 treats empty strings as "no value" and silently drops the
    // field, so if the submit handler ever doesn't fire (programmatic
    // .submit() bypasses the event, captcha re-submit, etc.) we'd lose
    // the stamp entirely. Page-load means at-worst the timestamp is a few
    // seconds older than the actual submit — fine for adoption tracking.
    var stampEl = document.getElementById("contact_preferences_set_at");
    var stamp = function () {
      if (stampEl) stampEl.value = new Date().toISOString();
    };
    stamp();
    var form = emailEl ? emailEl.closest("form") : null;
    if (form) form.addEventListener("submit", stamp);
  })();
</script>
