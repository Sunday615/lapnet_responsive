<template>
  <section class="hero" ref="heroRef">
    <!-- Floating orbs background -->
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>
    <div class="orb orb-3"></div>

    <!-- Top bar: logo + company name -->
    <header class="hero-top">
      <div class="hero-brand">
        <!-- Replace src with your logo -->
        <img
          src=""
          alt="SPACE AI Logo"
          class="hero-logo"
        />
        <span class="hero-brand-name">SPACE AI</span>
      </div>

      <nav class="hero-nav">
        <span class="nav-pill">Vision</span>
        <span class="nav-pill">Mission</span>
        <span class="nav-pill nav-pill--primary">Get in touch</span>
      </nav>
    </header>

    <!-- Main content -->
    <div class="hero-body">
      <!-- Left: main text -->
      <div class="hero-text">
        <p class="hero-kicker">Future-Ready Intelligence</p>
        <h1 class="hero-title">
          Designing tomorrow’s
          <span class="hero-title-accent">AI experiences</span>
          today.
        </h1>
        <p class="hero-description">
          We merge strategy, design, and engineering to build AI systems
          that feel intuitive, adaptive, and deeply human.
        </p>

        <div class="hero-actions">
          <button class="btn-primary">
            Our Vision &amp; Mission
          </button>
          <button class="btn-ghost">
            Explore Products
          </button>
        </div>
      </div>

      <!-- Right: futuristic stacked cards -->
      <div class="hero-grid">
        <!-- Vision Card -->
        <article class="info-card info-card--vision hero-card">
          <div class="info-card-tag">Vision</div>
          <div class="info-card-image-wrap">
            <img
              class="info-card-image"
              src="https://images.unsplash.com/photo-1527443224154-d3017e31d405?auto=format&fit=crop&w=900&q=80"
              alt="Futuristic city vision"
            />
          </div>
          <div class="info-card-body">
            <h3 class="info-card-title">A connected intelligent world</h3>
            <p class="info-card-text">
              We envision a world where AI augments human creativity,
              orchestrating seamless experiences across every touchpoint.
            </p>
          </div>
        </article>

        <!-- Mission Card -->
        <article class="info-card info-card--mission hero-card">
          <div class="info-card-tag info-card-tag--secondary">Mission</div>
          <div class="info-card-image-wrap">
            <img
              class="info-card-image"
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=900&q=80"
              alt="Team collaborating with AI"
            />
          </div>
          <div class="info-card-body">
            <h3 class="info-card-title">Build real, usable intelligence</h3>
            <p class="info-card-text">
              Our mission is to ship robust AI products that solve concrete
              problems while staying transparent, controllable, and ethical.
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const heroRef = ref(null)

onMounted(() => {
  const root = heroRef.value

  const timeline = gsap.timeline({
    defaults: { duration: 0.9, ease: 'power3.out' }
  })

  // Entrance animation
  timeline
    .from(root.querySelector('.hero-top'), {
      opacity: 0,
      y: -30
    })
    .from(
      root.querySelector('.hero-kicker'),
      {
        opacity: 0,
        y: 20
      },
      '-=0.4'
    )
    .from(
      root.querySelector('.hero-title'),
      {
        opacity: 0,
        y: 40
      },
      '-=0.6'
    )
    .from(
      root.querySelector('.hero-description'),
      {
        opacity: 0,
        y: 30
      },
      '-=0.6'
    )
    .from(
      root.querySelectorAll('.hero-actions button'),
      {
        opacity: 0,
        y: 20,
        stagger: 0.1
      },
      '-=0.5'
    )
    .from(
      root.querySelectorAll('.hero-card'),
      {
        opacity: 0,
        y: 60,
        rotateX: -10,
        stagger: 0.18
      },
      '-=0.5'
    )

  // Looping subtle float on cards
  gsap.to(root.querySelectorAll('.hero-card'), {
    y: -10,
    repeat: -1,
    yoyo: true,
    duration: 3.5,
    ease: 'sine.inOut',
    stagger: {
      each: 0.7,
      from: 'center'
    }
  })

  // Orbs gentle motion
  gsap.to(root.querySelectorAll('.orb'), {
    xPercent: 10,
    yPercent: -8,
    repeat: -1,
    yoyo: true,
    duration: 10,
    ease: 'sine.inOut',
    stagger: {
      each: 2
    }
  })
})
</script>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  padding: 1.8rem 6vw 2.4rem;
  box-sizing: border-box;
  overflow: hidden;

  /* Requested base gradient */
  background: linear-gradient(
    95deg,
    rgba(0, 18, 61, 1) 0%,
    rgba(0, 51, 171, 1) 37%
  );
  color: #f8fbff;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* Glow overlay */
.hero::before {
  content: '';
  position: absolute;
  inset: -25%;
  background:
    radial-gradient(circle at 10% 0%, rgba(0, 255, 255, 0.25), transparent 55%),
    radial-gradient(circle at 120% 80%, rgba(104, 212, 255, 0.35), transparent 55%);
  mix-blend-mode: screen;
  opacity: 0.6;
  pointer-events: none;
}

/* Floating neon orbs */
.orb {
  position: absolute;
  border-radius: 999px;
  filter: blur(3px);
  opacity: 0.7;
  pointer-events: none;
}

