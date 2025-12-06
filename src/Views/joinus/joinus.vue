<script setup>
import main_navbar from '../../components/miannavbar/main_navbar.vue';
import mainfooter from '../../components/footer/mainfooter/mainfooter.vue';
</script>

<template>
 <main_navbar
    title="ຮ່ວມງານກັບເຮົາ"
    :breadcrumb="[
      'ໜ້າຫຼັກ',
      'ຮ່ວມງານກັບເຮົາ',

    ]"
    background-image="/joinus/navigatorjoinus.png"
  />

    <div class="joiunus_whyuscontainer"></div>

  <mainfooter/>

</template>


<style scoped>

.joiunus_whyuscontainer{
    width: 100%;
    height: 100vh;
    border: 1px solid red;
}

</style>