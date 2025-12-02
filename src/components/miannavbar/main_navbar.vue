<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import sidebar from '../sidebar/sidebar.vue'

const navbarRef = ref(null)
const logoWrapperRef = ref(null)
const logoGlowRef = ref(null)
const sidebarRef = ref(null) // ⬅️ ref to sidebar component

// --- DATA STRUCTURE FOR MENU (desktop nav only) ---
const menuItems = [
  {
    label: 'ຜະລິດຕະພັນ ແລະ ການບໍລິການ',
    link: '#',
    children: [
      'ຖອນເງິນສົດຂ້າມທະນາຄານຜ່ານຕູ້ ATM',
      'ໂອນເງິນຂ້າມທະນາຄານຜ່ານຕູ້ ATM',
      'ໂອນເງິນຂ້າມທະນາຄານເທິງມືຖື',
      'ການຊຳລະເງິນຂ້າມທະນາຄານຜ່ານ QR',
      'ຊຳລະຂ້າມແດນໃນຮູບແບບ QR CODE ລະຫວ່າງປະເທດ',
    ]
  },
  {
    label: 'ສະມາຊິກ',
    link: '#',
    children: [
      'ສະມາຊິກລະບົບບັດທະນາຄານຮ່ວມກັນ',
      'ສະມາຊິກລະບົບຊຳລະຂ້າມທະນາຄານເທິງມືຖື',
      'ສະມາຊິກລະບົບຊຳລະຂ້າມແດນໃນຮູບແບບ QR Code ລະຫວ່າງປະເທດ'
    ]
  },
  { label: 'ຂ່າວ ແລະ ກິດຈະກຳ', link: '#' },
  { label: 'ຮ່ວມງານກັບເຮົາ', link: '#' },
  {
    label: 'ກ່ຽວກັບພວກເຮົາ',
    link: '#',
    children: [
      'ວິໄສທັດ ແລະ ພາລະກິດ',
      'ພາລະບົດບາດ',
      'ຄວາມເປັນມາ',
      'ສະພາຜູ້ບໍລິຫານ',
      'ໂຄງຮ່າງການຈັດຕັ້ງ'
    ]
  },
  { label: 'ຕິດຕໍ່ພວກເຮົາ', link: '#', isCta: true }
]

const isDesktop = () => {
  if (typeof window === 'undefined') return true
  return window.innerWidth > 768
}

// 🔔 Called by hamburger button on mobile
const openSidebarFromNav = () => {
  // sidebar.vue exposes toggleSidebar via defineExpose
  sidebarRef.value?.toggleSidebar()
}

// --- HOVER ANIMATIONS (DROPDOWN, desktop only) ---
const handleMouseEnter = (event) => {
  if (!isDesktop()) return

  const el = event.currentTarget
  const dropdown = el.querySelector('.dropdown-menu')
  const items = el.querySelectorAll('.dropdown-item')

  if (dropdown) {
    gsap.killTweensOf(dropdown)
    gsap.killTweensOf(items)

    gsap.to(dropdown, {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      duration: 0.4,
      ease: 'power3.out'
    })

    gsap.fromTo(
      items,
      { x: -10, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.3,
        stagger: 0.05,
        ease: 'back.out(1.7)'
      }
    )
  }
}

const handleMouseLeave = (event) => {
  if (!isDesktop()) return

  const el = event.currentTarget
  const dropdown = el.querySelector('.dropdown-menu')
  
  if (dropdown) {
    gsap.to(dropdown, {
      autoAlpha: 0,
      y: -10,
      scale: 0.98,
      duration: 0.3,
      ease: 'power2.in'
    })
  }
}

// --- INITIAL LOAD ANIMATION ---
onMounted(() => {
  const tl = gsap.timeline({
    defaults: { duration: 0.8, ease: 'power3.out' }
  })

  tl.from(navbarRef.value, { y: -40, opacity: 0 })
    .from(logoGlowRef.value, { scale: 0.6, opacity: 0 }, '-=0.5')
    .from(logoWrapperRef.value, { x: -20, opacity: 0 }, '-=0.4')
    .from('.nav-group', { y: -10, opacity: 0, stagger: 0.08 }, '-=0.4')
})
</script>

<template>
  <header ref="navbarRef" class="nav-root">
    <div class="nav-left">
      <div ref="logoGlowRef" class="logo-glow"></div>
      <div ref="logoWrapperRef" class="logo-wrapper">
        <img
          src="/logolapnet/logolapnet.PNG"
          alt="LapNet Logo"
          class="logo-img"
        />
        <div class="logo-text-col">
          <span class="logo-text-main">LAPNET</span>
          <span class="logo-text-sub">Lao National Payment Network</span>
        </div>
      </div>
    </div>

    <!-- MOBILE TOGGLE BUTTON: now opens sidebar.vue -->
    <button
      class="nav-toggle"
      type="button"
      aria-label="Toggle navigation"
      @click="openSidebarFromNav"
    >
      <span class="nav-toggle-bar"></span>
      <span class="nav-toggle-bar"></span>
      <span class="nav-toggle-bar"></span>
    </button>

    <!-- DESKTOP NAV ONLY (hidden on mobile by CSS) -->
    <nav class="nav-right">
      <div 
        v-for="(item, index) in menuItems" 
        :key="index"
        class="nav-group"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
      >
        <button 
          class="nav-item" 
          :class="{ 'nav-cta': item.isCta, 'has-dropdown': item.children }"
        >
          {{ item.label }}
          <span
            v-if="item.children"
            class="dropdown-arrow"
          >
            ▼
          </span>
        </button>
      
        <div
          v-if="item.children"
          class="dropdown-menu"
        >
          <div class="dropdown-blur-bg"></div>
          <ul class="dropdown-list">
            <li
              v-for="(child, cIndex) in item.children"
              :key="cIndex"
              class="dropdown-item"
            >
              <a href="#">{{ child }}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <!-- 🔥 GLOBAL SIDEBAR OVERLAY (mobile menu) -->
  <sidebar ref="sidebarRef" />