.orb-1 {
  width: 220px;
  height: 220px;
  top: 8%;
  right: 10%;
  background: radial-gradient(circle, rgba(0, 255, 255, 0.5), transparent 70%);
}

.orb-2 {
  width: 160px;
  height: 160px;
  bottom: -5%;
  right: 30%;
  background: radial-gradient(circle, rgba(90, 180, 255, 0.55), transparent 70%);
}

.orb-3 {
  width: 180px;
  height: 180px;
  top: 35%;
  left: -5%;
  background: radial-gradient(circle, rgba(0, 150, 255, 0.45), transparent 70%);
}

.hero > * {
  position: relative;
  z-index: 1;
}

/* Top bar */
.hero-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.hero-brand {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.45rem 1.1rem;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(196, 220, 255, 0.25);
  backdrop-filter: blur(18px);
}

.hero-logo {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.hero-brand-name {
  font-size: 0.85rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 600;
  color: #e4f0ff;
}

.hero-nav {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.nav-pill {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  padding: 0.45rem 0.9rem;
  border-radius: 999px;
  border: 1px solid rgba(192, 213, 255, 0.4);
  background: rgba(7, 22, 74, 0.4);
  backdrop-filter: blur(10px);
  opacity: 0.9;
}

.nav-pill--primary {
  border-color: rgba(0, 255, 255, 0.9);
  background: linear-gradient(135deg, rgba(0, 255, 255, 0.12), rgba(0, 163, 255, 0.2));
}

/* Body */
.hero-body {
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1.1fr);
  gap: 3rem;
  align-items: center;
}

.hero-text {
  max-width: 560px;
}

.hero-kicker {
  font-size: 0.8rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
  color: #a9d2ff;
  opacity: 0.9;
}

.hero-title {
  font-size: clamp(2.4rem, 3.3vw + 1.6rem, 3.5rem);
  line-height: 1.08;
  margin-bottom: 1rem;
}

.hero-title-accent {
  display: inline-block;
  background: linear-gradient(120deg, #33e7ff, #ffffff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-description {
  font-size: 0.98rem;
  line-height: 1.8;
  max-width: 34rem;
  color: #e1ecff;
  opacity: 0.92;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-top: 1.8rem;
}

.btn-primary,
.btn-ghost {
  padding: 0.8rem 1.6rem;
  border-radius: 999px;
  font-size: 0.9rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 600;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease,
    color 0.18s ease, border-color 0.18s ease;
}

.btn-primary {
  background: linear-gradient(135deg, #00c9ff, #4ad0ff);
  color: #001238;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.45);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.6);
}

.btn-ghost {
  background: transparent;
  border: 1px solid rgba(191, 214, 255, 0.6);
  color: #e9f2ff;
}

.btn-ghost:hover {
  background: rgba(9, 30, 92, 0.7);
}

/* Right cards grid */
.hero-grid {
  position: relative;
  display: grid;
  gap: 1.4rem;
  align-items: start;
}

.info-card {
  position: relative;
  background: radial-gradient(circle at 0 0, rgba(255, 255, 255, 0.06), transparent 60%),
    rgba(4, 22, 80, 0.9);
  border-radius: 1.4rem;
  overflow: hidden;
  border: 1px solid rgba(194, 219, 255, 0.4);
  backdrop-filter: blur(22px);
  box-shadow: 0 26px 70px rgba(0, 0, 0, 0.6);
}

.info-card--vision {
  transform-origin: top left;
}

.info-card--mission {
  margin-left: 16%;
  margin-top: -6%;
  transform-origin: center right;
}

.info-card-tag {
  position: absolute;
  top: 0.85rem;
  left: 0.9rem;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(169, 210, 255, 0.6);
  color: #e8f3ff;
  z-index: 2;
}

.info-card-tag--secondary {
  border-color: rgba(0, 255, 255, 0.9);
}

.info-card-image-wrap {
  position: relative;
  overflow: hidden;
  max-height: 190px;
}

.info-card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transform: scale(1.08);
  transition: transform 1s ease-out;
}

.info-card:hover .info-card-image {
  transform: scale(1.16);
}

.info-card-body {
  padding: 1.1rem 1.3rem 1.3rem;
}

.info-card-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #f0f4ff;
}

.info-card-text {
  font-size: 0.9rem;
  line-height: 1.7;
  color: #d4e5ff;
  opacity: 0.95;
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-body {
    grid-template-columns: minmax(0, 1fr);
    gap: 2.4rem;
    align-items: flex-start;
  }

  .hero-grid {
    max-width: 460px;
    margin-inline: auto;
  }

  .info-card--vision {
    transform: none;
  }

  .info-card--mission {
    margin-left: 10%;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 1.4rem 1.3rem 2.1rem;
  }

  .hero-top {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.9rem;
  }

  .hero-nav {
    width: 100%;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .hero-body {
    gap: 2rem;
  }

  .info-card--mission {
    margin-left: 5%;
    margin-top: -4%;
  }
}

@media (max-width: 540px) {
  .hero-grid {
    max-width: 100%;
  }

  .info-card--mission {
    margin-left: 0;
    margin-top: 1rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .btn-primary,
  .btn-ghost {
    width: 100%;
    justify-content: center;
  }
}
</style>
