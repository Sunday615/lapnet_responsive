<template>
  <a
    ref="item"
    class="nav-text"
    :href="href"
    @mouseenter="onEnter"
    @mouseleave="onLeave"
  >
    <span ref="iconWrap" class="nav-text__icon-wrap">
      <i class="fa-solid fa-chevron-right nav-text__icon"></i>
    </span>

    <span class="nav-text__label">{{ title }}</span>

    <span ref="underline" class="nav-text__underline"></span>
  </a>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    default: "#",
  },
});

const item = ref(null);
const iconWrap = ref(null);
const underline = ref(null);

onMounted(() => {
  if (!item.value) return;

  // Intro animation: slide up + fade
  gsap.from(item.value, {
    y: 12,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out",
  });

  // Idle micro-movement for icon (techy feel)
  if (iconWrap.value) {
    gsap.to(iconWrap.value, {
      x: 2,
      repeat: -1,
      yoyo: true,
      duration: 1.6,
      ease: "sine.inOut",
    });
  }
});

const onEnter = () => {
  if (!iconWrap.value || !underline.value || !item.value) return;

  gsap.to(iconWrap.value, {
    x: 6,
    duration: 0.25,
    ease: "power2.out",
  });

  gsap.to(underline.value, {
    scaleX: 1,
    duration: 0.25,
    ease: "power2.out",
  });

  gsap.to(item.value, {
    boxShadow:
      "0 0 18px rgba(56,189,248,0.55), 0 0 40px rgba(15,23,42,0.9)",
    borderColor: "rgba(56,189,248,0.9)",
    duration: 0.25,
    ease: "power2.out",
  });
};

const onLeave = () => {
  if (!iconWrap.value || !underline.value || !item.value) return;

  gsap.to(iconWrap.value, {
    x: 2,
    duration: 0.25,
    ease: "power2.out",
  });

  gsap.to(underline.value, {
    scaleX: 0,
    duration: 0.25,
    ease: "power2.in",
  });

  gsap.to(item.value, {
    boxShadow:
      "0 0 0 rgba(15,23,42,0.7), 0 0 20px rgba(15,23,42,0.85)",
    borderColor: "rgba(148,163,184,0.5)",
    duration: 0.25,
    ease: "power2.in",
  });
};
</script>

<style scoped>
.nav-text {
width: 100%;

  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 1rem 3.5rem;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.5);

  backdrop-filter: blur(12px);
  color: #9ca3af;
  font-size: 1.4rem;

  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease, transform 0.2s ease;
  box-shadow:
    0 0 0 rgba(15, 23, 42, 0.7),
    0 0 20px rgba(15, 23, 42, 0.85);
}

.nav-text:hover {
  color: #e5f0ff;
  transform: translateY(-1px);
}

/* Icon wrapper: small glowing chip */
.nav-text__icon-wrap {
  width: 30px;
  height: 30px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  background: radial-gradient(circle at 30% 0, #38bdf8, #0f172a);
  box-shadow:
    0 0 10px rgba(56, 189, 248, 0.6),
    0 0 18px rgba(15, 23, 42, 0.8);
  flex-shrink: 0;
}

.nav-text__icon {
  /* Font Awesome icon */
}

/* Label */
.nav-text__label {
  position: relative;
  z-index: 1;
  background: linear-gradient(to right, #e5f0ff, #bfdbfe);
  -webkit-background-clip: text;
  color: transparent;
}

/* Neon underline under text */
.nav-text__underline {
  position: absolute;
  left: 2.4rem; /* start under text (after icon) */
  right: 0.6rem;
  bottom: 0.18rem;
  height: 2px;
  border-radius: 999px;

  transform-origin: left center;
  transform: scaleX(0);
}

/* Optional: smaller on very small screens */
@media (max-width: 480px) {
  .nav-text {
    font-size: 0.8rem;
    padding: 0.35rem 0.8rem;
  }

  .nav-text__icon-wrap {
    width: 18px;
    height: 18px;
    font-size: 0.65rem;
  }
}
</style>
