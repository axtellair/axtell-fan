import { ref, onMounted, onUnmounted } from 'vue'

export default function useScrollHeader() {
  const scrolled = ref(false)
  let ticking = false
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(()=>{ scrolled.value = window.scrollY > 30; ticking = false })
      ticking = true
    }
  }
  onMounted(()=> window.addEventListener('scroll', onScroll, { passive: true }))
  onUnmounted(()=> window.removeEventListener('scroll', onScroll))
  return { scrolled }
}
