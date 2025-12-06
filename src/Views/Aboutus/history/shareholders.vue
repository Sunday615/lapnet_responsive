<template>
  <section class="wrap">
    <header class="header">
      <div class="kicker">INFOGRAPHIC</div>
      <h1 class="title">Three.js 9 Boxes</h1>
      <p class="sub">Now visible: 9 boxes + adjustable spacing</p>
    </header>

    <div class="stage" ref="stageEl">
      <div class="canvasShell" ref="canvasShellEl"></div>

      <div class="overlay">
        <article
          v-for="(it, i) in items"
          :key="it.id"
          class="row"
          :class="i % 2 === 0 ? 'right' : 'left'"
          ref="rowEls"
          :style="{ top: `${layout[i].top}px` }"
        >
          <div class="callout">
            <div class="pill">
              <div class="pillHead">
                <div class="step">Step {{ String(i + 1).padStart(2, "0") }}</div>
                <div class="pillTitle">{{ it.title }}</div>
              </div>
              <div class="pillText">{{ it.text }}</div>
            </div>
            <div class="pointer" aria-hidden="true"></div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount, nextTick } from "vue";
import * as THREE from "three";
import gsap from "gsap";

const stageEl = ref(null);
const canvasShellEl = ref(null);
const rowEls = ref([]);

const items = [
  { id: 1, title: "Discover",  text: "Collect requirements, constraints, and success metrics." },
  { id: 2, title: "Define",    text: "Turn insights into a crisp scope and milestones." },
  { id: 3, title: "Design",    text: "Create system + UI structure with modern patterns." },
  { id: 4, title: "Build",     text: "Implement core flow with robust state handling." },
  { id: 5, title: "Integrate", text: "Connect APIs, caching, and error boundaries." },
  { id: 6, title: "Optimize",  text: "Improve performance, bundle size, and responsiveness." },
  { id: 7, title: "Test",      text: "Validate behavior with unit + e2e coverage." },
  { id: 8, title: "Launch",    text: "Ship with monitoring, logs, and rollback plan." },
  { id: 9, title: "Iterate",   text: "Use feedback loops to evolve the product." },
];

const BOX_COUNT = 9;

// ✅ ปรับระยะห่าง “ระหว่างกล่อง” ตรงนี้
const SPACING_Y = 1.25; // เดิม ~0.85 -> เพิ่มให้ห่างขึ้นชัด ๆ
const BOX_SIZE = { x: 1.7, y: 1.12, z: 1.05 };

// ✅ ขอบบน/ล่าง เผื่อพื้นที่ในเฟรม
const PADDING_WORLD = 0.8;

const layout = reactive(Array.from({ length: BOX_COUNT }, () => ({ top: 0 })));

let renderer, scene, camera;
let rootGroup;
let cubes = [];
let raf = 0;
let floatTL;
let isDestroyed = false;

function makeCanvasTexture(letter, accent = "#a78bfa") {
  const c = document.createElement("canvas");
  c.width = 256;
  c.height = 256;
  const ctx = c.getContext("2d");

  const g = ctx.createLinearGradient(20, 20, 240, 240);
  g.addColorStop(0, "#ff4bb8");
  g.addColorStop(0.55, accent);
  g.addColorStop(1, "#22d3ee");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 256, 256);

  ctx.globalAlpha = 0.12;
  ctx.fillStyle = "#ffffff";
  for (let i = 0; i < 240; i++) {
    ctx.beginPath();
    ctx.arc(Math.random() * 256, Math.random() * 256, Math.random() * 1.5, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;

  ctx.fillStyle = "rgba(255,255,255,0.93)";
  ctx.font = "900 120px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.shadowColor = "rgba(0,0,0,0.35)";
  ctx.shadowBlur = 18;
  ctx.shadowOffsetY = 8;
  ctx.fillText(letter, 128, 140);

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}

function setupScene() {
  const shell = canvasShellEl.value;
  const w = shell.clientWidth;
  const h = shell.clientHeight;

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(w, h);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  shell.appendChild(renderer.domElement);

  scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x0b1020, 10, 26);

  // ✅ กล้องให้เห็นสูง ๆ ครอบ 9 กล่องแน่นอน
  camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 400);
  camera.position.set(0, 2.8, 10.8);

  const hemi = new THREE.HemisphereLight(0xffffff, 0x111827, 1.05);
  scene.add(hemi);

  const dir = new THREE.DirectionalLight(0xffffff, 1.2);
  dir.position.set(5, 7, 6);
  scene.add(dir);

  rootGroup = new THREE.Group();
  rootGroup.rotation.x = -0.18;
  rootGroup.rotation.y = 0.28;
  scene.add(rootGroup);

  // Soft ground shadow
  const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(14, 22),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.16 })
  );
  plane.rotation.x = -Math.PI / 2;
  plane.position.y = -6.5;
  plane.position.z = -1.0;
  rootGroup.add(plane);
}

