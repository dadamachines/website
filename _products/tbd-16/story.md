---
title: The story behind tbd-16
subtitle: How a small team built an open instrument
layout: product-with-nav
hide_hero: true
full_width_content: true
show_sidebar: false
published: false
permalink: /products/tbd-16/story/
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
        <h1 class="title is-1 mb-2">The story behind tbd-16</h1>
        <p class="is-size-4" style="line-height: 1.6;">Five people. Two years. One idea: an open instrument that musicians could truly make their own.</p>
      </div>
    </div>
  </div>
</section>

<!-- ── The origin ── -->

<section class="section">
  <div class="container">
    <div class="columns">
      <div class="column is-8">
        <p class="is-size-7 has-text-grey has-text-weight-bold mb-2">/ 01</p>
        <h2 class="is-size-3">Where it started</h2>
        <p class="is-size-5 mt-4">The tbd-16 grew out of <a href="https://github.com/ctag-fh-kiel/ctag-tbd" target="_blank" rel="noopener">CTAG TBD</a> — an open-source audio DSP engine created by Robert Manzke at the Kiel University of Applied Sciences. CTAG TBD started as a Eurorack module: a powerful, flexible platform for audio DSP with 50+ plugins, but one that required a modular synth setup to use.</p>
        <p class="is-size-5 mt-4">Johannes Lohbihler at <a href="/about/">dadamachines</a> saw something bigger: a standalone instrument that could bring this open DSP engine to musicians who don't own a Eurorack case. No rack, no computer, no setup — just plug in power and play. The two started collaborating in 2024, and the tbd-16 took shape.</p>
        <p class="is-size-5 mt-4">In late 2025, the project received support from the <a href="https://nlnet.nl/project/TBD-DSP-Toolkit/" target="_blank" rel="noopener">NLnet NGI0 Commons Fund</a>, backed by the European Commission's Next Generation Internet programme. The funding helped bring in dedicated UX design and documentation work — making the platform more accessible for musicians, students, and developers.</p>
      </div>
    </div>
  </div>
</section>

<!-- ── The idea ── -->

<section class="section is-medium has-background-dark has-text-centered">
  <div class="container">
    <h2 class="is-size-4 is-size-5-mobile" style="color: white !important; line-height: 1.7;">Most electronic instruments are closed boxes. You get the sounds the manufacturer chose, and that's it.<br>We wanted to build something different — an instrument where the engine, the firmware, and every plugin are yours to study, modify, and share.</h2>
  </div>
</section>

<!-- ── The team ── -->

