---
title: inside the automat toolkit
description: Explore the automat controller, solenoid beaters, mounting accessories and optional configuration tools.
layout: product-with-nav
hide_hero: true
full_width_content: true
show_sidebar: false
permalink: /products/automat-toolkit/inside/
image: /img/products/dadamachines-automat-toolkit-l-inside.jpg
product_nav:
  - label: Overview
    url: /products/automat-toolkit/
  - label: Inside
    url: /products/automat-toolkit/inside/
product_section_nav:
  - label: Controller
    url: '#controller'
  - label: Accessories
    url: '#accessories'
  - label: Configuration
    url: '#configuration'
product_nav_cta:
  label: Get notified
  url: '#newsletter'
---

<link rel="stylesheet" href="{{ '/assets/css/product-story.css' | relative_url }}">
<link rel="stylesheet" href="{{ '/assets/css/automat-story.css' | relative_url }}">
<main class="tbd-page automat-page automat-inside container" id="overview">
  <header class="automat-guide-intro" aria-labelledby="inside-title">
      <p class="tbd-eyebrow">The component guide</p>
      <h1 id="inside-title">Inside the automat toolkit</h1>
      <p>Get to know the hardware: what each part does, how it mounts, and what you can play with it.</p>
  </header>
  <section class="tbd-evolution automat-edge-split automat-component" id="controller" aria-labelledby="controller-title">
      <figure class="automat-edge-photo"><img src="{{ '/img/products/dadamachines-automat-top_side.jpg' | relative_url }}" alt="Automat controller viewed from above and the side" width="1920" height="1080" fetchpriority="high"></figure>
      <div class="tbd-story automat-edge-copy">
        <p class="tbd-section-label">Control / Hardware specifications</p>
        <h2 id="controller-title">automat controller</h2>
        <h3>Hardware & connections</h3>
        <ul class="automat-controller-specs">
          <li>USB MIDI and DIN MIDI input</li>
          <li>12 universal DC outputs, 12–24 V, max. 1.4 A</li>
          <li>External 12–24 V power supply</li>
          <li>Simple and advanced learn modes</li>
          <li>Optional configuration tool</li>
          <li>Anodised aluminium panel</li>
          <li>Powder-coated steel enclosure</li>
          <li>110 × 110 × 26 mm</li>
        </ul>
      </div>
  </section>
  <section class="automat-accessories" id="accessories" aria-labelledby="accessories-title">
    <div class="tbd-wrap">
      <p class="tbd-section-label">Beaters, surfaces & mounting</p>
      <h2 id="accessories-title">The parts, in motion.</h2>
      <div class="automat-accessory-grid">
        <article class="automat-component automat-edge-split automat-component-sand">
          <div class="tbd-story automat-edge-copy"><h2>Solenoid beater</h2>
          <p>Custom-made frame solenoids chosen for durable, flexible assembly. Optimised to be quieter than standard solenoids, they can play fast rhythms and withstand repeated use in music machines and kinetic installations.</p></div>
          {% include automat-motion.html name="solenoid" label="Solenoid beater moving in and out to create rhythmic strikes" %}
        </article>
        <article class="automat-component automat-edge-split automat-component-green">
          {% include automat-motion.html name="mallet" label="Solenoid with a mallet adapter playing a percussion instrument" %}
          <div class="tbd-story automat-edge-copy"><h2>Mallet</h2>
          <p>Use real mallets to play glockenspiels, xylophones, frame drums, boxes or even keyboards. The adapter brings familiar percussion instruments into your MIDI-controlled setup.</p></div>
        </article>
        <article class="automat-component automat-edge-split automat-component-lilac">
          <div class="tbd-story automat-edge-copy"><h2>materialdrum</h2>
          <p>Place screws, coins, rice or other materials on the surface. A beater strikes from below, bringing out the rhythms and textures of the materials you choose.</p></div>
          {% include automat-motion.html name="materialdrum" label="Materialdrum struck from below, moving loose materials on its surface" %}
        </article>
        <article class="automat-component automat-edge-split automat-component-sand">
          {% include automat-motion.html name="littlewingman" label="Little wingman mount positioning a beater over an object" %}
          <div class="tbd-story automat-edge-copy"><h2>little wingman</h2>
          <p>Place it directly on an instrument, object or material. Without a fixed playing surface, it adapts to whatever you want to explore.</p></div>
        </article>
        <article class="automat-component automat-edge-split automat-component-green">
          <div class="tbd-story automat-edge-copy"><h2>LEGO adapter</h2>
          <p>Mount solenoid beaters using LEGO bricks. Build and adjust playful setups quickly as you experiment with new sounds.</p></div>
          {% include automat-motion.html name="legoadapter" label="Solenoid beater mounted using a LEGO adapter and bricks" %}
        </article>
        <article class="automat-component automat-edge-split automat-component-lilac">
          {% include automat-motion.html name="roundobjectmount" label="Round object mount attaching a beater to a circular surface" %}
          <div class="tbd-story automat-edge-copy"><h2>Round object mount</h2>
          <p>Attach a solenoid beater to a circular surface, such as a drum or bottle. A flexible way to bring curved objects into your instrument.</p></div>
        </article>
      </div>
    </div>
  </section>
  <section class="tbd-open automat-configuration" id="configuration" aria-labelledby="config-title">
    <div class="tbd-wrap">
    <p class="tbd-section-label">Go further when you need to</p>
    <div class="tbd-story">
      <h2 id="config-title">The optional automat configurator</h2>
      <p class="automat-lead">For most setups, MIDI note on/off messages are enough to start playing. The configurator is for those who want advanced control over dynamics using velocity values. You don't need it to get started.</p>
    </div>
    </div>
    <div class="embed-container"><iframe src="https://www.youtube-nocookie.com/embed/mnedVLVNZiU" title="Using the automat configurator for velocity and dynamics" loading="lazy" allowfullscreen></iframe></div>
  </section>
  {% include automat-story-newsletter.html %}
</main>
<script src="{{ '/assets/js/product-story.js' | relative_url }}" defer></script>
