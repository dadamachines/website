---
title: dadamachines
layout: page
hide_hero: true
full_width_content: true
hero_slides:
  - title: "tbd-16"
    subtitle: "compact, capable and open by design"
    image: "/img/products/tbd-16/home-hero-top.webp"
    image_fit: contain
    background_color: "#dfe7ef"
    text_color: "#ffffff"
    link_style: "is-light is-large is-reversed"
    link: /products/tbd-16/
    link_text: Explore
  - title: "the automat toolkit"
    subtitle: "create your own analog sound"
    image: "/img/projects/dadamachines-automat-toolkit-1600.webp"
    image_small: "/img/projects/dadamachines-automat-toolkit-800.webp"
    image_large: "/img/projects/dadamachines-automat-toolkit-2400.webp"
    text_color: "#ffffff"
    link_style: "is-light is-large is-reversed"
    link: /products/automat-toolkit/
    link_text: Explore
  - title: "every division and duration"
    subtitle: "a polytemporal instrument in 12HP Eurorack format"
    image: "/img/products/every-division-and-duration.jpg"
    text_color: "#ffffff"
    link_style: "is-light is-large is-reversed"
    link: /products/every-division-and-duration/
    link_text: Explore
callouts:
show_sidebar: false
---


<link rel="stylesheet" href="{{ '/assets/css/product-story.css' | relative_url }}">
<div class="tbd-page home-story">
  {% for story in site.data.home_stories %}
    {% include story-teaser.html story=story %}
  {% endfor %}
  <section class="tbd-newsletter home-newsletter" aria-label="Newsletter signup">
    {% include newsletter-bulma.html title="Stay in the loop" theme="dark" button_class="is-blue is-medium" %}
  </section>
</div>