<section class="section">
  <div class="container">
    <p class="is-size-7 has-text-grey has-text-weight-bold mb-2">/ 02</p>
    <h2 class="is-size-3 mb-6">The team</h2>

    <!-- Robert Manzke -->
    <div class="columns mt-5">
      <div class="column is-8">
        <h3 class="is-size-4 has-text-weight-bold">Robert Manzke</h3>
        <p class="is-size-6 has-text-grey mb-3">DSP Engine & Plugin Architecture</p>
        <p class="is-size-5">Robert created <a href="https://github.com/ctag-fh-kiel/ctag-tbd" target="_blank" rel="noopener">CTAG TBD</a> at the Kiel University of Applied Sciences — the open-source audio DSP engine at the heart of every TBD device. He designed the plugin architecture, wrote many of the 50+ synthesizers and effects, and continuously develops the ESP32-P4 audio pipeline. His work on the platform goes back years before the tbd-16 existed, and every sound the instrument makes runs through code he wrote or shaped.</p>
      </div>
    </div>

    <hr style="border-top: 1px solid #eee; margin: 2rem 0;">

    <!-- Johannes Lohbihler -->
    <div class="columns">
      <div class="column is-8">
        <h3 class="is-size-4 has-text-weight-bold">Johannes Lohbihler</h3>
        <p class="is-size-6 has-text-grey mb-3">Hardware Design, Product & UX — <a href="/about/">dadamachines</a></p>
        <p class="is-size-5">Johannes founded <a href="/about/">dadamachines</a> — a studio for multisensory experiences and open-source music technology in Berlin. Seventh generation carpenter from Bavaria, raised in the Weilheim music scene alongside Lali Puna and The Notwist. DJ turned creator, bridging analog craft and electronic music.</p>
        <p class="is-size-5 mt-4">For the tbd-16, Johannes designed the hardware, the product concept, and co-designed the UX with Benjamin Weiss. He brought together the team and shaped the vision of a standalone instrument that works for musicians first — from the 30-button layout and the OLED interface to the industrial design of the case. He also runs the web UI development, documentation, and the web flasher for firmware updates.</p>
      </div>
    </div>

    <hr style="border-top: 1px solid #eee; margin: 2rem 0;">

    <!-- Per-Olov Jernberg -->
    <div class="columns">
      <div class="column is-8">
        <h3 class="is-size-4 has-text-weight-bold">Per-Olov Jernberg (Possan)</h3>
        <p class="is-size-6 has-text-grey mb-3">Firmware & Groovebox App — <a href="https://possan.codes/" target="_blank" rel="noopener">possan.codes</a></p>
        <p class="is-size-5">Per built the main firmware that ships with every tbd-16 — the Groovebox app that runs on the RP2350B front-end processor. From the 16-track sequencer and pattern system to the MIDI routing, button handling, LED feedback, and OLED display — Per wrote the code that makes the tbd-16 feel like an instrument, not a dev board.</p>
        <p class="is-size-5 mt-4">His firmware bridges the gap between the hardware UI and Robert's DSP engine, communicating via SPI to send control data to the ESP32-P4 and receive status and Ableton Link data back. The result is a tight, responsive instrument that feels immediate under your fingers.</p>
      </div>
    </div>

    <hr style="border-top: 1px solid #eee; margin: 2rem 0;">

    <!-- Benjamin Weiss -->
    <div class="columns">
      <div class="column is-8">
        <h3 class="is-size-4 has-text-weight-bold">Benjamin Weiss</h3>
        <p class="is-size-6 has-text-grey mb-3">UX Design — <a href="https://instrument-design.com/" target="_blank" rel="noopener">Musical Instrument Design</a></p>
        <p class="is-size-5">Benjamin is a music technologist, product designer, and musician with 30 years of experience in electronic music. He previously worked as a hardware and software UX designer at Native Instruments and Ableton — two of the most influential companies in music technology.</p>
        <p class="is-size-5 mt-4">For the tbd-16, Benjamin co-designed the UX with Johannes — from the web interface and plugin interaction patterns to the UX guidelines that help developers build playable, musician-centered DSP modules. His work is partly supported by <a href="https://nlnet.nl/project/TBD-DSP-Toolkit/" target="_blank" rel="noopener">NLnet</a>. He brings the perspective of someone who has reviewed and designed countless instruments, and who performs and creates music regularly.</p>
      </div>
    </div>

    <hr style="border-top: 1px solid #eee; margin: 2rem 0;">

    <!-- Servando Barreiro -->
    <div class="columns">
      <div class="column is-8">
        <h3 class="is-size-4 has-text-weight-bold">Servando Barreiro</h3>
        <p class="is-size-6 has-text-grey mb-3">Creative Technology & Sound — <a href="http://servando.teks.no/" target="_blank" rel="noopener">servando.teks.no</a></p>
        <p class="is-size-5">Servando is a sound artist and creative technologist based in Norway. He and Johannes go way back — they collaborated on the <a href="/projects/rbma-20/">RBMA-20</a>, the world's largest sequencer, a 10-meter, 427-knob instrument built for Red Bull Music Academy. Servando wrote the custom sequencer patch for that project and has been a creative collaborator on dadamachines projects ever since.</p>
        <p class="is-size-5 mt-4">For the tbd-16, Servando contributes to creative technology development and sound design, bringing his experience building large-scale interactive sound installations to the design of a compact desktop instrument.</p>
      </div>
    </div>
  </div>
</section>

<!-- ── Talking to musicians ── -->

