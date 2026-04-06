---
title: tbd-16 apps
subtitle: Software that runs on the tbd-16
layout: product-with-nav
hide_hero: true
full_width_content: true
show_sidebar: false
published: false
permalink: /products/tbd-16/apps/
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
  url: /shop/tbd-16/
---

<!-- ── Hero ── -->

<section class="section">
  <div class="container">
    <div class="columns is-vcentered">
      <div class="column is-7">
        <h1 class="title is-1 mb-2">Apps</h1>
        <p class="is-size-4" style="line-height: 1.6;">The tbd-16 runs swappable apps from the SD card. Pick one at boot, switch anytime. The platform is open — anyone can build and share new apps.</p>
      </div>
    </div>
  </div>
</section>

<!-- ── Groovebox ── -->

<section class="section" style="background: #f5f5f5;">
  <div class="container">
    <div class="columns is-vcentered">
      <div class="column is-6">
        <span class="tag is-dark mb-3" style="border-radius: 0; font-family: inherit; letter-spacing: 0.02em;">Default app</span>
        <h2 class="title is-2 mb-3">Groovebox</h2>
        <p class="is-size-5" style="line-height: 1.7;">16-track drum machine and groovebox. The tbd-16 ships with this app loaded — plug in power and start making beats immediately.</p>
        <p class="is-size-5 mt-4" style="line-height: 1.7;">Each track triggers a DSP voice on the ESP32-P4: analog and digital drum synthesis (bass drum, snare, hi-hat, rimshot, clap), plus four rompler channels for sample playback with slicing, looping, pitch control, and bit crushing.</p>
        <p class="has-text-grey mt-3">By Per-Olov Jernberg (<a href="https://possan.codes/" target="_blank">possan.codes</a>)</p>
      </div>
      <div class="column is-5 is-offset-1">
        <img src="/img/products/dadamachines-tbd-16_mockup_002.jpg" alt="tbd-16 groovebox" style="width: 100%;" />
      </div>
    </div>
  </div>
</section>

<!-- ── Groovebox features ── -->

<section class="section">
  <div class="container">
    <h3 class="title is-3 mb-5">Sequencer</h3>
    <div class="columns is-multiline">
      <div class="column is-4">
        <h4 class="title is-5">Three pattern modes</h4>
        <p class="is-size-5" style="line-height: 1.6;"><strong>Step sequencer</strong> — classic 64-step grid with per-step parameter locks. <strong>Euclidean</strong> — algorithmic rhythm generation with configurable pulses, steps, offset, and loop length. <strong>Arpeggiator</strong> — up, down, up-down, and random modes with up to 32 held notes.</p>
      </div>
      <div class="column is-4">
        <h4 class="title is-5">Per-step control</h4>
        <p class="is-size-5" style="line-height: 1.6;">Every step carries note, velocity, probability, micro-timing delay, gate time, and retrigger count. Lock up to 24 audio parameters and 8 mixer parameters per step — Elektron-style parameter locks on every voice.</p>
      </div>
      <div class="column is-4">
        <h4 class="title is-5">Automation</h4>
        <p class="is-size-5" style="line-height: 1.6;">Per-parameter random or LFO modulation with configurable speed, amount, offset, and reset interval. Modulation can reset on pattern start, on each trigger, on play, or run free.</p>
      </div>
    </div>

    <div class="columns is-multiline mt-4">
      <div class="column is-4">
        <h4 class="title is-5">Song mode</h4>
        <p class="is-size-5" style="line-height: 1.6;">6 patterns per track with a 32-slot pattern chain for full song arrangements. 4 track groups with group-level mute, volume, pan, and FX send controls.</p>
      </div>
      <div class="column is-4">
        <h4 class="title is-5">MIDI & sync</h4>
        <p class="is-size-5" style="line-height: 1.6;">USB MIDI device and host (connect a BeatStep, Launchpad, or any USB controller), dual TRS MIDI in/out, Ableton Link over WiFi. Internal clock at 96 PPQN with shuffle/swing.</p>
      </div>
      <div class="column is-4">
        <h4 class="title is-5">Mixer & effects</h4>
        <p class="is-size-5" style="line-height: 1.6;">Per-track level, pan, FX sends, and filter. Master bus compressor with threshold, ratio, attack, release, sidechain filtering, and wet/dry mix. 4-voice polyphony per track.</p>
      </div>
    </div>
  </div>
</section>

<!-- ── MegaCommand Live ── -->

