import { reactive } from 'vue'

export default function useFormValidation() {
  const errors = reactive({ name: false, email: false, phone: false, message: false })

  function validate(form, out) {
    out.name = !(form.name && form.name.trim().length >= 2)
    out.email = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    out.phone = !!(form.phone && form.phone.replace(/[\s\-()]/g, '').length < 7)
    out.message = !(form.message && form.message.trim().length >= 10)
    return !out.name && !out.email && !out.phone && !out.message
  }

  return { validate, errors }
}
