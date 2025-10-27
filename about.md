---
title: About
subtitle: Learn more about dadamachines.
layout: page
hide_hero: true
callouts: 
show_sidebar: false
---

<!-- Hero Image -->
<div class="fluid-aspect_16x9">
  <span>
    <img src="../img/about.jpg" alt="dadamachines studio">
  </span>
</div>

<!-- About -->
<div class="columns mt-4 dada-a">
    <div class="column is-8">
        <h1 class="title is-2">About</h1>
        <p class="about-text"><strong>dadamachines</strong> is led by <a href="https://lohbihler.com" target="_blank">Johannes Elias Lohbihler</a>, a creative technologist living and working in berlin. seventh generation carpenter from bavaria, raised in the weilheim music scene alongside portmanteau, lali puna, and the notwist. dj turned creator, bridging analog craft and electronic music.</p>
        <p class="about-text">he founded dadamachines – a studio for multisensory experiences & open-source music technology. supported by a network of collaborators and friends who create experimental sound tools for the real life, opening new possibilities for artists and musicians.</p>
    </div>
    <div class="column is-4">
      <div class="image-cropper mx-auto profile-image-container">
        <img src="../img/johannes-elias-lohbihler-profileimage.jpg" alt="tollesbild" class="profile-image-inner">
      </div>
    </div>
</div>

<!-- Selected Projects -->
{% assign projects = site.projects | sort: 'order' %}
<div class="dada-a projects mt-6">
    <h2 class="is-size-2 pt-6">Selected projects</h2>
    <ul class="list-reset mt-0">
{% for project in projects %}
        <li><a class="is-size-3-desktop" href="{{ project.url }}">{{ project.title }}</a></li>
{% endfor %}
    </ul>
</div>

<!-- Selected exhibitions, talks and workshops -->
<div class="dada-a exhibitions mt-6">
  <h2 class="is-size-2 pt-6">Selected exhibitions, talks and workshops</h2>
  <ul class="list-reset mt-0">
    <li><a class="is-size-3-desktop" href="https://www.cca.edu/" target="_blank">CCA - California College of the Arts, San Francisco 2019</a></li>
    <li><a class="is-size-3-desktop" href="#">Thoughtworks Berlin (dadamachines & playtronica)</a></li>
    <li><a class="is-size-3-desktop" href="#" target="_blank">Synthposium Festival, Yerevan 2019</a></li>
    <li><a class="is-size-3-desktop" href="#">Lenovo IFA, Berlin 2019</a></li>
    <li><a class="is-size-3-desktop" href="https://superbooth.com/" target="_blank">superbooth, Berlin 2017-2019</a></li>
    <li><a class="is-size-3-desktop" href="https://www.native-instruments.com/" target="_blank">Music meets Tech @ Native Instruments, Berlin 2019</a></li>
    <li><a class="is-size-3-desktop" href="https://factoryberlin.com/event/the-creative-code-re-imagine-collaboration-launch/" target="_blank">THE CREATIVE CODE @ Factory Berlin x Sónar+D, Berlin 2019</a></li>
    <li><a class="is-size-3-desktop" href="https://musictechfest.net/zkm/" target="_blank">MTF Labs @ ZKM, Karlsruhe 2018</a></li>
    <li><a class="is-size-3-desktop" href="https://mostwantedmusic2018.sched.com/event/Hl4h/music-entrepreneurs-how-to-empower-artists-creators-to-do-things-their-own-way" target="_blank" title="Music Entrepreneurs - How to Empower Artists & Creators to do Things Their Own Way">MOST WANTED: MUSIC 2018, Berlin 2018</a></li>
    <li><a class="is-size-3-desktop" href="https://www.instagram.com/synthposium/" target="_blank">Synthposium Festival, Moscow 2018</a></li>
    <li><a class="is-size-3-desktop" href="https://www.sae.edu/deu/de/node/2595" target="_blank">MASTERCLASS: SAE INSTITUTE & KICKSTARTER, Berlin 2018</a></li>
    <li><a class="is-size-3-desktop" href="https://sonarhongkong.com/en/2018/artists/automat-marketlab-sonar-d" target="_blank">Sónar Festival – MarketLab @ Sónar+D, Hong Kong 2018</a></li>
    <li><a class="is-size-3-desktop" href="http://www.szhkbiennale.org.cn/En/" target="_blank">Bi-City Biennale of Urbanism\Architecture, Shenzhen 2017</a></li>
    <li><a class="is-size-3-desktop" href="http://www.lange-nacht-der-museen.de/de/" target="_blank">Lange nach der Museen, Berlin 2017</a></li>
    <li><a class="is-size-3-desktop" href="https://sonarplusd.com/en/programs/barcelona-2017/areas/marketlab/dadamachines-automat-toolkit" target="_blank">Sónar Festival – MarketLab @ Sónar+D, Barcelona 2017</a></li>
    <li><a class="is-size-3-desktop" href="http://www.selbstgebautemusik.de/" target="_blank">Festival für selbstgebaute Musik, Berlin 2017</a></li>
    <li><a class="is-size-3-desktop" href="https://www.kh-berlin.de/" target="_blank">Sprechenüber @ KHB Weissensee, Berlin 2017</a></li>
    <li><a class="is-size-3-desktop" href="http://b10live.cn/tmrfest2017" target="_blank">Tomorrow Festival, Shenzhen 2017</a></li>
    <li><a class="is-size-3-desktop" href="https://www.goethe.de/" target="_blank">Goethe Institute China, Beijing 2017</a></li>
    <li><a class="is-size-3-desktop" href="https://hackoustic.org/showcase-dada-machines-12th-april/" target="_blank">Hackoustic Showcase, London 2017 </a></li>
    <li><a class="is-size-3-desktop" href="https://www.youtube.com/watch?v=CWBZg7RUF7A" target="_blank">Creative Mornings, Berlin 2016</a></li>
    <li><a class="is-size-3-desktop" href="https://make-munich.de/" target="_blank">MAKE Munich, Munich 2016</a></li>
    <li><a class="is-size-3-desktop" href="https://maker-faire.de/berlin/" target="_blank">Maker Faire, Berlin 2015 & 2016</a></li>
    <li><a class="is-size-3-desktop" href="https://www.kikk.be/2015/dada-machines.htm?lng=en" target="_blank">Kikk Festival, Namur 2015</a></li>
    <li><a class="is-size-3-desktop" href="https://musictechfest.net/project/johannes-lohbihler-dadamachines-toolkit/" target="_blank">Music Tech Fest, Ljubljana 2015</a></li>
    <li><a class="is-size-3-desktop" href="https://kh-berlin.de/uploads/tx_khberlin/flyer-seeingashearing-final-220415.pdf" target="_blank">seeing as hearing @ Hochschule für Musik Hanns Eisler, Berlin 2015</a></li>
    <li><a class="is-size-3-desktop" href="http://musichackspace.org/events/dada-machines-at-the-music-hackspace/" target="_blank">Music Hackspace, London 2015</a></li>
  </ul>
