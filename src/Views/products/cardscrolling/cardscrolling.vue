<template>
  <div class="atm-page">
    <div class="content">
      <!-- LEFT PANEL -->
      <section class="left-panel">
        <h1 class="title">Modern ATM Card Slider</h1>
        <p class="subtitle">
          This panel is for your description. You can explain product features,
          onboarding steps, or anything you want next to the animated ATM cards.
        </p>

        <ul class="feature-list">
          <li>✔ Smooth GSAP vertical auto-scrolling</li>
          <li>✔ 16 modern ATM-style cards</li>
          <li>✔ Gradient blue & white theme</li>
          <li>✔ Responsive two-column layout</li>
        </ul>

        <button class="primary-btn">
          Get Started
        </button>
      </section>

      <!-- RIGHT PANEL -->
      <section class="right-panel">
        <div class="slider-header">
          <span class="badge">Live Cards</span>
          <h2>Active ATM Cards</h2>
          <p>Auto-scrolling card stack with subtle 3D & glow effects.</p>
        </div>

        <div class="cards-window">
          <!-- The animated column -->
          <div class="cards-column" ref="cardsColumn">
            <div
              v-for="card in loopCards"
              :key="card.id + '-' + card.loopKey"
              class="atm-card"
            >
              <div class="card-top">
                <span class="chip"></span>
                <span class="network">{{ card.network }}</span>
              </div>

              <div class="card-number">
                {{ card.number }}
              </div>

              <div class="card-bottom">
                <div class="holder">
                  <span class="label">CARD HOLDER</span>
                  <span class="value">{{ card.holder }}</span>
                </div>
                <div class="expiry">
                  <span class="label">VALID THRU</span>
                  <span class="value">{{ card.expiry }}</span>
                </div>
              </div>

              <div class="card-accent"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import gsap from "gsap";

// 16 cards
const cards = [
  { id: 1, holder: "JOHN CARTER",   number: "**** **** **** 1024", expiry: "08/27", network: "UnionPay" },
  { id: 2, holder: "EMILY STONE",   number: "**** **** **** 9834", expiry: "11/26", network: "UnionPay" },
  { id: 3, holder: "MICHAEL LEE",   number: "**** **** **** 5532", expiry: "04/28", network: "UnionPay" },
  { id: 4, holder: "SOPHIA KIM",    number: "**** **** **** 7789", expiry: "09/27", network: "UnionPay" },
  { id: 5, holder: "DAVID BROWN",   number: "**** **** **** 1492", expiry: "02/29", network: "UnionPay" },
  { id: 6, holder: "LISA CHEN",     number: "**** **** **** 6321", expiry: "06/27", network: "UnionPay" },
  { id: 7, holder: "ALEX MORRIS",   number: "**** **** **** 8420", expiry: "12/26", network: "UnionPay" },
  { id: 8, holder: "NATALIE WONG",  number: "**** **** **** 3901", expiry: "07/28", network: "UnionPay" },
  { id: 9, holder: "JAMES TAYLOR",  number: "**** **** **** 4217", expiry: "03/27", network: "UnionPay" },
  { id: 10, holder: "OLIVIA PARK",  number: "**** **** **** 7654", expiry: "10/26", network: "UnionPay" },
  { id: 11, holder: "ROBERT KING",  number: "**** **** **** 2156", expiry: "05/28", network: "UnionPay" },
  { id: 12, holder: "ZOE MARTIN",   number: "**** **** **** 9999", expiry: "01/29", network: "UnionPay" },
  { id: 13, holder: "HENRY COLE",   number: "**** **** **** 3201", expiry: "09/28", network: "UnionPay" },
  { id: 14, holder: "AVA JONES",    number: "**** **** **** 8044", expiry: "02/27", network: "UnionPay" },
  { id: 15, holder: "CHRIS EVANS",  number: "**** **** **** 5678", expiry: "08/26", network: "UnionPay" },
  { id: 16, holder: "MIA LOPEZ",    number: "**** **** **** 1111", expiry: "11/27", network: "UnionPay" },
];

// duplicate to create seamless looping
const loopCards = computed(() => [
  ...cards.map((c) => ({ ...c, loopKey: "a" })),
  ...cards.map((c) => ({ ...c, loopKey: "b" })),
]);

const cardsColumn = ref(null);
let tween = null;

const initAutoScroll = () => {
  const col = cardsColumn.value;
  if (!col) return;

  const halfHeight = col.scrollHeight / 2;

  tween = gsap.to(col, {
    y: -halfHeight,
    duration: 40, // slow & smooth
    ease: "none",
    repeat: -1,
  });
};

const destroyAutoScroll = () => {
  if (tween) {
    tween.kill();
    tween = null;
  }
  if (cardsColumn.value) {
    gsap.set(cardsColumn.value, { y: 0 });
  }
};

onMounted(() => {
  initAutoScroll(); // 🔥 auto-scroll on all screen sizes

  // soft floating animation on all cards
  gsap.to(".atm-card", {
    y: -8,
    duration: 2.5,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
    stagger: 0.1,
  });
});

onBeforeUnmount(() => {
  destroyAutoScroll();
});
</script>