<section class="section" style="background-color: #f9f9f9;">
  <div class="container">
    <p class="is-size-7 has-text-grey has-text-weight-bold mb-2">/ 03</p>
    <h2 class="is-size-3">Talking to musicians who play live for a living</h2>
    <div class="columns mt-4">
      <div class="column is-8">
        <p class="is-size-5">Before finalizing the tbd-16 design, Benjamin and Johannes sat down with seven electronic musicians — artists who perform live on stage regularly and depend on their gear working reliably. The interviews explored what they need from an instrument, what's missing from their current setup, and what they would build if they could.</p>
        <p class="is-size-5 mt-4">The conversations covered live setups, sequencing workflows, interface preferences, form factor requirements, and concrete feedback on TBD prototypes. The musicians ranged from pioneering dub techno producers to modular synthesis specialists, touring techno artists, and the co-founder of Ableton.</p>
      </div>
    </div>

    <!-- Quotes grid -->
    <div class="columns mt-5">
      <div class="column">
        <p class="is-size-5" style="border-left: 3px solid #111; padding-left: 1.25rem;">"The lack of good internal sequencers is the biggest problem. I want integrated sequencers — not having to bring a laptop."</p>
        <p class="is-size-6 has-text-grey mt-2"><strong>Dasha Rush</strong></p>
        <p class="is-size-7 has-text-grey">Berlin-based electronic musician & interdisciplinary artist</p>
      </div>
      <div class="column">
        <p class="is-size-5" style="border-left: 3px solid #111; padding-left: 1.25rem;">"I prefer red LEDs over displays with 20 lines of small text. I need abstract clarity — not complexity I can't read on stage."</p>
        <p class="is-size-6 has-text-grey mt-2"><strong>Robert Henke</strong></p>
        <p class="is-size-7 has-text-grey">Co-founder of Ableton, Monolake</p>
      </div>
    </div>
    <div class="columns mt-4">
      <div class="column">
        <p class="is-size-5" style="border-left: 3px solid #111; padding-left: 1.25rem;">"Reliability is everything. When my MPC jumps patterns on stage — that's a disaster. I need something I can trust."</p>
        <p class="is-size-6 has-text-grey mt-2"><strong>Jammin Unit</strong> (Cem Oral)</p>
        <p class="is-size-7 has-text-grey">Dub techno pioneer, Sonic Groove / Raster Noton</p>
      </div>
      <div class="column">
        <p class="is-size-5" style="border-left: 3px solid #111; padding-left: 1.25rem;">"I want simplicity without feature overload. Flat hierarchies, quick parameter access, and visual feedback."</p>
        <p class="is-size-6 has-text-grey mt-2"><strong>Daria Goremykina</strong></p>
        <p class="is-size-7 has-text-grey">Pianist & electronic musician, UdK Berlin</p>
      </div>
    </div>
    <div class="columns mt-4">
      <div class="column">
        <p class="is-size-5" style="border-left: 3px solid #111; padding-left: 1.25rem;">"It must fit in a single carry-on case. Small footprint is essential — and the knobs need real resistance."</p>
        <p class="is-size-6 has-text-grey mt-2"><strong>JakoJako</strong></p>
        <p class="is-size-7 has-text-grey">Ambient & techno live performer</p>
      </div>
      <div class="column">
        <p class="is-size-5" style="border-left: 3px solid #111; padding-left: 1.25rem;">"No pre-programmed sequences — I create everything live on-the-fly. I need hands-on sequencers, visual feedback, and compact form factor."</p>
        <p class="is-size-6 has-text-grey mt-2"><strong>Jessica Kert</strong></p>
        <p class="is-size-7 has-text-grey">Modular synthesis specialist, SchneidersLaden Berlin</p>
      </div>
    </div>
    <div class="columns mt-4">
      <div class="column is-6">
        <p class="is-size-5" style="border-left: 3px solid #111; padding-left: 1.25rem;">"I want an app-based interface for deep editing, USB-C power, and templates I can set up before the show."</p>
        <p class="is-size-6 has-text-grey mt-2"><strong>Bill Youngman</strong></p>
        <p class="is-size-7 has-text-grey">Electronic musician & producer (Headless Horseman), Berlin</p>
      </div>
    </div>

    <h3 class="is-size-4 has-text-weight-bold mt-6">What we learned</h3>
    <div class="columns mt-4">
      <div class="column">
        <p class="is-size-5"><strong>USB-C power, no wall warts.</strong> Multiple artists specifically asked for USB-C — they want to run from power banks on airplanes and backstage.</p>
      </div>
      <div class="column">
        <p class="is-size-5"><strong>Flat hierarchies, no deep menus.</strong> Every artist wanted direct parameter access. On a dark stage, you can't dig through submenus.</p>
      </div>
    </div>
    <div class="columns mt-2">
      <div class="column">
        <p class="is-size-5"><strong>Compact and travel-ready.</strong> It must fit in a carry-on case. Several artists travel internationally and need small footprint gear they can trust.</p>
      </div>
      <div class="column">
        <p class="is-size-5"><strong>Built-in sequencing.</strong> The biggest gap in current hardware: no good built-in sequencers. Artists shouldn't need a laptop to sequence.</p>
      </div>
    </div>
    <div class="columns mt-2">
      <div class="column">
        <p class="is-size-5"><strong>Visual feedback that works on stage.</strong> LEDs over screens, color-coded states, clear indication of what's active — not 20 lines of text on an LCD.</p>
      </div>
      <div class="column">
        <p class="is-size-5"><strong>Reliability above all.</strong> When you're on stage, the instrument must not crash, skip, or freeze. Every feature trades off against rock-solid stability.</p>
      </div>
    </div>

    <p class="is-size-6 has-text-grey mt-5">Interviews conducted by <a href="https://instrument-design.com/" target="_blank" rel="noopener">Benjamin Weiss</a> and <a href="/about/">Johannes Lohbihler</a>, supported by <a href="https://nlnet.nl/project/TBD-DSP-Toolkit/" target="_blank" rel="noopener">NLnet NGI0 Commons Fund</a>.</p>
  </div>
