<template>
  <section class="section section--dark" id="products">
    <div class="container">
      <div class="section-head reveal"><span class="eyebrow">Our Products</span><h2>Find the Right Fan for Your Facility</h2><p>Browse our full range of industrial ceiling fans, mobile fans, and accessories.</p></div>
      <div class="tabs reveal" role="tablist">
        <button v-for="t in tabs" :key="t.key" class="tab" :class="{ active: filter === t.key }" @click="setFilter(t.key)" role="tab" :aria-selected="String(filter === t.key)"><i :class="t.icon"></i> {{ t.label }} <span class="count">{{ counts[t.key] || 0 }}</span></button>
      </div>
      <div class="product-grid" id="productGrid">
        <article v-for="p in filtered" :key="p.model || p.title" class="product-card reveal" :data-category="p.category">
          <div class="p-ico"><img :src="p.img" :alt="p.title" loading="lazy"/></div>
          <div class="p-cat">{{ categoryLabel(p.category) }}</div>
          <h3>{{ p.title }}</h3>
          <ul v-if="p.specs" class="p-specs">
            <li v-for="(s,i) in p.specs" :key="i"><span>{{ specKeys[i] || i }}</span><span>{{ s }}</span></li>
          </ul>
          <p v-if="p.desc" class="p-desc">{{ p.desc }}</p>
          <a class="p-link" href="#specs" @click.prevent="viewSpecs(p)">View specs <i class="fa-solid fa-arrow-right-long"></i></a>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { products } from '../../data/products'
import useReveal from '../../composables/useReveal'

useReveal()

const filter = ref('ceiling')
const tabs = [
  { key: 'ceiling', label: 'Ceiling Fan', icon: 'fa-solid fa-fan' },
  { key: 'mobile', label: 'Mobile Fan', icon: 'fa-solid fa-truck-medical' },
  { key: 'accessory', label: 'Accessories', icon: 'fa-solid fa-screwdriver-wrench' }
]

const counts = tabs.reduce((acc, t) => (acc[t.key] = products.filter(p => p.category === t.key).length, acc), {})

const filtered = computed(() => products.filter(p => p.category === filter.value))

function setFilter(k) { filter.value = k }

function categoryLabel(cat) {
  if (cat === 'ceiling') return 'Ceiling Fan'
  if (cat === 'mobile') return 'Mobile Fan'
  return 'Accessory'
}

function viewSpecs(p) {
  const ev = new CustomEvent('view-specs', { detail: p.model || p.title })
  window.dispatchEvent(ev)
  const el = document.getElementById('specs')
  el?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('products-filter', (e) => { setFilter(e.detail) })
})
</script>