<style scoped>
.atm-page {
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: stretch;
  background: linear-gradient(135deg, #0b1f4a, #1155ff);
  color: #ffffff;
  padding: 1.5rem;
  box-sizing: border-box;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text",
    "Segoe UI", sans-serif;
}

.content {
  width: 100%;
  max-width: 1200px;
  display: flex;
  gap: 2rem;
}

/* LEFT */
.left-panel {
  flex: 1.1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  border-radius: 1.5rem;
  background: linear-gradient(
    135deg,
    rgba(37, 99, 235, 0.25),
    rgba(191, 219, 254, 0.15)
  );
  box-shadow: 0 20px 40px rgba(15, 76, 129, 0.6);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.25);
}

.title {
  font-size: 2.1rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 0.95rem;
  color: rgba(240, 248, 255, 0.85);
  margin-bottom: 1.5rem;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-size: 0.9rem;
  color: rgba(240, 248, 255, 0.9);
}

.primary-btn {
  align-self: flex-start;
  padding: 0.75rem 1.6rem;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.95rem;
  background: linear-gradient(135deg, #2563eb, #60a5ff);
  color: #ffffff;
  box-shadow: 0 14px 30px rgba(37, 99, 235, 0.7);
  transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
}

.primary-btn:hover {
  transform: translateY(-1px) scale(1.02);
  box-shadow: 0 18px 40px rgba(37, 99, 235, 0.85);
  filter: brightness(1.08);
}

/* RIGHT */
.right-panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1.4rem;
  border-radius: 1.5rem;
  background: linear-gradient(145deg, #0f2e7b, #1d4ed8, #3b82f6);
  box-shadow: 0 24px 50px rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(191, 219, 254, 0.4);
}

.slider-header {
  margin-bottom: 1.2rem;
}

.slider-header h2 {
  margin: 0.25rem 0 0.15rem;
  font-size: 1.2rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.slider-header p {
  margin: 0;
  font-size: 0.8rem;
  color: rgba(226, 239, 255, 0.8);
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.18rem 0.6rem;
  border-radius: 999px;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  background: linear-gradient(135deg, #2563eb, #60a5ff);
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.75);
}

/* Window for vertical slider */
.cards-window {
  flex: 1;
  overflow: hidden; /* desktop: ซ่อนส่วนเกิน ให้ GSAP เลื่อน */
  position: relative;
  border-radius: 1.2rem;
  padding: 0.4rem;
  background: linear-gradient(160deg, #1d4ed8, #0f265f);
}

/* Column that will be animated by GSAP */
.cards-column {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  padding: 0.3rem 0.1rem 0.3rem;
}

/* Single ATM card */
.atm-card {
  position: relative;
  width: 100%;
  min-height: 150px;
  border-radius: 1.2rem;
  padding: 1rem 1.2rem;
  box-sizing: border-box;
  overflow: hidden;
  background: linear-gradient(135deg, #1d4ed8, #60a5ff);
  box-shadow: 0 14px 30px rgba(15, 40, 80, 0.8);
  border: 1px solid rgba(191, 219, 254, 0.6);
  color: #f9fbff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* subtle glass highlight */
.atm-card::before {
  content: "";
  position: absolute;
  inset: -40%;
  background: radial-gradient(
    circle at 0% 0%,
    rgba(255, 255, 255, 0.25),
    transparent 55%
  );
  opacity: 0.9;
  pointer-events: none;
}

/* decorative gradient loop line */
.card-accent {
  position: absolute;
  inset: 10% -30%;
  background: linear-gradient(
    120deg,
    rgba(191, 219, 254, 0.35),
    rgba(96, 165, 255, 0.95),
    rgba(191, 219, 254, 0.2)
  );
  filter: blur(18px);
  opacity: 0.8;
  transform: skewX(-18deg);
  pointer-events: none;
}

/* Top row: chip + network */
.card-top {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
}

.chip {
  width: 32px;
  height: 24px;
  border-radius: 0.5rem;
  background: linear-gradient(135deg, #e0f2ff, #60a5ff);
  box-shadow: 0 0 0 1px rgba(15, 46, 94, 0.7);
}

.network {
  font-size: 0.8rem;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  background: rgba(15, 35, 80, 0.45);
  border: 1px solid rgba(219, 234, 254, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

/* Card number */
.card-number {
  position: relative;
  z-index: 1;
  font-size: 1.1rem;
  letter-spacing: 0.18em;
  margin: 0.8rem 0 0.5rem;
}

/* Bottom row: holder + expiry */
.card-bottom {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: rgba(239, 246, 255, 0.9);
}

.label {
  opacity: 0.8;
  display: block;
}

.value {
  font-size: 0.8rem;
  margin-top: 0.1rem;
}

/* TABLET & MOBILE (1 column) */
/* TABLET & MOBILE (1 column) */
@media (max-width: 960px) {
  .content {
    flex-direction: column;
  }

  .left-panel,
  .right-panel {
    padding: 1.4rem;
  }

  .atm-page {
    height: auto;
    min-height: 80vh;
  }

  /* show about 4 cards height, rest hidden but auto-scrolling */
  .cards-window {
    max-height: calc(4 * 150px + 3 * 0.9rem + 1.2rem); /* 4 cards + gaps + padding */
    overflow: hidden; /* 🔥 hide extra, GSAP moves them */
    padding-right: 0.4rem;
    background: linear-gradient(160deg, #1d4ed8, #0f265f);
  }
}

@media (max-width: 640px) {
  .atm-page {
    padding: 1rem;
  }
}

</style>
