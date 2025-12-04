<script setup>
import navbar from '../../components/miannavbar/main_navbar.vue';
import mainfooter from '../../components/footer/mainfooter/mainfooter.vue';
import homepagebutton from '../../components/button/homepagebutton.vue';
import videobackgroundhomepage from '../../components/videobackground/productbackgroundvideo.vue'
import tagproduct from '../../components/tagproduct/tagproduct.vue';
import product4_footerlogomember from '../../components/footer/logomemberfooter/product4_footerlogomember.vue';
import product4tech from '../techbenetfit/product4tech.vue';
import logofloating from '../../components/logofloating/logofloating.vue';
import tablefee from '../../components/tablefee/tablefee.vue';


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
   <navbar title="ຜະລິດຕະພັນ ແລະ ການບໍລິການ" :breadcrumb="[
      'ໜ້າຫຼັກ',
      'ຜະລິດຕະພັນ ແລະ ການບໍລິການ',
      'ໂອນເງິນຂ້າມທະນາຄານເທິງມືຖື'
   ]" background-image="/overlaynav/product/navigatorcontent-bg.png" />
   <div class="productdiscription">
      <div class="adjustmentcenter">
         <div class="description_left_container">

            <h1>ໂອນເງິນຂ້າມ<br>ທະນາຄານເທິງມືຖື</h1>
            <p> ການໂອນເງິນຂ້າມທະນາຄານເທິງມືຖື (Fund Transfer via Mobile
               Application) ໂດຍນຳໃຊ້ລະບົບ LMPS ໃນການເຊື່ອມໂຍງຜ່ານ
               Applications ຂອງແຕ່ລະທະນາຄານທີ່ເປັນສະມາຊິກຂອງບໍລິສັດລາວ
               ເນເຊີນນໍເພເມັ້ນ ເນັດເວີກ ໃຫ້ສາມາດໃຊ້ຟັງຊັ່ນການດຳເນີນທຸລະກຳໂອນ
               ເງິນຂ້າມທະນາຄານໄດ້.</p>
            <tagproduct label="ຜະລິດຕະພັນ ແລະ ການບໍລິການ" />
         </div>
         <div class="description_right_container">
            <div class="topimg">
               <img src="/product/product4/Rectangle 1.png" alt=""></img>
            </div>
            <div class="atmmockup">
               <img src="/product/product4/ip16.webp" alt="">
            </div>
         </div>

      </div>
   </div>
   <div class="benetfix">
      <product4tech />
   </div>
   <div class="condition_for_use">
      <div class="titlecondition" id="titlecondition">
         <div class="titlebox">
            <h1 id="redponsivetitlebox">ເງື່ອນໄຂການບໍລິການ</h1>
         </div>
         <div class="script">
            <p>ລຸກຄ້າສາມາດນຳໃຊ້ເລກບັນຊີທະນາຄານ ດຳເນີນທຸລະກຳເທິງມືຖື ໂດຍຜ່ານ Applications
               ຂອງແຕ່ລະທະນາຄານທຸລະກິດທີ່ເປັນສະມາຊິກຂອງບໍລິສັດ LAPNet
               ໄດ້ຟຣີໃນໄລຍະທີ່ເປີດຕົວຜະລິດຕະພັນການໂອນເງິນຂ້າມທະນາຄານເທິງມືຖືໃໝ່ ດັ່ງເນື້ອໃນລຸ່ມນີ້:</p>
         </div>
         <div class="warning">
            <p><i class="fa-solid fa-circle"></i>ການໂອນເງິນເທີງມືຖືໂດຍນຳໃຊ້ຮູບແບບການໂອນ ບັນຊີຫາບັນຊີ ຫຼື ເອີ້ນວ່າ
               Account Fund Transfer
               ແມ່ນມີສະມາຊິກທັງໝົດ 18 ທະນາຄານ ດັ່ງນີ້:</p>
         </div>
         <div class="techbtn">
            <tagproduct label="ຜະລິດຕະພັນ ແລະ ການບໍລິການ" />
         </div>
      </div>
      <div class="logofloatings">
         <logofloating />
      </div>
   </div>
   <div class="tablefee">
      <tablefee />
   </div>
   <div class="footermemberproduct1">
      <product4_footerlogomember :subtitle="`  ການໂອນເງິນຂ້າມທະນາຄານເທິງມືຖື (Fund Transfer via Mobile
            Application) ໂດຍນຳໃຊ້ລະບົບ LMPS ໃນການເຊື່ອມໂຍງຜ່ານ
            Applications ຂອງແຕ່ລະທະນາຄານທີ່ເປັນສະມາຊິກຂອງບໍລິສັດລາວ
            ເນເຊີນນໍເພເມັ້ນ ເນັດເວີກ ໃຫ້ສາມາດໃຊ້ຟັງຊັ່ນການດຳເນີນທຸລະກຳໂອນ
            ເງິນຂ້າມທະນາຄານໄດ້.`" :features="[
               ' ຂອບເຂດການໂອນເງິນຂ້າມທະນາຄານເທິງມືຖື ແມ່ນສາມາດໂອນເງິນແຕ່ 1.000 ກີບ ຫາ 200.000.000 ກີບ/ຄັ້ງ. ',

            ]" :logos="memberLogos" />
   </div>

   <mainfooter />
</template>


<style scoped>
.tablefee {
   width: 100%;
   height: 100vh;




}

@media (max-width: 720px) {
   .tablefee {
      overflow: auto;
   }

}

.tablefee {
   width: 100%;
   height: 100vh;
}

@media (max-width: 921px) {
   .logofloatings {
      display: none;
   }

   #titlecondition {
      width: 100%;
      height: 100%;
   }
}

@media (max-width: 1140px) {
   #redponsivetitlebox {
      font-size: 3.3rem;
      font-weight: bold;
   }
}

@media (max-width: 515) {
   #redponsivetitlebox {
      font-size: 2rem;
      font-weight: bold;
   }

}

.techbtn {
   width: 100%;
   height: 15%;

}

.warning p i {
   font-size: 10px;
   margin-right: 10px;
   color: rgb(0, 76, 255);

}

.warning p {
   font-weight: 500;
}

.warning {

   font-size: var(--fs-base);
   width: 100%;
   height: 15%;


}

.script {
   width: 100%;
   height: 15%;
   font-size: var(--fs-base);

}

.titlebox h1 {
   font-size: 5rem;
   font-weight: bold;

}

.titlebox {
   width: 100%;
   height: 20%;


}

.logofloatings {
   width: 45%;
   height: 90%;
   border: 1px solid blue;
}

.titlecondition {
   width: 55%;
   height: 90%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   border: 1px solid salmon;
}

.condition_for_use {
   display: flex;
   align-items: center;
   justify-content: center;
   flex-wrap: wrap;
   width: 95%;
   margin: 0 auto;
   height: 80vh;
   border: 1px solid red;
}

.footermemberproduct1 {
   width: 100%;

   height: 100vh;


}

.condition p {
   width: 100%;
   padding-top: 40px;

   width: 80%;
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

   width: 80%;

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
   height: auto;
   border: 2px solid blue;

}

.atmmockup img {
   width: 50%;
   position: relative;
   z-index: 1;
   left: 50px;
   bottom: -150px;
}

.description_right_container {
   width: 50%;
   height: 100%;
}

.topimg img {
   width: 30%;
   right: 40px;
   height: auto;
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
   background-image: url(/product/product4/productbg4.png);
   background-position: left;
   background-size: cover;
   background-repeat: no-repeat;

   display: flex;
   justify-content: center;
   align-items: center;
}
</style>