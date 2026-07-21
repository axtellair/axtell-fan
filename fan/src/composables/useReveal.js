export default function useReveal() {
  if (typeof window === 'undefined') return
  const els = Array.from(document.querySelectorAll('.reveal'))
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if (entry.isIntersecting) { entry.target.classList.add('in'); observer.unobserve(entry.target) }
    })
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
  els.forEach(el=>observer.observe(el))
  return { observer }
}
