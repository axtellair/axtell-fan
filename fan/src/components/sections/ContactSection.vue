<template>
  <section class="section section--light" id="contact">
    <div class="container">
      <div class="section-head reveal"><span class="eyebrow">Get in Touch</span><h2>Request a Quote</h2><p>Tell us about your facility and our engineers will recommend the right fan configuration.</p></div>
      <div class="contact-grid">
        <div class="contact-info reveal">
          <h3>Let's talk about your project</h3>
          <p>Our team responds within one business day. For urgent enquiries, call us directly during business hours.</p>
          <ul class="contact-list">
            <li><div class="ico"><i class="fa-solid fa-location-dot"></i></div><div class="meta"><div class="l">Address</div><div class="v">5211 Co Rd 597, Farmersville, TX 75442</div></div></li>
            <li><div class="ico"><i class="fa-solid fa-phone"></i></div><div class="meta"><div class="l">Phone</div><div class="v"><a href="tel:+19728075555">(972) 807 5555</a></div></div></li>
            <li><div class="ico"><i class="fa-solid fa-envelope"></i></div><div class="meta"><div class="l">Email</div><div class="v"><a href="mailto:sale@axtell.us">sale@axtell.us</a></div></div></li>
          </ul>
          <div class="social-row" aria-label="Social media">
            <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
            <a href="#" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
            <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
          </div>
        </div>

        <form class="contact-form reveal" @submit.prevent="onSubmit" novalidate>
          <div class="form-success" :class="{ show: success }"><i class="fa-solid fa-circle-check"></i><span>Thanks! Your enquiry has been received — we'll reply within one business day.</span></div>
          <div class="form-row">
            <div class="field" :class="{ invalid: errors.name }"><label for="name">Full Name <span class="req">*</span></label><input id="name" v-model="form.name" required><span class="err-msg">Please enter your full name.</span></div>
            <div class="field" :class="{ invalid: errors.email }"><label for="email">Email <span class="req">*</span></label><input id="email" v-model="form.email" type="email" required><span class="err-msg">Please enter a valid email address.</span></div>
          </div>
          <div class="form-row">
            <div class="field" :class="{ invalid: errors.phone }"><label for="phone">Phone</label><input id="phone" v-model="form.phone" type="tel"><span class="err-msg">Please enter a valid phone number.</span></div>
            <div class="field"><label for="company">Company</label><input id="company" v-model="form.company"><span class="err-msg"></span></div>
          </div>
          <div class="form-row">
            <div class="field full" :class="{ invalid: errors.message }"><label for="message">Message <span class="req">*</span></label><textarea id="message" v-model="form.message" required placeholder="Tell us about your facility size, ceiling height, and airflow needs…"></textarea><span class="err-msg">Please tell us a bit about your project.</span></div>
          </div>
          <button type="submit" class="btn btn--dark form-submit" :disabled="submitting"><span class="btn-label">{{ submitting ? 'Sending…' : 'Send Enquiry' }} <i class="fa-solid fa-paper-plane"></i></span></button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import useReveal from '../../composables/useReveal'
import useFormValidation from '../../composables/useFormValidation'

useReveal()

const form = reactive({ name: '', email: '', phone: '', company: '', message: '' })
const { validate, errors } = useFormValidation()
const submitting = ref(false)
const success = ref(false)

function onSubmit() {
  const ok = validate(form, errors)
  if (!ok) return
  submitting.value = true
  success.value = false
  setTimeout(() => {
    submitting.value = false
    success.value = true
    Object.keys(form).forEach(k => form[k] = '')
  }, 1200)
}
</script>
