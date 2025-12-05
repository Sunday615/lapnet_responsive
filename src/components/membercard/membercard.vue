<template>
  <div class="membercontainer">
    <div class="logobox">
      <img :src="image" :alt="alt" />
    </div>

    <div ref="card" class="hover-card" :style="{ background: bg }">
      <div ref="overlay" class="card-overlay"></div>

      <h1>{{ title }}</h1>
      <h2>{{ subtitle }}</h2>

      <div class="icons" ref="icons">
        <a v-if="link1" :href="link1" class="icon" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-facebook-f"></i>
        </a>
        <a v-if="link2" :href="link2" class="icon" target="_blank" rel="noopener noreferrer">
          <i class="fa-solid fa-globe"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from "vue";
import { gsap } from "gsap";

const props = defineProps({
  image: { type: String, required: true },
  alt: { type: String, default: "Card" },

  title: { type: String, required: true },
  subtitle: { type: String, required: true },

  link1: { type: String, default: "" },
  link2: { type: String, default: "" },

  layer1: {
    type: String,
    default:
      "linear-gradient(#cb0202, #a71f33) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat",
  },
  layer2: { type: String, default: "linear-gradient(321deg, transparent 0%, #b88a44 100%)" },
  layer3: { type: String, default: "linear-gradient(26deg, transparent 0%, #faf398 100%)" },
  layer4: { type: String, default: "linear-gradient(172deg, transparent 0%, #e0aa4e 100%)" },
  layer5: { type: String, default: "linear-gradient(270deg, transparent 0%, #f9f295 100%)" },

  overlayHoverOpacity: { type: Number, default: 0.15 },
});

const bg = computed(() =>
  [props.layer1, props.layer2, props.layer3, props.layer4, props.layer5]
    .filter(Boolean)
    .join(", ")
);

const card = ref(null);
const overlay = ref(null);
const icons = ref(null);

let tl;
let onEnter;
let onLeave;

onMounted(() => {
  tl = gsap.timeline({ paused: true });

  tl.to(overlay.value, {
    opacity: props.overlayHoverOpacity,
    duration: 0.4,
    ease: "power2.out",
  });

  tl.fromTo(
    icons.value,
    { opacity: 0, y: 20, scale: 0.9 },
    { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(1.7)" },
    "-=0.2"
  );

  onEnter = () => tl.play();
  onLeave = () => tl.reverse();

  card.value?.addEventListener("mouseenter", onEnter);
  card.value?.addEventListener("mouseleave", onLeave);
});

onBeforeUnmount(() => {
  if (card.value && onEnter && onLeave) {
    card.value.removeEventListener("mouseenter", onEnter);
    card.value.removeEventListener("mouseleave", onLeave);
  }
  tl?.kill();
});
</script>

<style scoped>
.logobox {
  max-width: 18.35rem;
  height: auto;
  border-radius: 10px;
  position: absolute;
  overflow: hidden;
  z-index: 2;
  border: 1px solid #00000025;
}
.logobox img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.membercontainer {
  margin-bottom: 15px;
  max-width: 100%;
  height: 300px;
  align-items: center;
  display: flex;
  position: relative;
}

.hover-card {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  width: 90%;
  margin-left: 285px;
  height: 200px;
  overflow: hidden;
  cursor: pointer;
}

.hover-card h1 {
  font-size: var(--fs-md);
  font-weight: bold;
  padding-bottom: 10px;
    width: 97%;
  text-align: center;
  border: 1px solid salmon;
  font-family: "Noto Sans Lao", sans-serif;
  color: #fff;
}
.hover-card h2 {
  font-size: var(--fs-base);
  color: #fff;
  border: 1px solid blue;
  width: 97%;
  text-align: center;
  font-weight: 600;
  font-family: "Inter";
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: #000;
  opacity: 0;
  pointer-events: none;
}

.icons {
  position: absolute;
  bottom: 15px;
  right: 15px;
  display: flex;
  gap: 10px;
}

.icon {
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 8px;
  display: grid;
  place-items: center;
  color: #0f172a;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease;
}
.icon:hover {
  transform: translateY(-3px);
}
</style>
