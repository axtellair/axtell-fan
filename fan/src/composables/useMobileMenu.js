import { ref } from 'vue'

const mobileOpen = ref(false)

export default function useMobileMenu() {
  function toggleMobile() { mobileOpen.value = !mobileOpen.value }
  return { mobileOpen, toggleMobile }
}
