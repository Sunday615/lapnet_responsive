
<script setup>
import main_navbar from '../../../components/miannavbar/main_navbar.vue';
import mainfooter from '../../../components/footer/mainfooter/mainfooter.vue';
</script>


<template>
<main_navbar title="ໂຄງຮ່າງການຈັດຕັ້ງ" :breadcrumb="[
      'ໜ້າຫຼັກ',
      'ກ່ຽວກັບພວກເຮົາ',
      'ໂຄງຮ່າງການຈັດຕັ້ງ'
   ]" background-image="/aboutus/navigatormission-bg.png" />
<div class="navigatorbar"></div>
<div class="containercompanystructure">
  <img src="/aboutus/company/Companyconstruct-2.png" alt="">
</div>

   <mainfooter/>
</template>


<style scoped>
.navigatorbar{
  width: 90%;
  height: 15vh;
  border: 1px solid blue;
  margin: 0 auto;
  margin-top: 40px;
}
.containercompanystructure{
  width: 100%;
  height: auto;
  margin-top: 50px;
  border: 1px solid red;
}
</style>