<template>
  <section class="hero" id="home">
    <div class="container">
      <div class="hero-inner">
        <div class="hero-copy">
          <span class="badge reveal" data-delay="1"><i class="fa-solid fa-bolt"></i> Industrial-Grade Performance</span>
          <h1 class="reveal" data-delay="2">Massive Coverage.<br><span class="accent">Ultra-Low Noise.</span><br>Energy Efficient.</h1>
          <p class="lead reveal" data-delay="3">AXTELL industrial fans deliver powerful airflow across the largest facilities — built rugged, engineered quiet, and designed to cut your energy bill.</p>
          <div class="hero-actions reveal" data-delay="4">
            <a href="#products" class="btn btn--primary">View Products <i class="fa-solid fa-arrow-right"></i></a>
            <a href="#contact" class="btn btn--ghost">Contact Us</a>
          </div>
          <div class="hero-stats reveal" data-delay="4">
            <div class="stat"><div class="num">24FT</div><div class="label">Max Diameter</div></div>
            <div class="stat"><div class="num">1.5kW</div><div class="label">Max Power</div></div>
            <div class="stat"><div class="num">2,500m²</div><div class="label">Coverage</div></div>
            <div class="stat"><div class="num">40dB</div><div class="label">Min Noise</div></div>
          </div>
        </div>
        <div class="fan-stage reveal" data-delay="2">
          <div class="fan-glow" aria-hidden="true"></div>
          <div class="fan" aria-hidden="true">
            <div class="fan-ring"></div>
            <div class="fan-blades"><div class="blade"></div><div class="blade"></div><div class="blade"></div><div class="blade"></div><div class="blade"></div></div>
            <div class="fan-hub"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="scroll-cue" aria-hidden="true"><div class="mouse"></div><span>Scroll</span></div>
  </section>
</template>

<script setup>
import useReveal from '../../composables/useReveal'
useReveal()
</script>
