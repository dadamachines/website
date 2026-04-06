---
title: tbd-core
subtitle: The TBD platform — without the box
layout: product-with-nav
hide_hero: true
full_width_content: true
show_sidebar: false
published: false
permalink: /products/tbd-core/
product_nav:
  - label: Overview
    url: /products/tbd-16/
  - label: Apps
    url: /products/tbd-16/apps/
  - label: tbd-core
    url: /products/tbd-core/
  - label: Team
    url: /products/tbd-16/story/
product_nav_cta:
  label: Reserve now
  url: /shop/tbd-core/
---

<!-- ── Hero intro ── -->

<section class="section">
  <div class="container">
    <div class="columns is-vcentered">
      <div class="column is-5">
        <h1 class="title is-1 mb-2">tbd-core</h1>
        <p class="is-size-4" style="line-height: 1.6;">The core board from the <a href="/products/tbd-16/">tbd-16</a>, available separately for instrument designers and product developers who want to build custom hardware around the TBD platform.</p>
      </div>
      <div class="column is-7">
        <img src="/img/products/dadamachines-tbd-16_mockup_003.jpg" alt="dadamachines tbd-core">
      </div>
    </div>
  </div>
</section>

<!-- ── Key stats strip ── -->

<section style="border-top: 1px solid #eee; border-bottom: 1px solid #eee;">
  <div class="container">
    <div class="columns is-mobile is-multiline has-text-centered py-5">
      <div class="column">
        <p class="is-size-2 has-text-weight-bold mb-1">3</p>
        <p class="is-size-6 has-text-grey">Processors</p>
      </div>
      <div class="column">
        <p class="is-size-2 has-text-weight-bold mb-1">50+</p>
        <p class="is-size-6 has-text-grey">DSP Plugins</p>
      </div>
      <div class="column">
        <p class="is-size-2 has-text-weight-bold mb-1">30</p>
        <p class="is-size-6 has-text-grey">Pin FFC</p>
      </div>
      <div class="column">
        <p class="is-size-2 has-text-weight-bold mb-1">0</p>
        <p class="is-size-6 has-text-grey">Lock-in</p>
      </div>
    </div>
  </div>
</section>

<!-- ── 01 Same platform, your product ── -->

<section class="section">
  <div class="container">
    <div class="columns is-vcentered">
      <div class="column is-7">
        <p class="is-size-7 has-text-grey has-text-weight-bold mb-2">/ 01</p>
        <h2 class="is-size-3">Same platform, your product</h2>
        <p class="is-size-5 mt-4">The tbd-core bridges the gap between the ready-to-use <a href="/products/tbd-16/">tbd-16</a> instrument and a fully custom PCB integration — giving you a proven, production-grade DSP platform with the freedom to design your own user interface and enclosure.</p>
        <p class="is-size-5 mt-4">All audio, MIDI, and USB connectors come assembled on the board — identical to the tbd-16. The same firmware, the same 50+ DSP plugins, the same web interface. Everything works out of the box.</p>
      </div>
      <div class="column is-5">
        <table class="table is-fullwidth" style="background: transparent;">
          <tbody>
            <tr><td style="width: 40%;"><strong>tbd-16</strong></td><td>Enclosure, knobs, buttons, display — included</td></tr>
            <tr><td><strong>tbd-core</strong></td><td>Same board — you design the interface</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>

<!-- ── 02 What's on the board ── -->

