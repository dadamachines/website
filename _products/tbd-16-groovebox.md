---
title: tbd-16
manufacturer: dadamachines
description: Compact, capable and open by design. A standalone groovebox for synthesis, sampling, sequencing and effects.
layout: product
category: groovebox
shop_section: desktop
sort_order: 0
hide_hero: true
show_sidebar: false
image: /img/products/tbd-16/hero.webp
reference_price_key: tbd_16
launch_updates: true
product_render: true
notification_url: '#newsletter'
---

<link rel="stylesheet" href="{{ '/assets/css/product-story.css' | relative_url }}">

<section class="product-description-prose" aria-labelledby="product-info-title">
  <h2 id="product-info-title">dadamachines TBD-16:<br>compact, capable and open by design</h2>
  <p>The TBD-16 is a compact 16-track groovebox from Berlin-based dadamachines. Despite its 110 × 110 × 25 mm footprint, it combines synthesis, sampling, sequencing and effects in one standalone instrument made for hands-on music making.</p>

  <h3>From prototype to production</h3>
  <p>Since its first presentation at Superbooth, the TBD-16 has evolved considerably on its way to production. The hardware was revised for significantly improved audio quality and gained a second stereo audio input and a separate headphone/cue output. At the same time, the Groovebox firmware has grown with many new features and refinements.</p>

  <h3>More than 40 machines and effects</h3>
  <p>Sound machines cover analogue-style, digital, FM and 606-inspired drums; mono and polyphonic synthesis; wavetable, physical-modelling and speech synthesis; acid bass; samples; and external audio. Machines are not tied to fixed slots: any drum machine can run on any drum track, and any synth machine on any synth track.</p>
  <p>Two dedicated FX tracks use the same flexible machine concept, with a choice of delays, reverbs, modulation and Beat Repeat effects. The master channel adds bus compression, sidechain and a DJ-style filter.</p>

  <h3>Quick to get started. Deep when needed.</h3>
  <p>Patterns can run up to 64 steps, with per-step parameter locks, probability, retriggers, velocity and note length, independent track lengths, LFOs, random modulation, flexible time signatures and pattern rotation. Four high-resolution endless potentiometers and 16 RGB step keys keep the workflow direct and tactile.</p>

  <h3>A standalone instrument, open by design</h3>
  <p>The TBD-16 is built on the open-source CTAG TBD audio platform, but first and foremost it is a finished standalone instrument: switch it on and start making music. A browser-based WebUI handles samples, presets and configuration, while USB host, MIDI, Ableton Link, Eurorack clock/reset, two stereo audio inputs and separate main and headphone/cue outputs make it easy to integrate into larger setups.</p>
</section>

<section class="product-specifications" aria-labelledby="features-title">
  <h2 id="features-title">Features & specifications</h2>
  {% include product-specifications.html groups=site.data.tbd16_specifications grid_class="product-specification-grid" list_class="product-brand-list" %}
</section>

<section class="product-detail-demo" aria-labelledby="shop-demo-title">
  <h2 id="shop-demo-title">tbd-16 in action</h2>
  <div class="embed-container">
    <iframe src="https://www.youtube-nocookie.com/embed/CsuWqoNETSg" title="tbd-16 by dadamachines: Superbooth demo" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
  <div class="embed-container">
    <iframe src="https://www.youtube-nocookie.com/embed/L6V49qhVTLY" title="tbd-16 product demonstration" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
</section>

<section class="product-description-prose product-launch-info" aria-labelledby="launch-title">
  <h2 id="launch-title">Availability</h2>
  <p>Pre-orders aren't open yet. We'll open them once the shipping date has been confirmed with our supplier. Newsletter signup does not reserve a unit.</p>
  <p><a href="{{ '/products/tbd-16/' | relative_url }}">Explore the instrument, demo, production photos and team →</a></p>
</section>

<section class="tbd-page tbd-newsletter has-text-centered" id="newsletter" aria-labelledby="shop-updates-title">
  <div class="tbd-newsletter-inner">
    <h2 id="shop-updates-title">Stay in the loop</h2>
    <p>Sign up to hear when tbd-16 pre-orders open, plus news on firmware and new machines.</p>
    <label class="tbd-email-label" for="contact_email_tbd16_shop_updates">Your email address</label>
    {% include newsletter-with-intent.html data_key="interest_tbd_sixteen" id_suffix="tbd16_shop_updates" theme="dark" button_class="is-blue" %}
    <p class="tbd-newsletter-disclaimer">The shipping date is not confirmed yet. Newsletter signup does not reserve a unit.</p>
  </div>
</section>
