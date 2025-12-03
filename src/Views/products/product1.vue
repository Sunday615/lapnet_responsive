<script setup>
import navbar from '../../components/miannavbar/main_navbar.vue';
import mainfooter from '../../components/footer/mainfooter/mainfooter.vue';
import homepagebutton from '../../components/button/homepagebutton.vue';
import tagproduct from '../../components/tagproduct/tagproduct.vue';
</script>

<template>
  <navbar
    title="ຜະລິດຕະພັນ ແລະ ການບໍລິການ"
    :breadcrumb="[
      'ໜ້າຫຼັກ',
      'ຜະລິດຕະພັນ ແລະ ການບໍລິການ',
      'ກວດຍອດເງິນຂ້າມທະນາຄານຜ່ານຕູ້ ATM'
    ]"
    background-image="/overlaynav/product/navigatorcontent-bg.png"
  />
  <div class="productdiscription">
    <div class="adjustmentcenter">
      <div class="description_left_container">
         <h3>ຜະລິດຕະພັນ ແລະ ການບໍລິການ</h3>
         <h1>ກວດຍອດເງິນຂ້າມ<br>ທະນາຄານຜ່ານຕູ້ ATM</h1>
         <p>ການກວດຍອດເງິນຂ້າມທະນາຄານຜ່ານຕູ້ ATM ແມ່ນນຳໃຊ້ລະບົບ
              ແລັບໃນການເຊື່ອມໂຍງຕູ້ເອທີເອັມຂອງແຕ່ລະທະນາຄານທີ່ເປັນສະມາຊິກ
              ຂອງບໍລິສັດລາວ ເນເຊີນນໍເພເມັ້ນ ເນັດເວີກ ໃຫ້ສາມາດໃຊ້ຟັງຊັ່ນການກວດ
              ຍອດເງິນຂ້າມທະນາຄານໄດ້.</p>
          <tagproduct label="ຜະລິດຕະພັນ ແລະ ການບໍລິການ"/>
      </div>
      <div class="description_right_container">
         <div class="topimg">
             <img src="/product/product1/pd1bg.webp" alt=""></img>
         </div>
         <div class="atmmockup">
            <img src="/product/product1/atmpd1.webp" alt="">
         </div>
      </div>
    
    </div>
  </div>

  <mainfooter/>
</template>


<style scoped>
.atmmockup img{
   width: 80%;
   position: relative;
   z-index: 1;
   left: -100px;
   bottom: -50px;
}
.description_right_container{
   width: 50%;
   height: 100%;
}
.topimg img {
      width: 30%;
   right: 40px;
   height:auto;
   object-fit: cover;
   border-radius: 10px;
   position: absolute;
   z-index: 0;

}
.description_left_container p{
   font-size: var(--fs-base);
}
.description_left_container h1{
   font-size:   var( --fs-xxxl);
   font-weight: bold;
   line-height: 1.2;
}
.description_left_container h3 {
   color: var(--color-second);
   font-weight: bold;
   font-size: var(--fs-md);
}
.description_right_container{

   width: 50%;
   height: 100%;
   border: 1px solid red;
}
.description_left_container{
   width: 50%;
   display: flex;
   align-items: start;
   justify-content: space-evenly;
   flex-direction: column;
   
   height: 100%;
   border: 1px solid blue;
}
.adjustmentcenter{
   width: 95%;
   height: 80%;
   display: flex;
   border: 1px solid salmon;

}
.productdiscription{
   width: 100%;
   height: 90vh;
   background-image: url(/product/product1/bgpd1-1.png);
   background-position: left;
   background-size: cover;
   background-repeat: no-repeat;
   border: 1px solid red;
   display: flex;
   justify-content: center;
   align-items: center;
}
</style>