function buildCubes() {
  cubes = [];

  // ✅ วางกล่องให้ “กึ่งกลาง” อยู่กลาง stack
  const totalHeight = (BOX_COUNT - 1) * SPACING_Y;
  const topY = totalHeight / 2;

  for (let i = 0; i < BOX_COUNT; i++) {
    const letter = String.fromCharCode("A".charCodeAt(0) + i);
    const tex = makeCanvasTexture(letter, i % 2 ? "#8b5cf6" : "#fb7185");

    const mats = [
      new THREE.MeshStandardMaterial({ color: 0x1f2937, metalness: 0.45, roughness: 0.35 }),
      new THREE.MeshStandardMaterial({ color: 0x111827, metalness: 0.35, roughness: 0.5 }),
      new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.25, roughness: 0.6 }),
      new THREE.MeshStandardMaterial({ color: 0x0b1224, metalness: 0.2, roughness: 0.85 }),
      new THREE.MeshStandardMaterial({ map: tex, metalness: 0.25, roughness: 0.22 }),
      new THREE.MeshStandardMaterial({ color: 0x0b1020, metalness: 0.2, roughness: 0.75 }),
    ];

    const geo = new THREE.BoxGeometry(BOX_SIZE.x, BOX_SIZE.y, BOX_SIZE.z);
    const mesh = new THREE.Mesh(geo, mats);

    // ✅ ตอนนี้จะไม่หลุดเฟรม: y อยู่ช่วง [-H/2, +H/2]
    mesh.position.set(0, topY - i * SPACING_Y, 0);

    // สลับหมุนเล็กน้อยให้ดูมีมิติ
    mesh.rotation.y = 0.14 * (i % 2 ? -1 : 1);

    const edges = new THREE.EdgesGeometry(geo);
    const line = new THREE.LineSegments(
      edges,
      new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.12 })
    );
    mesh.add(line);

    rootGroup.add(mesh);
    cubes.push(mesh);
  }

  // ✅ Fit กล้องให้เห็นทั้งหมดครอบ 9 กล่อง
  fitCameraToStack();

  // GSAP reveal + float
  const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

  cubes.forEach((m) => {
    m.scale.set(0.86, 0.86, 0.86);
    m.position.x += 0.35;
  });

  gsap.timeline({ defaults: { ease: "power3.out" } })
    .to(cubes.map((m) => m.scale), {
      x: 1, y: 1, z: 1,
      duration: prefersReduced ? 0.01 : 0.75,
      stagger: prefersReduced ? 0 : 0.07,
    }, 0)
    .to(cubes.map((m) => m.position), {
      x: 0,
      duration: prefersReduced ? 0.01 : 0.75,
      stagger: prefersReduced ? 0 : 0.07,
    }, 0);

  if (!prefersReduced) {
    floatTL?.kill();
    floatTL = gsap.timeline({ repeat: -1, yoyo: true, defaults: { ease: "sine.inOut" } });
    cubes.forEach((m, i) => {
      floatTL.to(m.position, { y: m.position.y + 0.10, duration: 1.9 + (i % 3) * 0.15 }, i * 0.05);
      floatTL.to(m.rotation, { y: m.rotation.y + (i % 2 ? -0.09 : 0.09), duration: 2.2 + (i % 4) * 0.1 }, i * 0.05);
    });
  }
}

