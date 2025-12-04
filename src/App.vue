<template>
  <div class="app-shell">
    <!-- Tech overlay panel -->
    <div class="tech-overlay" ref="overlay"></div>

    <!-- Routed content -->
    <RouterView v-slot="{ Component }">
      <main ref="page" class="page">
        <component :is="Component" />
      </main>
    </RouterView>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useRouter, RouterView } from 'vue-router'
import gsap from 'gsap'

const overlay = ref(null)
const page = ref(null)
const router = useRouter()

function panelIn() {
  return new Promise((resolve) => {
    const tl = gsap.timeline({
      defaults: { duration: 0.6, ease: 'power3.inOut' },
      onComplete: resolve
    })

    tl
      .set(overlay.value, {
        xPercent: 120,
        opacity: 0.9
      })
      .to(overlay.value, { xPercent: 0 })
      .to(
        page.value,
        { opacity: 0.2, filter: 'blur(6px)' },
        0 // start at same time as overlay
      )
  })
}

function panelOut() {
  return new Promise((resolve) => {
    const tl = gsap.timeline({
      defaults: { duration: 0.6, ease: 'power3.inOut' },
      onComplete: resolve
    })

    tl
      .to(overlay.value, { xPercent: -120 })
      .fromTo(
        page.value,
        { opacity: 0, y: 24, filter: 'blur(6px)' },
        { opacity: 1, y: 0, filter: 'blur(0)', duration: 0.75 },
        '-=0.3'
      )
      .set(overlay.value, { xPercent: 120 }) // reset off-screen right
  })
}

onMounted(() => {
  router.beforeEach(async (to, from, next) => {
    // first load, skip animation
    if (!from.name) return next()
    await panelIn()
    next()
  })

  router.afterEach(async (to, from) => {
    if (!from.name) return
    await nextTick()
    await panelOut()
  })
})
</script>