</template>

<style scoped>
/* ROOT NAVBAR */
.nav-root {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 0.75rem 2.5rem;
  height: 15vh;

  background: linear-gradient(
    95deg,
    rgba(0, 18, 61, 1) 0%,
    rgba(0, 51, 171, 1) 35%,
    rgba(6, 0, 120, 1) 100%
  );
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(72, 164, 255, 0.85);
  box-shadow: 0 14px 35px rgba(0, 0, 0, 0.7), 0 0 22px rgba(0, 60, 200, 0.5);
}

/* LEFT: LOGO CONTAINER */
.nav-left {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.85rem;
}
.logo-text-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.logo-glow {
  position: absolute;
  inset: -16px -26px;
  background: conic-gradient(from 210deg, rgba(0,120,255,0.18), rgba(0,220,255,0.3), rgba(0,120,255,0.18));
  filter: blur(14px);
  opacity: 0.9;
  pointer-events: none;
  z-index: 0;
}

.logo-wrapper {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.45rem 1.1rem;
  border-radius: 999px;
  background: linear-gradient(120deg, #050b1bdd, #050b1bcc);
  border: 1px solid rgba(80, 170, 255, 0.9);
  box-shadow: 0 0 20px rgba(40, 140, 255, 0.45), inset 0 0 10px rgba(0, 110, 255, 0.3);
}

.logo-img {
  width: 40px; height: 40px; object-fit: contain;
  filter: drop-shadow(0 0 8px rgba(90, 190, 255, 0.9));
}

.logo-text-main {
  font-size: 1.1rem; letter-spacing: 0.15em; text-transform: uppercase;
  color: #eef5ff; font-weight: 600; line-height: 1;
}

.logo-text-sub {
  font-size: 0.55rem; text-transform: uppercase; letter-spacing: 0.25em;
  color: rgba(158, 205, 255, 0.95); margin-top: 2px;
}

/* RIGHT: NAV ITEMS (desktop only) */
.nav-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* Nav Group handles the positioning of the Dropdown relative to the Button */
.nav-group {
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
}

.nav-item {
  position: relative;
  border: none; outline: none; background: transparent;
  padding: 0.45rem 0.9rem;
  font-size: 1rem; text-transform: uppercase;
  color: #e5f0ff; cursor: pointer;
  display: inline-flex; align-items: center; justify-content: center;
  border-radius: 999px;
  gap: 6px;
  transition: all 0.2s ease;
}

.dropdown-arrow {
  font-size: 0.5rem;
  transition: transform 0.3s ease, opacity 0.3s ease;
  opacity: 0.7;
}

.nav-group:hover .dropdown-arrow {
  transform: rotate(180deg);
  opacity: 1;
}

/* Hover effects */
.nav-item:hover {
  background: radial-gradient(circle at top, rgba(40, 130, 255, 0.35), transparent 65%);
  color: #ffffff;
  text-shadow: 0 0 8px rgba(120, 200, 255, 0.6);
}

/* --- DROPDOWN MENU STYLING --- */
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  min-width: 240px;
  padding-top: 15px;

  visibility: hidden;
  opacity: 0;
}

.dropdown-list {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 400px;
  background: rgba(5, 11, 27, 0.95);
  border: 1px solid rgba(80, 170, 255, 0.5);
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 80, 200, 0.3);
  backdrop-filter: blur(20px);
  overflow: hidden;
}

.dropdown-item {
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.dropdown-item:last-child {
  border-bottom: none;
}

.dropdown-item a {
  display: block;
  padding: 12px 20px;
  color: #b0d0ff;
  text-decoration: none;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
}

/* Dropdown Item Hover Effect */
.dropdown-item a:hover {
  background: linear-gradient(90deg, rgba(0, 60, 150, 0.4), transparent);
  color: #fff;
  padding-left: 28px;
  text-shadow: 0 0 5px rgba(0, 200, 255, 0.8);
}

.dropdown-item a::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: #00d4ff;
  opacity: 0;
  transition: opacity 0.2s;
}

.dropdown-item a:hover::before {
  opacity: 1;
}

/* --- CTA BUTTON --- */
.nav-cta {
  background: linear-gradient(135deg, #3a9bff, #7ce3ff);
  color: #021325; font-weight: 600;
  box-shadow: 0 0 22px rgba(100, 190, 255, 0.7);
}
.nav-cta:hover {
  transform: translateY(-1px) scale(1.02);
  box-shadow: 0 0 26px rgba(120, 205, 255, 0.9);
}

/* MOBILE TOGGLE */
.nav-toggle {
  display: none;
  border: none;
  background: transparent;
  cursor: pointer;
  flex-direction: column;
  gap: 4px;
  padding: 0.35rem;
}

.nav-toggle-bar {
  width: 20px;
  height: 2px;
  background: #e5f0ff;
  border-radius: 999px;
}

/* RESPONSIVE */
@media (max-width: 992px) {
  .logo-text-sub { display: none; }
  .nav-item { font-size: 0.8rem; }
}

@media (max-width: 768px) {
  .nav-root {
    height: auto;
    flex-direction: row;
    align-items: center;
    padding: 0.6rem 1.25rem;
  }

  /* hide desktop nav on mobile */
  .nav-right {
    display: none;
  }

  /* show hamburger on mobile */
  .nav-toggle {
    display: flex;
  }
}
</style>