function fitCameraToStack() {
  // คำนวณขอบเขตของกล่องทั้งหมดใน world
  const box = new THREE.Box3();
  cubes.forEach((m) => box.expandByObject(m));

  // เพิ่ม padding
  box.min.y -= PADDING_WORLD;
  box.max.y += PADDING_WORLD;
  box.min.x -= 0.6;
  box.max.x += 0.6;
  box.min.z -= 0.6;
  box.max.z += 0.6;

  const size = new THREE.Vector3();
  const center = new THREE.Vector3();
  box.getSize(size);
  box.getCenter(center);

  // ให้ stack อยู่กลาง
  rootGroup.position.y = -center.y;

  // ปรับระยะกล้องให้เห็น “ความสูง” ทั้งหมด
  const shell = canvasShellEl.value;
  const w = shell.clientWidth;
  const h = shell.clientHeight;
  const aspect = w / h;

  const fov = THREE.MathUtils.degToRad(camera.fov);
  const visibleHeight = size.y;
  const distByHeight = (visibleHeight / 2) / Math.tan(fov / 2);

  // เผื่อด้านกว้างด้วย
  const visibleWidth = size.x;
  const distByWidth = ((visibleWidth / 2) / Math.tan(fov / 2)) / aspect;

  const dist = Math.max(distByHeight, distByWidth);

  camera.position.z = dist + 6.2; // เพิ่มความลึกให้ดู 3D
  camera.position.y = 2.8;        // ยกขึ้นนิดให้ดูแนว isometric
  camera.lookAt(0, 0, 0);
}

function render() {
  if (isDestroyed) return;
  renderer.render(scene, camera);
  raf = requestAnimationFrame(render);
}

function syncOverlayToCubes() {
  if (!renderer || !camera) return;

  const shell = canvasShellEl.value;
  const rect = shell.getBoundingClientRect();
  const w = rect.width;
  const h = rect.height;

  cubes.forEach((m, i) => {
    const v = m.getWorldPosition(new THREE.Vector3());
    v.project(camera);
    const sy = (-v.y * 0.5 + 0.5) * h;
    layout[i].top = sy - 28;
  });
}

function resize() {
  if (!renderer || !camera) return;
  const shell = canvasShellEl.value;
  const w = shell.clientWidth;
  const h = shell.clientHeight;
  renderer.setSize(w, h);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  fitCameraToStack();
  syncOverlayToCubes();
}

function bindPointerTilt() {
  const stage = stageEl.value;

  const onMove = (e) => {
    const r = stage.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - 0.5;
    const ny = (e.clientY - r.top) / r.height - 0.5;

    gsap.to(rootGroup.rotation, {
      y: 0.28 + nx * 0.55,
      x: -0.18 + -ny * 0.38,
      duration: 0.35,
      ease: "power2.out",
    });

    gsap.to(camera.position, {
      x: nx * 0.55,
      y: 2.8 + -ny * 0.35,
      duration: 0.45,
      ease: "power2.out",
      onUpdate: () => camera.lookAt(0, 0, 0),
    });
  };

  const onLeave = () => {
    gsap.to(rootGroup.rotation, { x: -0.18, y: 0.28, duration: 0.6, ease: "power3.out" });
    gsap.to(camera.position, {
      x: 0,
      y: 2.8,
      duration: 0.8,
      ease: "power3.out",
      onUpdate: () => camera.lookAt(0, 0, 0),
    });
  };

  stage.addEventListener("mousemove", onMove, { passive: true });
  stage.addEventListener("mouseleave", onLeave, { passive: true });

  return () => {
    stage.removeEventListener("mousemove", onMove);
    stage.removeEventListener("mouseleave", onLeave);
  };
}

let unbindTilt = null;

onMounted(async () => {
  await nextTick();

  setupScene();
  buildCubes();
  render();

  syncOverlayToCubes();
  unbindTilt = bindPointerTilt();

  const ro = new ResizeObserver(() => resize());
  ro.observe(canvasShellEl.value);

  const onScroll = () => syncOverlayToCubes();
  window.addEventListener("scroll", onScroll, { passive: true });

  stageEl.value.__ro = ro;
  stageEl.value.__onScroll = onScroll;
});

