<script setup>
import navbar from '../../components/miannavbar/main_navbar.vue';
import mainfooter from '../../components/footer/mainfooter/mainfooter.vue';
import homepagebutton from '../../components/button/homepagebutton.vue';
import videobackgroundhomepage from '../../components/videobackground/productbackgroundvideo.vue'
import tagproduct from '../../components/tagproduct/tagproduct.vue';
import product3_footerlogomember from '../../components/footer/logomemberfooter/product3_footerlogomember.vue';
import cardscrolling from './cardscrolling/cardscrolling2.vue';
import tablefee from '../../components/tablefee/tablefee.vue';
import stepwork from './stepwork/stepwork.vue';

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
      src: "/logoallmember/circle_scale/PUB.png",
      alt: "Client Z",
   },
   // ...continue until you have 16 logos, all with their own paths
];
</script>

<template>
   <navbar title="ຜະລິດຕະພັນ ແລະ ການບໍລິການ" :breadcrumb="[
      'ໜ້າຫຼັກ',
      'ຜະລິດຕະພັນ ແລະ ການບໍລິການ',
      'ໂອນເງິນຂ້າມທະນາຄານຜ່ານຕູ້ ATM'
   ]" background-image="/overlaynav/product/navigatorcontent-bg.png" />

   <herosection />
   <div class="productdiscription">
      <div class="adjustmentcenter">
         <div class="description_left_container">

            <h1>ໂອນເງິນຂ້າມທະນາຄານ<br>ຜ່ານຕູ້ ATM</h1>
            <p> ການໂອນເງິນຂ້າມທະນາຄານຜ່ານຕູ້ ATM ແມ່ນນຳໃຊ້ລະບົບແລັບ
            ໃນການເຊື່ອມໂຍງຕູ້ເອທີເອັມຂອງແຕ່ລະທະນາຄານທີ່ເປັນສະມາຊິກຂອງ
            ບໍລິສັດລາວ ເນເຊີນນໍເພເມັ້ນ ເນັດເວີກ ໃຫ້ສາມາດໃຊ້ຟັງຊັ່ນການໂອນເງິນ
            ຂ້າມທະນາຄານໄດ້.</p>
            <tagproduct label="ຜະລິດຕະພັນ ແລະ ການບໍລິການ" />
         </div>
         <div class="description_right_container">
            <div class="topimg">
               <img src="/product/product3/product3topimg.png" alt=""></img>
            </div>
            <div class="atmmockup">
               <img src="/product/product3/ATMpd3.webp" alt="">
            </div>
         </div>

      </div>
   </div>
   <div class="benetfix">
      <videobackgroundhomepage :src="heroVideo" poster="/images/tech-poster.jpg">
         <div class="benetfitcontainer">
            <div class="benetfitcontent">
               <h1>ຜົນປະໂຫຍດທີ່ໄດ້ຮັບ</h1>
               <h2>ດ້ານທະນາຄານສະມາຊິກ</h2>
               <p>ຫຼຸດຕົ້ນທຶນທາງດ້ານບຸກຂະລາກອນທີ່ໃຫ້ບໍລິການໂອນເງິນຂ້າມທະນາຄານຜ່ານ Counter ຫຼື ປ່ອງບໍລິການຂອງທະນາຄານ
                    ໃຫ້ລູກຄ້າ
                    ຫັນມານຳໃຊ້ຕູ້ ATM ໃນການເຮັດທຸລະກຳ ແລະ ຍັງສາມາດເພີ່ມຈຳນວນທຸລະກຳການໂອນ ເພາະສາມາດໂອນຢູ່ຕູ້ ATM
                    ຂອງທະນາຄານ
                    ໃດກໍ່ໄດ້ທີ່ເປັນສະມາຊິກຂອງບໍລິສັດ LAPNet.</p>
            </div>
            <div class="condition">
               <h1>ເງື່ອນໄຂການໃຊ້ບໍລິການ</h1>
               <h2>ດ້ານລູກຄ້າຂອງທະນາຄານ</h2>
               <p>ເປັນການອຳນວຍຄວາມສະດວກ ແລະ ປະຢັດເວລາ ໂດຍລູກຄ້າບໍ່ຈໍາເປັນຕ້ອງລໍຖ້າການໃຊ້ບໍລິການໂອນເງິນຂ້າມທະນາຄານຜ່ານ
                    counter ຫຼື ປ່ອງບໍລິການຂອງທະນາຄານ; ລູກຄ້າສາມາດເຮັດທຸລະກຳໂອນເງິນຂ້າມທະນາຄານໄດ້ດ້ວຍຕົນເອງ
                    ດ້ວຍການໂອນເງິນ
                    ທີ່ຕູ້ ATM ຂອງທະນາຄານສະມາຊິກ ຊຶ່ງປັດຈຸບັນມີ 14 ທະນາຄານທີ່ສາມາດໃຫ້ບໍລິການໄດ້.</p>
            </div>
         </div>
      </videobackgroundhomepage>
   </div>
   <div class="cardscrolling">

      <cardscrolling title="ເງື່ອນໄຂການບໍລິການ" :subtitle="`  ລູກຄ້າທີ່ມີບັດ ATM ຂອງທະນາຄານທີ່ເປັນສະມາຊິກຂອງ LAPNet
        ສາມາດໂອນເງິນຂ້າມທະນາຄານຜ່ານຕູ້ ATM ຂອງທະນາຄານສະມາຊິກ.`" :features="[
               ' ຂອບເຂດການໂອນເງິນຂ້າມທະນາຄານຜ່ານຕູ້ເອທີເອັມ ແມ່ນສາມາດໂອນເງິນແຕ່ 1.000 ກີບ ຫາ 200.000.000 ກີບ/ຄັ້ງ. ໂດຍຈະຄິດໄລ່ຄ່າບໍລິການຕາມມູນຄ່າການໂອນດັ່ງນີ້:',

            ]" primary-button-label="ຜະລິດຕະພັນ ແລະ ການບໍລິການ" badge-label="ATM Transfer"
         badge-description="ທະນາຄານສະມາຊິກທັງຫມົດທີເຂົ້າຮ່ວມ : 14 ທະນາຄານ" />
   </div>
   <div class="tablefee">
      <tablefee/>
   </div>
   <div class="stepwork" style="margin-top: 70px;">
      <stepwork/>
   </div>
   <div class="footermemberproduct1">

      <product3_footerlogomember :subtitle="`   ການໂອນເງິນຂ້າມທະນາຄານຜ່ານຕູ້ ATM ແມ່ນນຳໃຊ້ລະບົບແລັບ
            ໃນການເຊື່ອມໂຍງຕູ້ເອທີເອັມຂອງແຕ່ລະທະນາຄານທີ່ເປັນສະມາຊິກຂອງ
            ບໍລິສັດລາວ ເນເຊີນນໍເພເມັ້ນ ເນັດເວີກ ໃຫ້ສາມາດໃຊ້ຟັງຊັ່ນການໂອນເງິນ
            ຂ້າມທະນາຄານໄດ້.`" :features="[
         ' ຂອບເຂດການໂອນເງິນຂ້າມທະນາຄານຜ່ານຕູ້ເອທີເອັມ ແມ່ນສາມາດໂອນເງິນແຕ່ 1.000 ກີບ ຫາ 200.000.000 ກີບ/ຄັ້ງ. ',
    
      ]" :logos="memberLogos" />
   </div>

   <mainfooter />

</template>


<style scoped>
@media (max-width: 720px ) {
   .tablefee{
      overflow: auto;
   }
   
}
.stepwork{
   overflow: hidden;
   width: 100%;
   height: auto;
   border: 1px solid red;
}
.tablefee{
   width: 100%;
   height: 100vh;

   
}
.cardscrolling {
   width: 100%;
   height: auto;


}

.benetfitcontent h2 {
   font-size: var(--fs-md);
   font-weight: bold;
}

.footermemberproduct1 {
   width: 100%;
   height: 100vh;


}

.condition h2 {
   font-size: var(--fs-md);
   font-weight: bold;
}

.condition p {
   width: 100%;
   padding-top: 40px;


   font-size: var(--fs-base);
   text-align: center;

}

.condition h1 {

   text-align: center;

   width: 100%;
   font-size: var(--fs-xxl);
   font-weight: bold;
}

.condition {
   width: 100%;
   height: 40%;

   display: flex;
   flex-direction: column;
   align-items: center;
   color: #fff;
}

.benetfitcontent p {
   width: 100%;
   padding-top: 40px;



   font-size: var(--fs-base);
   text-align: center;
}

.benetfitcontent h1 {

   text-align: center;

   width: 100%;
   font-size: var(--fs-xxl);
   font-weight: bold;

}

.benetfitcontent {
   width: 100%;
   color: #fff;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: 40%;



}

.benetfitcontainer {
   width: 80%;
   display: flex;
   justify-content: space-around;
   flex-direction: column;
   height: 100%;

}

.benetfix {
   width: 100%;
   height: 100vh;

}

.atmmockup img {
   width: 80%;
   position: relative;
   z-index: 1;
   left: -100px;
   bottom: -50px;
}

.description_right_container {
   width: 50%;
   height: 100%;
}

.topimg img {
   width: 30%;
   right: 40px;

   height: 400px;
   object-fit: cover;
   border-radius: 10px;
   position: absolute;
   z-index: 0;

}

.description_left_container p {
   font-size: var(--fs-base);
}

.description_left_container h1 {
   font-size: var(--fs-xxxl);
   font-weight: bold;
   line-height: 1.2;
}

.description_left_container h3 {
   color: var(--color-second);
   font-weight: bold;
   font-size: var(--fs-md);
}

.description_right_container {

   width: 50%;
   height: 100%;

}

.description_left_container {
   width: 50%;
   display: flex;
   align-items: start;
   justify-content: space-evenly;
   flex-direction: column;

   height: 100%;

}

.adjustmentcenter {
   width: 95%;
   height: 80%;
   display: flex;


}

.productdiscription {
   width: 100%;
   height: 90vh;
   background-image: url(/product/product3/bgtempleteproduct3-1.png);
   background-position: left;
   background-size: cover;
   background-repeat: no-repeat;

   display: flex;
   justify-content: center;
   align-items: center;
}
</style>