</div>

<!-- Selected Publications -->
<div class="dada-a publicactions mt-6">
  <h2 class="is-size-2 pt-6">Selected publications</h2>
  <ul class="list-reset mt-0">
    <li><a class="is-size-3-desktop" href="https://www.factmag.com/2017/03/29/dadamachines-automat-toolkit-kickstarter/" target="_blank">FACT Magazine</a></li>
    <li><a class="is-size-3-desktop" href="https://www.theverge.com/circuitbreaker/2017/3/30/15120290/midi-controlled-drum-beaters-dadamachines" target="_blank">THE VERGE</a></li>
    <li><a class="is-size-3-desktop" href="https://ask.audio/articles/review-dadamachines-automat-robotic-music-machines-toolkit" target="_blank">ASK AUDIO</a></li>
    <li><a class="is-size-3-desktop" href="https://cdm.link/2017/03/dadamachines-is-an-open-toolkit-for-making-robotic-musical-instruments/ " target="_blank">Create Digital Music</a></li>
    <li><a class="is-size-3-desktop" href="https://www.deutschlandfunkkultur.de/erfindungen-dada-orchester-fuers-wohnzimmer.2156.de.html?dram:article_id=384031" target="_blank">Deutschlandfunk Kultur</a></li>
    <li><a class="is-size-3-desktop" href="https://www.vice.com/de/article/3dme7y/dadamachines-bringt-neue-sounds-und-kreativitat-in-deine-tracks  " target="_blank">VICE</a></li>
    <li><a class="is-size-3-desktop" href="https://www.heise.de/newsticker/meldung/Dadamachines-Kickstarter-Projekt-fuer-Musik-Roboter-gestartet-3665780.html  " target="_blank">heise.de</a></li>
    <li><a class="is-size-3-desktop" href="https://www.creativeapplications.net/news/dadamachines-by-johannes-lohbihler-on-kickstarter/ " target="_blank">CREATIVE APPLICATIONS NETWORK</a></li>
  </ul>
</div>

