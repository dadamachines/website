---
title: dadamachines @ Superbooth 2026
subtitle: "May 7–9, Berlin — Come see us!"
layout: page
hide_hero: true
full_width_content: true
show_sidebar: false
published: false
---

<section class="section is-medium has-background-dark has-text-centered">
  <h2 class="is-size-2" style="color: white !important;">dadamachines @ Superbooth 2026</h2>
  <p class="is-size-4 has-text-white mt-3">May 7–9 · FEZ Berlin</p>
  <p class="is-size-5 has-text-white mt-4">Five new products. Limited first batches. Pre-order now.</p>
</section>

<section class="section">
  <div class="container">
    <div class="notification" style="border: 3px solid #111; border-radius: 0; background: #fafafa;">
      <div class="has-text-centered">
        <span class="tag is-dark" style="border-radius: 0; font-size: 1rem; padding: 0.5rem 1rem;">Superbooth Early Bird</span>
        <p class="is-size-5 mt-3 has-text-weight-bold">Special pricing on selected products until May 9, 2026</p>
        <p class="is-size-6 mt-1">No payment required now — reserve your unit and pay later before shipping.</p>
      </div>
    </div>
  </div>
</section>

<!-- ── Product Grid ── -->
<section class="section pt-0">
  <div class="container">
    <div class="columns is-multiline" id="superbooth-grid">

      {% for product_entry in site.data.preorder_products %}
      {% assign pid = product_entry[0] %}
      {% assign product = product_entry[1] %}
      <div class="column is-4-desktop is-6-tablet">
        <a href="/shop/{{ pid }}/" style="display: block;">
        <div class="card preorder-campaign" data-product-id="{{ pid }}"
             data-endpoint="{{ site.preorder_endpoint }}"
             data-batch-size="{{ product.batch_size }}"
             {% if product.early_bird and product.early_bird_end != "" %}data-early-bird-end="{{ product.early_bird_end }}"{% endif %}
             style="border: 3px solid #111;">
          <div class="card-image">
            {% if product.image %}
            <figure class="image is-16by9">
              <img src="{{ product.image }}" alt="{{ product.name }}" style="object-fit: cover;" />
            </figure>
            {% else %}
            <div class="has-background-dark has-text-centered" style="aspect-ratio: 16/9; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 1.5rem;">
              <p class="is-size-4 has-text-white has-text-weight-bold" style="margin: 0;">{{ product.name }}</p>
              <p class="is-size-6 has-text-white" style="margin: 0.5rem 0 0;">{{ product.tagline }}</p>
            </div>
            {% endif %}
          </div>
          <div class="card-content">
            <p class="title is-5 mb-1">{{ product.name }}</p>
            <p class="is-size-6 has-text-grey mb-3">{{ product.tagline }}</p>

            <!-- Mini progress bar -->
            <div class="mb-3">
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 0.25rem;">
                <span><strong class="preorder-count" data-product="{{ pid }}">–</strong> of {{ product.batch_size }} reserved</span>
                <span class="preorder-batch-label tag is-light is-small">Batch 1</span>
              </div>
              <progress class="progress preorder-mini-progress preorder-progress" value="0" max="{{ product.batch_size }}">0%</progress>
            </div>

            <!-- Price -->
            <div class="mb-3">
              {% if product.early_bird and product.price_regular != "" %}
              <span class="is-size-4 has-text-weight-bold">{{ product.price }}€</span>
              <span class="is-size-6">{{ product.price_note }}</span>
              <span class="is-size-6 has-text-grey preorder-price-regular"><s>{{ product.price_regular }}€</s></span>
              <span class="tag is-dark preorder-early-bird-tag ml-2" style="border-radius: 0; font-size: 0.75rem;">Early Bird</span>
              {% else %}
              <span class="is-size-4 has-text-weight-bold">{{ product.price }}€</span>
              <span class="is-size-6">{{ product.price_note }}</span>
              {% endif %}
            </div>

            <!-- Sold out banner (hidden) -->
            <div class="preorder-soldout" style="display: none; font-size: 0.85rem; padding: 0.5rem; border: 2px solid #946c00; background: #fffbeb; margin-bottom: 0.75rem;">
              <strong>Batch 1 sold out!</strong>
            </div>

          </div>
        </div>
        </a>
      </div>
      {% endfor %}

    </div>
  </div>
</section>

<script src="{{ '/assets/js/preorder.js' | relative_url }}"></script>