<section class="section" style="background-color: #f9f9f9;">
  <div class="container">
    <p class="is-size-7 has-text-grey has-text-weight-bold mb-2">/ 02</p>
    <h2 class="is-size-3">What's on the board</h2>
    <p class="is-size-5 mt-4 mb-6">Three processors, audio codec, power management, all I/O jacks, and a 30-pin FFC connector for your custom UI board — no carrier board required.</p>
    <div class="columns">
      <div class="column">
        <h3 class="is-size-5 has-text-weight-bold">ESP32-P4</h3>
        <p class="is-size-6 has-text-grey mb-2">DSP Engine</p>
        <p class="is-size-5">Dual RISC-V @ 400 MHz · 32 MB stacked PSRAM · 16 MB Flash · AI/vector instructions</p>
      </div>
      <div class="column">
        <h3 class="is-size-5 has-text-weight-bold">RP2350B</h3>
        <p class="is-size-6 has-text-grey mb-2">UI / MIDI</p>
        <p class="is-size-5">Dual Arm Cortex-M33 @ 150 MHz · 520 KB SRAM · 48 GPIO · 8× 12-bit ADC · 12× PIO state machines</p>
      </div>
      <div class="column">
        <h3 class="is-size-5 has-text-weight-bold">ESP32-C6</h3>
        <p class="is-size-6 has-text-grey mb-2">WiFi</p>
        <p class="is-size-5">WiFi 6 (802.11ax) · Bluetooth 5 · Managed by the P4</p>
      </div>
    </div>
    <div class="columns mt-4">
      <div class="column is-4">
        <h3 class="is-size-5 has-text-weight-bold">TLV320AIC3254</h3>
        <p class="is-size-6 has-text-grey mb-2">Audio Codec</p>
        <p class="is-size-5">Stereo 24-bit ADC/DAC with embedded miniDSP · DAC SNR > 110 dB</p>
      </div>
      <div class="column is-4">
        <h3 class="is-size-5 has-text-weight-bold">All I/O Jacks</h3>
        <p class="is-size-6 has-text-grey mb-2">Assembled</p>
        <p class="is-size-5">Audio in/out, headphone out, MIDI in/out, 3× USB-C, 1× USB-A host, 2× micro SD</p>
      </div>
      <div class="column is-4">
        <h3 class="is-size-5 has-text-weight-bold">30-pin FFC</h3>
        <p class="is-size-6 has-text-grey mb-2">UI Expansion</p>
        <p class="is-size-5">GPIO, SPI/I2C, analog inputs, power rails — connect your custom buttons, encoders, LEDs, and displays</p>
      </div>
    </div>
  </div>
</section>

<!-- ── 03 tbd-16 vs tbd-core ── -->

<section class="section">
  <div class="container">
    <p class="is-size-7 has-text-grey has-text-weight-bold mb-2">/ 03</p>
    <h2 class="is-size-3 mb-5">How it differs from tbd-16</h2>
    <div class="content">
      <table class="table is-fullwidth mt-4" style="background: transparent;">
        <thead>
          <tr><th style="width: 40%;">Feature</th><th>tbd-16</th><th>tbd-core</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Enclosure & front panel</strong></td><td>Included</td><td>You design your own</td></tr>
          <tr><td><strong>Knobs, buttons, display</strong></td><td>Included (via UI board + FFC)</td><td>Via FFC to your UI board</td></tr>
          <tr><td><strong>Audio, MIDI, USB jacks</strong></td><td>Included</td><td>Included (same as tbd-16)</td></tr>
          <tr><td><strong>DSP engine & firmware</strong></td><td>Same</td><td>Same</td></tr>
          <tr><td><strong>Plugin library (50+)</strong></td><td>Same</td><td>Same</td></tr>
        </tbody>
      </table>
    </div>
    <p class="is-size-5 mt-4">The tbd-16 includes a separate UI board (connected via FFC) with an STM32F030R8T6 I/O controller that reads the buttons, endless potentiometers, and other inputs via I2C. With the tbd-core, you design your own UI board to connect through the same FFC.</p>
  </div>
</section>

<!-- ── 04 Use cases ── -->

<section class="section" style="background-color: #f9f9f9;">
  <div class="container">
    <p class="is-size-7 has-text-grey has-text-weight-bold mb-2">/ 04</p>
    <h2 class="is-size-3 mb-6">Use cases</h2>
    <div class="columns">
      <div class="column">
        <h3 class="is-size-5 has-text-weight-bold">Custom instruments</h3>
        <p class="is-size-5 mt-2">Design a guitar pedal, desktop synth, or performance controller with your own panel layout and controls.</p>
      </div>
      <div class="column">
        <h3 class="is-size-5 has-text-weight-bold">Product prototyping</h3>
        <p class="is-size-5 mt-2">Validate a product concept quickly using the proven TBD platform before committing to a custom PCB.</p>
      </div>
    </div>
    <div class="columns mt-2">
      <div class="column">
        <h3 class="is-size-5 has-text-weight-bold">Educational platforms</h3>
        <p class="is-size-5 mt-2">Build teaching tools with custom interfaces tailored to specific learning objectives.</p>
      </div>
      <div class="column">
        <h3 class="is-size-5 has-text-weight-bold">Art installations</h3>
        <p class="is-size-5 mt-2">Embed DSP processing in interactive or generative sound installations with custom enclosures.</p>
      </div>
    </div>
  </div>
</section>

<!-- ── 05 Technical specifications ── -->

