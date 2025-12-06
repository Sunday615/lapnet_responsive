<script setup> 
import main_navbar from '../../../components/miannavbar/main_navbar.vue';
import mainfooter from '../../../components/footer/mainfooter/mainfooter.vue';
</script>

<template>
    <main_navbar title="ສະພາຜູ້ບໍລິຫານ" :breadcrumb="[
      'ໜ້າຫຼັກ',
      'ກ່ຽວກັບພວກເຮົາ',
      'ສະພາຜູ້ບໍລິຫານ'
   ]" background-image="/aboutus/navigatormission-bg.png" />
   <div class="board_director"></div>
    <mainfooter/>
</template>


<style scoped>

.board_director{
    width: 100%;
    height: 100vh;
    border: 1px solid red;
}
</style>