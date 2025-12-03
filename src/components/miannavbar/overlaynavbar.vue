<script setup>
import { computed } from 'vue'

const props = defineProps({
  // Main title at the top
  title: {
    type: String,
    required: true
  },
  // Breadcrumb / navigator path
  // Example: ['ໜ້າຫຼັກ', 'ຜະລິດຕະພັນ...', 'ກວດຍອດເງິນ...']
  breadcrumb: {
    type: Array,
    default: () => []
  },
  // Background image url
  backgroundImage: {
    type: String,
    default: '/overlaynav/product/navigatorcontent-bg.png'
  }
})

const containerStyle = computed(() => ({
  backgroundImage: `url(${props.backgroundImage})`
}))
</script>

<template>
  <div class="containernavbaroverlay" :style="containerStyle">
    <div class="titlecontainer">
      <h1>{{ title }}</h1>
    </div>

    <div v-if="breadcrumb.length" class="navigatorpath">
      <template v-for="(item, index) in breadcrumb" :key="index">
        <!-- text -->
        <p>{{ item }}</p>
        <!-- chevron, except after last item -->
        <i
          v-if="index !== breadcrumb.length - 1"
          class="fa-solid fa-chevron-right"
        ></i>
      </template>
    </div>

    <div class="paddingbox" style="width: 100%; height: 50px"></div>
  </div>
</template>

<style scoped>
.titlecontainer h1 {
  color: #fff;
  font-weight: bold;
  font-size: var(--fs-xxl);
}

.navigatorpath p {
  font-size: var(--fs-base);
}

.navigatorpath {
  color: #fff;
}

.navigatorpath i {
  font-size: var(--fs-base);
  padding-left: 40px;
  padding-right: 40px;
}

.navigatorpath {
  width: 100%;
  height: 25%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.titlecontainer {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25%;

}

.containernavbaroverlay {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
  height: 540px;
  
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

@media (max-width: 459px){
  .titlecontainer h1{
    font-size: 2rem;
  }
}
</style>