<section class="section">
  <div class="container">
    <p class="is-size-7 has-text-grey has-text-weight-bold mb-2">/ 05</p>
    <h2 class="is-size-3 mb-5">Technical specifications</h2>
    <div class="content">
      <table class="table is-fullwidth mt-4" style="background: transparent;">
        <tbody>
          <tr><td style="width: 30%;"><strong>DSP Processor</strong></td><td>ESP32-P4 — Dual RISC-V @ 400 MHz · 32 MB PSRAM · 16 MB Flash</td></tr>
          <tr><td><strong>UI / MIDI Processor</strong></td><td>RP2350B — Dual Arm Cortex-M33 @ 150 MHz · 520 KB SRAM · 48 GPIO</td></tr>
          <tr><td><strong>WiFi Co-Processor</strong></td><td>ESP32-C6 (managed by the P4)</td></tr>
          <tr><td><strong>Audio Codec</strong></td><td>TLV320AIC3254 — Stereo 24-bit ADC/DAC with embedded miniDSP</td></tr>
          <tr><td><strong>Sample Rate</strong></td><td>44.1 kHz (codec supports 8–192 kHz)</td></tr>
          <tr><td><strong>Bit Depth</strong></td><td>32-bit I2S bus · 32-bit float internal processing</td></tr>
          <tr><td><strong>DAC SNR</strong></td><td>> 110 dB (A-weighted, measured)</td></tr>
          <tr><td><strong>Audio I/O</strong></td><td>Stereo line in · stereo line out · headphone out (all TRS 3.5 mm)</td></tr>
          <tr><td><strong>MIDI</strong></td><td>2× TRS In (Type-A) · 2× TRS Out · USB MIDI · USB Host MIDI</td></tr>
          <tr><td><strong>USB Ports</strong></td><td>3× USB-C · 1× USB-A Host</td></tr>
          <tr><td><strong>Wireless</strong></td><td>WiFi 6 · Ableton Link</td></tr>
          <tr><td><strong>Storage</strong></td><td>2× micro SD (P4 + RP2350)</td></tr>
          <tr><td><strong>Power</strong></td><td>USB-C (5 V)</td></tr>
          <tr><td><strong>UI Expansion</strong></td><td>30-pin FFC connector for custom UI boards</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<!-- ── 06 Proven lineage ── -->

<section class="section" style="background-color: #f9f9f9;">
  <div class="container">
    <p class="is-size-7 has-text-grey has-text-weight-bold mb-2">/ 06</p>
    <h2 class="is-size-3">Proven lineage</h2>
    <p class="is-size-5 mt-4">The TBD platform has a track record across multiple products and form factors:</p>
    <div class="columns mt-5">
      <div class="column">
        <h3 class="is-size-5 has-text-weight-bold"><a href="/products/tbd-16/">tbd-16</a></h3>
        <p class="is-size-5 mt-2">The current-generation desktop instrument by dadamachines.</p>
      </div>
      <div class="column">
        <h3 class="is-size-5 has-text-weight-bold">CTAG TBD Eurorack</h3>
        <p class="is-size-5 mt-2">The original open-source module, commercially sold by <a href="https://instrumentsofthings.com/products/tbd" target="_blank" rel="noopener">Instruments of Things</a>.</p>
      </div>
      <div class="column">
        <h3 class="is-size-5 has-text-weight-bold">AE Modular TBD</h3>
        <p class="is-size-5 mt-2">Compact adaptation by <a href="https://www.tangiblewaves.com/store/p149/TBD.html" target="_blank" rel="noopener">tangible waves</a> for the AE Modular ecosystem.</p>
      </div>
    </div>
    <p class="is-size-5 mt-5">Upstream repository: <a href="https://github.com/ctag-fh-kiel/ctag-tbd" target="_blank" rel="noopener">ctag-fh-kiel/ctag-tbd</a>. All software is GPL 3.0.</p>
  </div>
</section>

<!-- ── 07 Custom integration ── -->

