<script setup>
import navbar from '../../components/miannavbar/main_navbar.vue';
import mainfooter from '../../components/footer/mainfooter/mainfooter.vue';
import homepagebutton from '../../components/button/homepagebutton.vue';
import videobackgroundhomepage from '../../components/videobackground/productbackgroundvideo.vue'
import tagproduct from '../../components/tagproduct/tagproduct.vue';
import product5_footerlogomember from '../../components/footer/logomemberfooter/product5_footerlogomember.vue';
import product5tech from '../techbenetfit/product5tech.vue';

const heroVideo = '/videos/productvdo-background.mp4'

const memberLogos = [
  {
    src: "/logoallmember/circle_scale/BCEL.png",
    alt: "Space AI",
  },
  {
    src: "/logoallmember/circle_scale/LDB.PNG",
    alt: "Partner A",
  },
  {
     src: "/logoallmember/circle_scale/APBB.PNG",
    alt: "Partner B",
  },
  {
    src: "/logoallmember/circle_scale/JDB.png",
    alt: "Client X",
  },
  {
     src: "/logoallmember/circle_scale/Maruhan.png",
    alt: "Client Y",
  },
  {
     src: "/logoallmember/circle_scale/lvb.PNG",
    alt: "Client Z",
  },
  {
     src: "/logoallmember/circle_scale/ICBC.png",
    alt: "Client Z",
  },
  {
     src: "/logoallmember/circle_scale/BOC.png",
    alt: "Client Z",
  },
  {
     src: "/logoallmember/circle_scale/VTB.png",
    alt: "Client Z",
  },
  {
     src: "/logoallmember/circle_scale/IB.png",
    alt: "Client Z",
  },
  {
     src: "/logoallmember/circle_scale/ACLB.png",
    alt: "Client Z",
  },
  {
     src: "/logoallmember/circle_scale/BIC.png",
    alt: "Client Z",
  },
  {
     src: "/logoallmember/circle_scale/SACOM.PNG",
    alt: "Client Z",
  },
  {
     src: "/logoallmember/circle_scale/STB.png",
    alt: "Client Z",
  },
  {
     src: "/logoallmember/circle_scale/Kasikorn.png",
    alt: "Client Z",
  },
  {
     src: "/logoallmember/circle_scale/BFL.png",
    alt: "Client Z",
  },
  {
     src: "/logoallmember/circle_scale/PSVB.png",
    alt: "Client Z",
  },
  {
     src: "/logoallmember/circle_scale/mb.png",
    alt: "Client Z",
  },
  // ...continue until you have 16 logos, all with their own paths
];
</script>

<template>
  <navbar
    title="ຜະລິດຕະພັນ ແລະ ການບໍລິການ"
    :breadcrumb="[
      'ໜ້າຫຼັກ',
      'ຜະລິດຕະພັນ ແລະ ການບໍລິການ',
      'ການຊໍາລະເງິນຂ້າມທະນາຄານຜ່ານ QR'
    ]"
    background-image="/overlaynav/product/navigatorcontent-bg.png"
  />
  <div class="productdiscription">
    <div class="adjustmentcenter">
      <div class="description_left_container">
      
         <h1>ການຊໍາລະເງິນ<br>ຂ້າມທະນາຄານຜ່ານ QR</h1>
         <p>ການຊໍາລະຂ້າມທະນາຄານຜ່ານ LAPNet QRPay ໂດຍນຳໃຊ້ລະບົບ LMPS ໃນການເຊື່ອມໂຍງຜ່ານ Applications ຂອງແຕ່ລະທະນາຄານທີ່ເປັນສະມາຊິກຂອງບໍລິສັດ LAPNet ໃຫ້ສາມາດນຳໃຊ້ຟັງຊັ່ນການດຳເນີນທຸລະກຳຊໍາລະຜ່ານ QR ຂອງທະນາຄານອື່ນໄດ້.</p>
          <tagproduct label="ຜະລິດຕະພັນ ແລະ ການບໍລິການ"/>
      </div>
      <div class="description_right_container">
         <div class="topimg">
             <img src="/product/product5/toppd5.png" alt=""></img>
         </div>
         <div class="atmmockup">
            <img src="/product/product5/ip16promax.webp" alt="">
         </div>
      </div>
    
    </div>
  </div>
     <div class="benetfix">
         <product5tech/>
     </div>
<div class="footermemberproduct1">

  <product5_footerlogomember :subtitle="`   ການຊໍາລະຂ້າມທະນາຄານຜ່ານ LAPNet QRPay ໂດຍນຳໃຊ້ລະບົບ LMPS ໃນການເຊື່ອມໂຍງຜ່ານ Applications ຂອງແຕ່ລະທະນາຄານທີ່ເປັນສະມາຊິກຂອງບໍລິສັດ LAPNet ໃຫ້ສາມາດນຳໃຊ້ຟັງຊັ່ນການດຳເນີນທຸລະກຳຊໍາລະຜ່ານ QR ຂອງທະນາຄານອື່ນໄດ້.`" :features="[
         '  ການຊໍາລະຂ້າມທະນາຄານຜ່ານ LAPNet QRPay ໂດຍນຳໃຊ້ລະບົບ LMPS',
    
      ]" :logos="memberLogos" />
   </div>
  <mainfooter/>
</template>


<style scoped>

.footermemberproduct1{ 
   width: 100%;
  
   height: 100vh;


}
.condition p{
      width: 100%;
   padding-top: 40px;
   
   width: 80%;
   font-size: var(--fs-base);
   text-align: center;

}
.condition h1{
  
   text-align: center;

   width: 100%;
   font-size: var(--fs-xxl);
   font-weight: bold;
}
.condition{
   width: 100%;
   height: 40%;

  display: flex;
  flex-direction: column;
  align-items: center;
   color: #fff;
}
.benetfitcontent p{
   width: 100%;
   padding-top: 40px;

   width: 80%;
  
   font-size: var(--fs-base);
   text-align: center;
}
.benetfitcontent h1{

   text-align: center;

   width: 100%;
   font-size: var(--fs-xxl);
   font-weight: bold;
   
}
.benetfitcontent{
   width: 100%;
   color: #fff;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: 40%;
 


}
.benetfitcontainer{
   width: 80%;
   display: flex;
   justify-content: space-around;
   flex-direction: column;
   height: 100%;

}
.benetfix{
   width: 100%;
   height: auto;
   border: 1px solid red;

}
.atmmockup img{
   width: 70%;

   position: relative;
   z-index: 1;
   left:-60px;
   bottom: -150px;
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
 
}
.description_left_container{
   width: 50%;
   display: flex;
   align-items: start;
   justify-content: space-evenly;
   flex-direction: column;
   
   height: 100%;

}
.adjustmentcenter{
   width: 95%;
   height: 80%;
   display: flex;
 

}
.productdiscription{
   width: 100%;
   height: 90vh;
   background-image: url(/product/product5/product5bg.png);
   background-position: left;
   background-size: cover;
   background-repeat: no-repeat;

   display: flex;
   justify-content: center;
   align-items: center;
}
</style>