<section class="section" style="background: #f5f5f5;">
  <div class="container">
    <div class="columns is-vcentered">
      <div class="column is-7">
        <h2 class="title is-2 mb-3">MegaCommand Live</h2>
        <p class="is-size-5" style="line-height: 1.7;">A high-performance MIDI sequencer for controlling external hardware — Elektron MachineDrum, Monomachine, Analog Four, or any MIDI gear. Song mode, real-time transpose, mute groups, parameter locks, and Ableton Link sync.</p>
        <p class="is-size-5 mt-4" style="line-height: 1.7;">Originally built for the MegaCommand MIDI Controller, ported to the tbd-16's RP2350. The ESP32-P4 provides WiFi and Ableton Link — all sequencer logic runs on the RP2350 with full hardware control via the 30 buttons, 4 encoders, and OLED display.</p>
        <p class="has-text-grey mt-3">By Justin Mammarella</p>
      </div>
    </div>
  </div>
</section>

<!-- ── Multi Effect / Synth ── -->

<section class="section">
  <div class="container">
    <div class="columns is-vcentered">
      <div class="column is-7">
        <h2 class="title is-2 mb-3">Multi Effect / Synth</h2>
        <p class="is-size-5" style="line-height: 1.7;">Browse and load any two of the 50+ DSP plugins simultaneously. Run a synth and an effect, two synths, or a dual effects chain — all controlled from the hardware UI with preset save/recall. MIDI CC mapping for every parameter, Ableton Link for tempo sync.</p>
        <p class="is-size-5 mt-4" style="line-height: 1.7;">Use it as a desktop synth, a guitar effects processor, a drone machine, or a sound design tool. Two independent plugin slots with mono or stereo routing per slot.</p>
      </div>
    </div>
  </div>
</section>

<!-- ── DOOM ── -->

<section class="section" style="background: #111; color: #fff;">
  <div class="container">
    <div class="columns is-vcentered">
      <div class="column is-7">
        <h2 class="title is-2 mb-3" style="color: #fff !important;">DOOM</h2>
        <p class="is-size-5" style="line-height: 1.7; color: #ccc;">Yes, it runs DOOM. Full Doom 1 shareware on the RP2350 with 15 selectable dithering algorithms (Atkinson, Floyd-Steinberg, Blue Noise, Bayer, and more) rendering to the 128×64 OLED at 60 fps.</p>
        <p class="is-size-5 mt-4" style="line-height: 1.7; color: #ccc;">OPL music and sound effects mixed at 49716 Hz, resampled by the ESP32-P4 codec. WAD loaded from SD card into 8 MB PSRAM in about two seconds. All 30 buttons mapped to movement, fire, strafe, weapon switching, and automap.</p>
        <p class="mt-3" style="color: #888;">Based on <a href="https://github.com/kilograham/rp2040-doom" target="_blank" style="color: #aaa;">rp2040-doom</a> by Graham Sanderson · GPL v2</p>
      </div>
    </div>
  </div>
</section>

<!-- ── Utilities ── -->

<section class="section">
  <div class="container">
    <h2 class="title is-2 mb-5">Utilities</h2>
    <div class="columns is-multiline">
      <div class="column is-6">
        <h4 class="title is-5">USB Mass Storage</h4>
        <p class="is-size-5" style="line-height: 1.6;">Exposes the SD card as a USB drive. Copy apps, backup presets, update the bootloader — no card removal required.</p>
      </div>
      <div class="column is-6">
        <h4 class="title is-5">Debug Probe</h4>
        <p class="is-size-5" style="line-height: 1.6;">Turns the RP2350 into a CMSIS-DAP debug adapter for flashing and debugging the STM32 UI controller board.</p>
      </div>
    </div>
  </div>
</section>

<!-- ── Coming soon ── -->

<section class="section" style="background: #f5f5f5;">
  <div class="container">
    <h2 class="title is-2 mb-3">More apps coming</h2>
    <p class="is-size-5" style="line-height: 1.7;">The tbd-16 is an open platform. Apps are .uf2 files on the SD card, selectable from a boot menu. The DSP engine, firmware, and plugin system are GPL 3.0 — build your own app, fork an existing one, or share it with the community.</p>
    <p class="is-size-5 mt-4" style="line-height: 1.7;"><strong>Planned:</strong> MIDI Controller + USB Audio Interface — turns the tbd-16 into a 30-button, 4-encoder MIDI controller with stereo USB audio in/out over a single USB-C cable. Class-compliant, no drivers needed on macOS/iOS.</p>
    <a href="/shop/tbd-16/" class="explore-link is-blue is-large mt-5">Reserve now</a>
  </div>
</section>
