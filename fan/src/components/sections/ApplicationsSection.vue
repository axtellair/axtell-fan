<template>
  <section class="section section--dark" id="application">
    <div class="container">
      <div class="section-head reveal"><span class="eyebrow">Applications</span><h2>Built for Every Industrial Space</h2><p>From heavy manufacturing to public venues, AXTELL fans keep air moving where it matters most.</p></div>
      <div class="app-grid">
        <article class="app-card reveal" data-delay="1"><div class="app-img"><img src="https://axtell0.wordpress.com/wp-content/uploads/2026/07/1.png" alt="Manufacturing Plants" loading="lazy"></div><div class="app-body"><h3>Manufacturing Plants</h3><p>Clear heat and fumes from production lines, improving worker comfort and equipment longevity.</p></div></article>
        <article class="app-card reveal" data-delay="2"><div class="app-img"><img src="https://axtell0.wordpress.com/wp-content/uploads/2026/07/2.png" alt="Warehouses & Logistics" loading="lazy"></div><div class="app-body"><h3>Warehouses & Logistics</h3><p>Even out temperature layers in high-bay storage to protect goods and reduce HVAC load.</p></div></article>
        <article class="app-card reveal" data-delay="3"><div class="app-img"><img src="https://axtell0.wordpress.com/wp-content/uploads/2026/07/3.png" alt="Sports Halls" loading="lazy"></div><div class="app-body"><h3>Sports Halls</h3><p>Quiet, powerful airflow keeps athletes cool and spectators comfortable during events.</p></div></article>
      </div>
    </div>
  </section>
</template>

<script setup>
import useReveal from '../../composables/useReveal'
useReveal()
</script>
