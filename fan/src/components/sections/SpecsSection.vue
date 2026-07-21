<template>
  <section class="section section--light" id="specs">
    <div class="container">
      <div class="section-head reveal"><span class="eyebrow">Technical Data</span><h2>Full Specifications</h2><p>Ceiling and Mobile fans are listed separately. Click any column header to sort.</p></div>

      <div class="spec-wrap reveal">
        <h3 class="sub-title">Ceiling Fans</h3>
        <table class="spec-table" ref="ceilingTable">
          <thead><tr><th @click="sort('ceiling', 'model', 'string')">Model <span class="sort-ico"><i class="fa-solid fa-sort"></i></span></th><th @click="sort('ceiling', 'diameter', 'number')">Diameter (ft) <span class="sort-ico"><i class="fa-solid fa-sort"></i></span></th><th @click="sort('ceiling', 'power', 'number')">Power (kW) <span class="sort-ico"><i class="fa-solid fa-sort"></i></span></th><th @click="sort('ceiling', 'speed', 'number')">Speed (RPM) <span class="sort-ico"><i class="fa-solid fa-sort"></i></span></th><th @click="sort('ceiling', 'airflow', 'number')">Airflow (m³/min) <span class="sort-ico"><i class="fa-solid fa-sort"></i></span></th><th @click="sort('ceiling', 'noise', 'number')">Noise (dB) <span class="sort-ico"><i class="fa-solid fa-sort"></i></span></th><th @click="sort('ceiling', 'weight', 'number')">Weight (kg) <span class="sort-ico"><i class="fa-solid fa-sort"></i></span></th></tr></thead>
          <tbody>
            <tr v-for="r in ceiling" :key="r.model" :data-model="r.model" :class="{ 'highlight-row': highlighted === r.model }"><td><strong>{{ r.model }}</strong></td><td>{{ r.diameter }}</td><td>{{ r.power }}</td><td>{{ r.speed }}</td><td>{{ r.airflow }}</td><td>{{ r.noise }}</td><td>{{ r.weight }}</td></tr>
          </tbody>
          <tfoot><tr><td colspan="7">点击列头排序 · 点击产品卡片「View specs」可定位到对应行</td></tr></tfoot>
        </table>
      </div>

      <div class="spec-wrap reveal">
        <h3 class="sub-title">Mobile Fans</h3>
        <table class="spec-table" ref="mobileTable">
          <thead><tr><th @click="sort('mobile', 'model', 'string')">MODEL <span class="sort-ico"><i class="fa-solid fa-sort"></i></span></th><th @click="sort('mobile', 'diameter', 'number')">DIAMETER (FT) <span class="sort-ico"><i class="fa-solid fa-sort"></i></span></th><th @click="sort('mobile', 'power_rate', 'number')">POWER RATE (KW) <span class="sort-ico"><i class="fa-solid fa-sort"></i></span></th><th @click="sort('mobile', 'input_power', 'number')">INPUT POWER <span class="sort-ico"><i class="fa-solid fa-sort"></i></span></th><th @click="sort('mobile', 'speed', 'number')">SPEED (RPM) <span class="sort-ico"><i class="fa-solid fa-sort"></i></span></th><th @click="sort('mobile', 'airflow', 'number')">AIRFLOW (M³/MIN) <span class="sort-ico"><i class="fa-solid fa-sort"></i></span></th><th @click="sort('mobile', 'weight_lb', 'number')">WEIGHT (LB) <span class="sort-ico"><i class="fa-solid fa-sort"></i></span></th></tr></thead>
          <tbody>
            <tr v-for="r in mobile" :key="r.model" :data-model="r.model" :class="{ 'highlight-row': highlighted === r.model }"><td><strong>{{ r.model }}</strong></td><td>{{ r.diameter }}</td><td>{{ r.power_rate }}</td><td>{{ r.input_power }}</td><td>{{ r.speed }}</td><td>{{ r.airflow }}</td><td>{{ r.weight_lb }}</td></tr>
          </tbody>
          <tfoot><tr><td colspan="7">点击列头排序 · 点击产品卡片「View specs」可定位到对应行</td></tr></tfoot>
        </table>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import useReveal from '../../composables/useReveal'

useReveal()

const ceiling = ref([
  { model: 'AX-2600', diameter: 8.5, power: 0.26, speed: 120, airflow: 6000, noise: 35, weight: 45.0 },
  { model: 'AX-3100', diameter: 10, power: 0.3, speed: 100, airflow: 6800, noise: 35, weight: 50.0 },
  { model: 'AX-3500', diameter: 11.5, power: 0.4, speed: 90, airflow: 8800, noise: 36, weight: 60.0 },
  { model: 'AX-4200', diameter: 14, power: 0.5, speed: 70, airflow: 10800, noise: 36, weight: 65.0 },
  { model: 'AX-5000', diameter: 18, power: 0.8, speed: 70, airflow: 12400, noise: 38, weight: 80.0 },
  { model: 'AX-5500', diameter: 18, power: 1.0, speed: 60, airflow: 13000, noise: 38, weight: 85.0 },
  { model: 'AX-6100', diameter: 20, power: 1.2, speed: 58, airflow: 14200, noise: 38, weight: 100.0 },
  { model: 'AX-7300', diameter: 24, power: 1.5, speed: 50, airflow: 16150, noise: 40, weight: 120.0 }
])

const mobile = ref([
  { model: 'AXG-100', diameter: 0.6, power_rate: 0.45, input_power: 0.45, speed: 850, airflow: 25000, weight_lb: 44.1 },
  { model: 'AXS-100', diameter: 0.5, power_rate: 0.45, input_power: 0.45, speed: 850, airflow: 25000, weight_lb: 50.7 },
  { model: 'AXS-130', diameter: 0.8, power_rate: 0.45, input_power: 0.45, speed: 500, airflow: 35000, weight_lb: 92.6 },
  { model: 'AXS-150', diameter: 0.9, power_rate: 0.6, input_power: 0.6, speed: 460, airflow: 42000, weight_lb: 130.1 },
  { model: 'AXS-200', diameter: 1.1, power_rate: 1.1, input_power: 1.1, speed: 400, airflow: 56000, weight_lb: 172.0 }
])

const highlighted = ref(null)

function sort(which, key, type) {
  const arr = which === 'ceiling' ? ceiling.value : mobile.value
  const dirKey = `__dir_${which}_${key}`
  const dir = arr[dirKey] === 'asc' ? 'desc' : 'asc'
  arr.sort((a,b)=>{
    const va = a[key]
    const vb = b[key]
    if (type === 'number') return dir === 'asc' ? va - vb : vb - va
    return dir === 'asc' ? String(va).localeCompare(String(vb)) : String(vb).localeCompare(String(va))
  })
  arr[dirKey] = dir
}

onMounted(()=>{
  window.addEventListener('view-specs', (e)=>{ const model = e.detail; highlighted.value = model; setTimeout(()=>{ highlighted.value = null }, 3000) })
})
</script>
