<script setup> 
import main_navbar from '../../../components/miannavbar/main_navbar.vue';
import mainfooter from '../../../components/footer/mainfooter/mainfooter.vue';
</script>

<template>
    <main_navbar title="ພາລະບົດບາດ" :breadcrumb="[
      'ໜ້າຫຼັກ',
      'ກ່ຽວກັບພວກເຮົາ',
      'ພາລະບົດບາດ'
   ]" background-image="/aboutus/navigatormission-bg.png" />
   <div class="rolecontainer"></div>
    <mainfooter/>
</template>


<style scoped>

.rolecontainer{
    width: 100%;
    height: 100vh;
    border: 1px solid red;
}
</style>