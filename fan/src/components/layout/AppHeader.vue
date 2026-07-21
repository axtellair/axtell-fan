<template>
  <header :class="['header', { scrolled: scrolled }]" id="header">
    <div class="container">
      <nav class="nav" aria-label="Primary">
        <a href="#home" class="brand" aria-label="AXTELL FAN home">
          <span class="brand-mark" aria-hidden="true"><i class="fa-solid fa-fan"></i></span>
          AXTELL<span>FAN</span>
        </a>
        <ul :class="['nav-links', { 'mobile-open': mobileOpen }]" id="navLinks">
          <li><a href="#home" data-target="home" :class="{ active: active === 'home' }">Home</a></li>
          <li class="has-dropdown" :class="{ open: productsOpen }" id="productsNav">
            <button type="button" aria-haspopup="true" :aria-expanded="String(productsOpen)" data-target="products" @click="toggleProducts">Products <i class="fa-solid fa-chevron-down" style="font-size:11px;"></i></button>
            <div class="dropdown" role="menu">
              <a href="#products" @click.prevent="filter('ceiling')" data-filter="ceiling" role="menuitem"><i class="fa-solid fa-fan"></i> Ceiling Fan</a>
              <a href="#products" @click.prevent="filter('mobile')" data-filter="mobile" role="menuitem"><i class="fa-solid fa-truck-medical"></i> Mobile Fan</a>
              <a href="#products" @click.prevent="filter('accessory')" data-filter="accessory" role="menuitem"><i class="fa-solid fa-screwdriver-wrench"></i> Accessories</a>
            </div>
          </li>
          <li><a href="#specs" data-target="specs" :class="{ active: active === 'specs' }">Specifications</a></li>
          <li><a href="#application" data-target="application" :class="{ active: active === 'application' }">Application</a></li>
          <li><a href="#contact" data-target="contact" :class="{ active: active === 'contact' }">Contact Us</a></li>
        </ul>
        <div class="nav-cta">
          <a href="#contact" class="btn btn--primary">Get a Quote <i class="fa-solid fa-arrow-right"></i></a>
          <button class="nav-toggle" id="navToggle" aria-label="Toggle menu" :aria-expanded="String(mobileOpen)" @click="toggleMobile">
            <i :class="mobileOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import useScrollHeader from '../../composables/useScrollHeader'
import useMobileMenu from '../../composables/useMobileMenu'

const { scrolled } = useScrollHeader()
const { mobileOpen, toggleMobile } = useMobileMenu()

const productsOpen = ref(false)
const active = ref('home')

function toggleProducts(e) {
  if (window.innerWidth <= 768) {
    productsOpen.value = !productsOpen.value
  }
}

function filter(cat) {
  const ev = new CustomEvent('products-filter', { detail: cat })
  window.dispatchEvent(ev)
  // close mobile menu
  if (mobileOpen.value) toggleMobile()
}

function updateActive() {
  const sections = Array.from(document.querySelectorAll('section[id]'))
  let current = 'home'
  const y = window.scrollY + 100
  sections.forEach(s => { if (s.offsetTop <= y) current = s.id })
  active.value = current
}

onMounted(() => { window.addEventListener('scroll', updateActive, { passive: true }); updateActive() })
onUnmounted(() => { window.removeEventListener('scroll', updateActive) })
</script>
