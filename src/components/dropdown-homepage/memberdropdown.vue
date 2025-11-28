<template>
  <nav class="nav">
    <div
      class="dropdown"
      ref="dropdownRef"
      @mouseenter="openDropdown"
      @mouseleave="closeDropdown"
    >
      <button class="dropdown-toggle" type="button">
        <span class="dropdown-label">ສະມາຊິກ</span>
        <span class="dropdown-arrow">
          <!-- 箭头图标 -->
          <svg
            ref="arrowRef"
            viewBox="0 0 12 12"
            width="12"
            height="12"
            aria-hidden="true"
          >
            <path
              d="M3 4.5L6 7.5L9 4.5"
              fill="none"
              stroke="currentColor"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </button>

      <div class="dropdown-menu" ref="menuRef">
        <div class="dropdown-item">Landing Pages</div>
        <div class="dropdown-item">Dashboards</div>
        <div class="dropdown-item">Design Systems</div>
      </div>
    </div>

 
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import gsap from "gsap";

const dropdownRef = ref(null);
const menuRef = ref(null);
const arrowRef = ref(null);

const isOpen = ref(false);
const tl = ref(null);

onMounted(() => {
  if (!menuRef.value || !arrowRef.value) return;

  // 初始状态：隐藏 + 上移一点
  gsap.set(menuRef.value, {
    opacity: 0,
    y: -6,
    pointerEvents: "none",
  });

  tl.value = gsap
    .timeline({ paused: true })
    // 下拉内容
    .to(
      menuRef.value,
      {
        duration: 0.26,
        opacity: 1,
        y: 0,
        ease: "power2.out",
        onStart: () => {
          menuRef.value.style.pointerEvents = "auto";
        },
      },
      0
    )
    // 箭头旋转
    .to(
      arrowRef.value,
      {
        duration: 0.22,
        rotation: 90,
        ease: "power2.out",
        transformOrigin: "50% 50%",
      },
      0
    );
});

onBeforeUnmount(() => {
  if (tl.value) {
    tl.value.kill();
    tl.value = null;
  }
});

const openDropdown = () => {
  if (!tl.value || isOpen.value) return;
  isOpen.value = true;
  tl.value.play();
};

const closeDropdown = () => {
  if (!tl.value || !isOpen.value) return;
  isOpen.value = false;

  tl.value.reverse();
  tl.value.eventCallback("onReverseComplete", () => {
    if (menuRef.value) {
      menuRef.value.style.pointerEvents = "none";
    }
    tl.value.eventCallback("onReverseComplete", null);
  });
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.nav {
  display: flex;
  gap: 32px;
  font-size: 15px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
       font-family: "Noto Sans Lao", sans-serif;
}

/* 外层容器 */
.dropdown {
  position: relative;
}

/* 触发器：只有文字 + 箭头，没有背景 */
.dropdown-toggle {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  padding: 6px 2px;
  border: none;
  outline: none;
  background: transparent; /* 无背景 */
  font: inherit;
  color: #111827;
  border-bottom: 1px solid transparent;
  transition:
    border-color 0.18s ease,
    transform 0.18s ease,
    color 0.18s ease;
}

.dropdown-toggle:hover {
  border-bottom-color: #f6f6f6;
  transform: translateY(-1px);
}

.dropdown-label {
  font-weight: 500;
 font-size: 1.2rem;
  color: #fff;
}

.dropdown-arrow {
  width: 12px;
  height: 12px;
  display: inline-flex;
  align-items: center;
  color: #fff;
  justify-content: center;
}

/* 下拉菜单（同样无背景，只是文字列表） */
.dropdown-menu {
  position: absolute;
  top: 120%;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-top: 10px;
  /* pointerEvents、opacity、transform 由 GSAP 控制 */
}

.dropdown-item {
  font-size: 1rem;
  color: #fff;
  cursor: pointer;
  padding: 2px 0;
  white-space: nowrap;
  border-bottom: 1px solid transparent;
  transition:
    color 0.18s ease,
    border-color 0.18s ease,
    transform 0.18s ease;
}

.dropdown-item:hover {
  
  border-bottom-color: #f6f6f6;
  transform: translateY(-1px);
}
@media (max-width : 1350px)  {
    .dropdown-label{
        font-size: 1rem;
    }
    
}

</style>
