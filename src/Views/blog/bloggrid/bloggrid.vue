<script setup>
import main_navbar from '../../../components/miannavbar/main_navbar.vue';
import mainfooter from '../../../components/footer/mainfooter/mainfooter.vue';
</script>
<template>

    <main_navbar title="ຂ່າວສານ ແລະ ກິດຈະກຳ" :breadcrumb="[
      'ໜ້າຫຼັກ',
      'ຂ່າວສານ ແລະ ກິດຈະກຳ',
  
   ]" background-image="/blog/bgnewsgrid.png" />
    <div class="boxmargin" style="width: 100%; height:10vh;"></div>
    <div class="gridblogcontainer">
            <div class="titlegridblog">
                <h1>ຂ່າວສານ ແລະ ກິດຈະກຳ</h1>
            </div>
    </div>
   <mainfooter/>
</template>


<style scoped>
.titlegridblog h1{
    font-size: var(--fs-hero);
    font-weight: bold;
    text-align: center;
     color: #00EEFF;
  background-image: linear-gradient(45deg, #00EEFF , #0c4cc0 72%, #0011a9 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

}
.titlegridblog{
    width: 100%;
    height: 13vh;
    border: 1px solid red;
}
.gridblogcontainer{
    width: 95%;
    height: 100vh;
    margin: 0 auto;
    border: 1px solid red;
}
@media (max-width:439px) {
    .titlegridblog h1{
        font-size: var(--fs-xxl);
    }
}
</style>