---
title: dadamachines @ Superbooth 2026
subtitle: "May 7–9, Berlin — Come see us!"
layout: page
hide_hero: true
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
        <div class="card preorder-campaign" data-product-id="{{ pid }}"
             data-endpoint="{{ site.preorder_endpoint }}"
             data-batch-size="{{ product.batch_size }}"
             {% if product.early_bird and product.early_bird_end != "" %}data-early-bird-end="{{ product.early_bird_end }}"{% endif %}
             style="height: 100%; border: 3px solid #111;">
          <div class="card-image">
            <div class="has-background-dark has-text-centered" style="padding: 3rem 1.5rem; min-height: 180px; display: flex; align-items: center; justify-content: center;">
              <div>
                <p class="is-size-4 has-text-white has-text-weight-bold">{{ product.name }}</p>
                <p class="is-size-6 has-text-white mt-1">{{ product.tagline }}</p>
              </div>
            </div>
          </div>
          <div class="card-content">
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
              <span class="tag is-dark preorder-early-bird-tag" style="border-radius: 0; font-size: 0.75rem;">Early Bird</span>
              <span class="is-size-4 has-text-weight-bold ml-2">{{ product.price }}€</span>
              <span class="is-size-6">{{ product.price_note }}</span>
              <span class="is-size-6 has-text-grey preorder-price-regular"><s>{{ product.price_regular }}€</s></span>
              {% else %}
              <span class="is-size-4 has-text-weight-bold">{{ product.price }}€</span>
              <span class="is-size-6">{{ product.price_note }}</span>
              {% endif %}
            </div>

            <!-- Sold out banner (hidden) -->
            <div class="preorder-soldout" style="display: none; font-size: 0.85rem; padding: 0.5rem; border: 2px solid #946c00; background: #fffbeb; margin-bottom: 0.75rem;">
              <strong>Batch 1 sold out!</strong>
            </div>

            <!-- CTA -->
            <a href="/products/{{ product.product_group }}/#{{ pid }}" class="explore-link is-dark is-medium" style="width: 100%; text-align: center;">
              Pre-order now
            </a>
          </div>
        </div>
      </div>
      {% endfor %}

    </div>
  </div>
</section>

<!-- ── QR Codes for Booth Display ── -->
<section class="section has-background-white-bis">
  <div class="container">
    <h2 class="is-size-3 has-text-centered mb-5">QR Codes for Booth Display</h2>
    <p class="has-text-centered is-size-5 mb-5">Print these URLs as QR codes for your Superbooth booth signage.</p>
    <div class="columns is-multiline">
      {% for product_entry in site.data.preorder_products %}
      {% assign pid = product_entry[0] %}
      {% assign product = product_entry[1] %}
      <div class="column is-4-desktop is-6-tablet">
        <div class="box" style="border: 3px solid #111; border-radius: 0;">
          <p class="has-text-weight-bold">{{ product.name }}</p>
          <p class="is-size-7 is-family-monospace mt-2" style="word-break: break-all;">
            https://dadamachines.com/products/{{ product.product_group }}/#{{ pid }}
          </p>
          <a href="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://dadamachines.com/products/{{ product.product_group }}/%23{{ pid }}" target="_blank" rel="noopener" class="explore-link is-dark is-small mt-3">
            Generate QR Code ↗
          </a>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<script src="{{ '/assets/js/preorder.js' | relative_url }}"></script>