</section>

<!-- ── How it came together ── -->

<section class="section">
  <div class="container">
    <p class="is-size-7 has-text-grey has-text-weight-bold mb-2">/ 04</p>
    <h2 class="is-size-3">How it came together</h2>
    <div class="columns mt-5">
      <div class="column is-6">
        <h3 class="is-size-5 has-text-weight-bold">Three processors, one platform</h3>
        <p class="is-size-5 mt-2">The tbd-16 runs an ESP32-P4 for audio DSP, an RP2350B for the hardware UI and MIDI, and an ESP32-C6 for WiFi and Ableton Link. Each layer is independently programmable — Robert works on the P4 audio engine, Per builds the RP2350 firmware, and they communicate via SPI. This separation lets each developer iterate on their layer without breaking the others.</p>
      </div>
      <div class="column is-6">
        <h3 class="is-size-5 has-text-weight-bold">Musician-first design</h3>
        <p class="is-size-5 mt-2">Benjamin and Johannes shaped the UX so that the tbd-16 works as a musical instrument, not a development board. 30 buttons, 4 endless pots, an OLED display — all designed so you can perform without a screen. The web interface handles deeper editing over WiFi, but the instrument itself is self-contained.</p>
      </div>
    </div>
    <div class="columns mt-4">
      <div class="column is-6">
        <h3 class="is-size-5 has-text-weight-bold">Open by design</h3>
        <p class="is-size-5 mt-2">Everything is open source — the DSP engine (GPL 3.0), the web UI and tools (LGPL 3.0), and the hardware designs in KiCad. The team believes that musicians and developers should be able to study, modify, and share the instruments they use. The NLnet funding reinforced this commitment with dedicated resources for documentation and developer UX.</p>
      </div>
      <div class="column is-6">
        <h3 class="is-size-5 has-text-weight-bold">Roots in real projects</h3>
        <p class="is-size-5 mt-2">The team's history stretches back through years of real-world projects — from the <a href="/projects/rbma-20/">RBMA-20 sequencer</a> and <a href="/products/automat-toolkit/">automat toolkit</a> to installations for Audi, Goethe Institut, and Sónar Festival. The tbd-16 distills that experience into a portable, affordable, open instrument.</p>
      </div>
    </div>
  </div>
</section>

<!-- ── Supported by ── -->

<section class="section" style="background-color: #f9f9f9;">
  <div class="container">
    <p class="is-size-7 has-text-grey has-text-weight-bold mb-2">/ 05</p>
    <h2 class="is-size-3">Supported by</h2>
    <div class="columns mt-4 is-vcentered">
      <div class="column is-narrow has-text-centered">
        <img src="https://nlnet.nl/logo/banner.svg" alt="NLnet logo" style="width: 148px; height: auto;">
      </div>
      <div class="column is-narrow has-text-centered">
        <img src="https://nlnet.nl/image/logos/NGI0Core_tag.svg" alt="NGI0 Commons Fund logo" style="width: 148px; height: auto;">
      </div>
    </div>
    <p class="is-size-5 mt-4" style="max-width: 700px;">This project was funded through the NGI0 Commons Fund, a fund established by <a href="https://nlnet.nl/" target="_blank" rel="noopener">NLnet</a> with financial support from the European Commission's Next Generation Internet programme, under the aegis of DG Communications Networks, Content and Technology under grant agreement No 101135429. Additional funding is made available by the Swiss State Secretariat for Education, Research and Innovation (SERI).</p>
  </div>
</section>

<!-- ── CTA ── -->

<section class="section is-medium" style="background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/img/products/dadamachines-tbd-16_mockup_002.jpg') center center; background-size: cover;">
  <div class="container has-text-centered">
    <h2 class="is-size-3" style="color: white !important;">Get the tbd-16</h2>
    <p class="is-size-5 has-text-white mt-3">Pre-order now or explore the full specs.</p>
    <div class="mt-5">
      <a href="/products/tbd-16/" class="explore-link is-light is-large is-reversed">tbd-16 overview</a>
      <a href="https://github.com/ctag-fh-kiel/ctag-tbd" target="_blank" rel="noopener" class="explore-link is-light is-large ml-4">GitHub</a>
    </div>
  </div>
</section>
