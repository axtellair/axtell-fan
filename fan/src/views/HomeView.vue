<template>
  <main>
    <HeroSection />
    <FeaturesSection />
    <ProductsSection />
    <SpecsSection />
    <ApplicationsSection />
    <ContactSection />
    <footer class="footer">
      <div class="container">
        <div class="footer-bottom"><p>© <span>{{ year }}</span> AXTELL FAN Co., Ltd. All rights reserved.</p><span class="made">Built for <span>industrial performance</span></span></div>
      </div>
    </footer>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import HeroSection from '../components/sections/HeroSection.vue'
import FeaturesSection from '../components/sections/FeaturesSection.vue'
import ProductsSection from '../components/sections/ProductsSection.vue'
import SpecsSection from '../components/sections/SpecsSection.vue'
import ApplicationsSection from '../components/sections/ApplicationsSection.vue'
import ContactSection from '../components/sections/ContactSection.vue'

const year = new Date().getFullYear()
</script>