<section class="section is-medium has-background-dark">
  <div class="container">
    <p class="is-size-7 has-text-weight-bold mb-2" style="color: #999;">/ 07</p>
    <h2 class="is-size-3" style="color: white !important;">Need more than a module?</h2>
    <p class="is-size-5 has-text-white mt-4" style="max-width: 720px;">For manufacturers who need full control over form factor, connectors, and cost optimization, dadamachines offers custom integration of the TBD platform directly onto your PCB.</p>
    <div class="columns mt-5">
      <div class="column">
        <h3 class="is-size-5 has-text-weight-bold" style="color: white !important;">Hardware design</h3>
        <p class="is-size-6" style="color: #ccc;">Schematic capture, PCB layout, signal integrity</p>
      </div>
      <div class="column">
        <h3 class="is-size-5 has-text-weight-bold" style="color: white !important;">Industrial design</h3>
        <p class="is-size-6" style="color: #ccc;">Enclosure design, manufacturing-ready mechanical engineering</p>
      </div>
      <div class="column">
        <h3 class="is-size-5 has-text-weight-bold" style="color: white !important;">UX/UI design</h3>
        <p class="is-size-6" style="color: #ccc;">Interaction design, display interfaces, control surface ergonomics</p>
      </div>
    </div>
    <p class="is-size-5 has-text-white mt-5" style="max-width: 720px;">Alternative audio codecs available for custom channel counts — including the AK4619VN (4 in / 4 out) for multi-channel instruments and mixer applications.</p>
  </div>
</section>

<!-- ── 08 How it works ── -->

<section class="section">
  <div class="container">
    <p class="is-size-7 has-text-grey has-text-weight-bold mb-2">/ 08</p>
    <h2 class="is-size-3 mb-6">How it works</h2>
    <div class="columns">
      <div class="column has-text-centered">
        <p class="is-size-2 has-text-weight-bold mb-2">1</p>
        <h3 class="is-size-5 has-text-weight-bold">Consultation</h3>
        <p class="is-size-5 mt-2">We discuss your product concept, requirements, and timeline.</p>
      </div>
      <div class="column has-text-centered">
        <p class="is-size-2 has-text-weight-bold mb-2">2</p>
        <h3 class="is-size-5 has-text-weight-bold">Architecture</h3>
        <p class="is-size-5 mt-2">We help you select components and define the system architecture.</p>
      </div>
      <div class="column has-text-centered">
        <p class="is-size-2 has-text-weight-bold mb-2">3</p>
        <h3 class="is-size-5 has-text-weight-bold">Design & Prototype</h3>
        <p class="is-size-5 mt-2">PCB, enclosure, firmware customization — we build and validate together.</p>
      </div>
      <div class="column has-text-centered">
        <p class="is-size-2 has-text-weight-bold mb-2">4</p>
        <h3 class="is-size-5 has-text-weight-bold">Production</h3>
        <p class="is-size-5 mt-2">DFM-optimized designs and test procedures for manufacturing.</p>
      </div>
    </div>
  </div>
</section>

<!-- ── 09 Why custom over a module ── -->

<section class="section" style="background-color: #f9f9f9;">
  <div class="container">
    <p class="is-size-7 has-text-grey has-text-weight-bold mb-2">/ 09</p>
    <h2 class="is-size-3 mb-6">Why custom over a module?</h2>
    <div class="columns">
      <div class="column">
        <h3 class="is-size-5 has-text-weight-bold">Lower BOM cost at scale</h3>
        <p class="is-size-5 mt-2">No module markup, optimized component selection for your volume.</p>
      </div>
      <div class="column">
        <h3 class="is-size-5 has-text-weight-bold">Smaller form factor</h3>
        <p class="is-size-5 mt-2">Place components exactly where you need them — no module constraints.</p>
      </div>
    </div>
    <div class="columns mt-2">
      <div class="column">
        <h3 class="is-size-5 has-text-weight-bold">Custom I/O</h3>
        <p class="is-size-5 mt-2">Choose your own connectors, jack types, channel count, and codec.</p>
      </div>
      <div class="column">
        <h3 class="is-size-5 has-text-weight-bold">Your brand</h3>
        <p class="is-size-5 mt-2">No visible third-party modules. Full ownership of your supply chain and product identity.</p>
      </div>
    </div>
  </div>
</section>

<!-- ── CTA ── -->

<section class="section is-medium" style="background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/img/blog/dada-tbd-16x9.jpg') center center; background-size: cover;">
  <div class="container has-text-centered">
    <h2 class="is-size-3" style="color: white !important;">Let's build something</h2>
    <p class="is-size-5 has-text-white mt-4" style="max-width: 600px; margin: 0 auto;">Whether you're prototyping with the tbd-core or planning a full custom integration — we work with teams at any stage, from napkin sketches to production-ready designs.</p>
    <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem; flex-wrap: wrap;">
      <a href="/contact/" class="explore-link is-light is-large is-reversed">Get in touch</a>
      <a href="/products/tbd-16/" class="explore-link is-blue is-large">See the tbd-16</a>
    </div>
  </div>
</section>