onBeforeUnmount(() => {
  isDestroyed = true;
  if (unbindTilt) unbindTilt();

  const ro = stageEl.value?.__ro;
  if (ro) ro.disconnect();

  const onScroll = stageEl.value?.__onScroll;
  if (onScroll) window.removeEventListener("scroll", onScroll);

  if (raf) cancelAnimationFrame(raf);
  floatTL?.kill();

  try {
    cubes.forEach((m) => {
      m.geometry?.dispose?.();
      if (Array.isArray(m.material)) m.material.forEach((mat) => mat.dispose?.());
      else m.material?.dispose?.();
      m.traverse((child) => {
        if (child.isLineSegments) {
          child.geometry?.dispose?.();
          child.material?.dispose?.();
        }
      });
    });

    renderer?.dispose?.();
    if (renderer?.domElement?.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
  } catch (_) {}
});
</script>

<style scoped>
.wrap{
  min-height: 100vh;
  padding: clamp(18px, 3vw, 40px);
  background:
    radial-gradient(1200px 600px at 20% 10%, rgba(255, 64, 160, .18), transparent 60%),
    radial-gradient(900px 700px at 80% 30%, rgba(124, 58, 237, .20), transparent 60%),
    radial-gradient(900px 700px at 60% 90%, rgba(56, 189, 248, .12), transparent 60%),
    #0b1020;
  color: rgba(255,255,255,.92);
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial;
}

.header{ max-width: 1080px; margin: 0 auto 18px; }
.kicker{ font-weight: 800; letter-spacing: .22em; font-size: 12px; color: rgba(255,255,255,.72); }
.title{ margin: 6px 0 6px; font-size: clamp(26px, 3.2vw, 42px); line-height: 1.05; }
.sub{ margin: 0; color: rgba(255,255,255,.7); }

.stage{
  max-width: 1080px;
  margin: 16px auto 0;
  border-radius: 28px;
  padding: clamp(14px, 2.4vw, 24px);
  background: rgba(255,255,255,.04);
  box-shadow:
    0 24px 80px rgba(0,0,0,.45),
    inset 0 1px 0 rgba(255,255,255,.07);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.canvasShell{
  width: 100%;
  height: 980px; /* ✅ เพิ่มสูงให้แน่ใจว่า 9 กล่องไม่โดนตัด */
  border-radius: 22px;
  position: relative;
}

@media (max-width: 860px){
  .canvasShell{ height: 1100px; }
}

.overlay{
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.row{
  position: absolute;
  left: 0; right: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 18px;
}

.row.left{ justify-content: flex-start; }

.callout{
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: min(520px, 100%);
  gap: 10px;
}

.row.left .callout{ flex-direction: row-reverse; justify-content: flex-start; }

.pill{
  width: min(420px, 100%);
  padding: 14px 16px;
  border-radius: 999px;
  background: rgba(255,255,255,.06);
  box-shadow:
    0 18px 60px rgba(0,0,0,.35),
    inset 0 1px 0 rgba(255,255,255,.08);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,.08);
}

.pillHead{ display: flex; align-items: baseline; gap: 10px; margin-bottom: 4px; }
.step{ font-size: 12px; letter-spacing: .12em; text-transform: uppercase; color: rgba(255,255,255,.6); }
.pillTitle{
  font-weight: 900; font-size: 16px;
  background: linear-gradient(90deg, #ff4bb8, #8b5cf6, #22d3ee);
  -webkit-background-clip: text; background-clip: text; color: transparent;
}
.pillText{ font-size: 13px; line-height: 1.35; color: rgba(255,255,255,.72); }

.pointer{
  width: 0; height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  filter: drop-shadow(0 10px 18px rgba(0,0,0,.35));
}
.row.right .pointer{ border-left: 16px solid rgba(139, 92, 246, .85); }
.row.left  .pointer{ border-right: 16px solid rgba(255, 75, 184, .85); }

@media (max-width: 860px){
  .row{ padding: 0 12px; }
  .pointer{ display: none; }
}
</style>
