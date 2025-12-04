<script setup lang="ts">
import navbar from '../../components/miannavbar/main_navbar.vue';
import mainfooter from '../../components/footer/mainfooter/mainfooter.vue';

import videobackgroundhomepage from '../../components/videobackground/productbackgroundvideo.vue';
import tagproduct from '../../components/tagproduct/tagproduct.vue';

import product6swiper from '../../Views/products/swipper/product6swiper.vue';
import crossborderbtn from '../../components/button/crossborderbtn.vue';
import product6tech from '../techbenetfit/product6tech.vue';

import vdoproductcrossborderKH_LA from '../../components/videoproductcrossborder/vdoproductcrossborderKH_LA.vue';
import vdoproductcrossborderLA_KH from '../../components/videoproductcrossborder/vdoproductcrossborderLA_KH.vue';
import vdoproductcrossborderTH_LA from '../../components/videoproductcrossborder/vdoproductcrossborderTH_LA.vue';
import vdoproductcrossborderLA_TH from '../../components/videoproductcrossborder/vdoproductcrossborderLA_TH.vue';
import vdoproductcrossborderVN_LA from '../../components/videoproductcrossborder/vdoproductcrossborderVN_LA.vue';
import vdoproductcrossborderCN_LA from '../../components/videoproductcrossborder/vdoproductcrossborderCN_LA.vue';

import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { gsap } from 'gsap';

const heroVideo = '/videos/productvdo-background.mp4';

// ... memberLogos unchanged ...

const route = useRoute();
const videoBox = ref<HTMLElement | null>(null);

// use only the param, not the whole path
const pair = computed(() => (route.params.pair as string) || 'kh-la');

const currentVideoComponent = computed(() => {
   switch (pair.value) {
      case 'kh-la':
         return vdoproductcrossborderKH_LA;
      case 'la-kh':
         return vdoproductcrossborderLA_KH;
      case 'th-la':
         return vdoproductcrossborderTH_LA;
      case 'la-th':
         return vdoproductcrossborderLA_TH;
      case 'vn-la':
      case 'la-vn':
         return vdoproductcrossborderVN_LA;
      case 'cn-la':
      case 'la-cn':
         return vdoproductcrossborderCN_LA;
      default:
         return vdoproductcrossborderCN_LA;
   }
});

// only animate the video box when pair changes
watch(
   pair,
   () => {
      if (!videoBox.value) return;

      gsap.fromTo(
         videoBox.value,
         { opacity: 0, y: 40 },
         {
            opacity: 1,
            y: 0,
            duration: 2.0,
            ease: 'power3.out',
         },
      );
   },
   { immediate: true },
);
</script>




<template>
   <navbar title="ຜະລິດຕະພັນ ແລະ ການບໍລິການ" :breadcrumb="[
      'ໜ້າຫຼັກ',
      'ຜະລິດຕະພັນ ແລະ ການບໍລິການ',
      'ຊຳລະຂ້າມແດນໃນຮູບແບບ QR CODE ລະຫວ່າງປະເທດ'
   ]" background-image="/overlaynav/product/navigatorcontent-bg.png" />
   <div class="productdiscription">
      <div class="adjustmentcenter">
         <div class="description_left_container">

            <h1>ຊຳລະຂ້າມແດນໃນຮູບແບບ <br>QR CODE ລະຫວ່າງປະເທດ</h1>
            <p> ບໍລິສັດ LAPNet ໄດ້ຕໍ່ຍອດການພັດທະນາລະບົບຊຳລະຂ້າມທະນາຄານເທິງມືຖື
               (LMPS) ເພື່ອຂະຫຍາຍຜະລິດຕະພັນ ຊຳລະຂ້າມທະນາຄານ ໃຫ້ສາມາດຮອງຮັບການ
               ຊຳລະ ຄ່າສິນຄ້າ - ບໍລິການ ລະຫວ່າງປະເທດ, ໂດຍຜູ້ໃຊ້ Mobile banking ຂອງ
               ທະນາຄານທີ່ເຂົ້າຮ່ວມໂຄງການ ໃນ ສປປ ລາວ ສາມາດເຮັດທຸລະກຳ
               ຊຳລະຂ້າມແດນໄປຍັງປະເທດທີ່ເຮັດການເຊື່ອມໂຍງລະບົບຊຳລະຂ້າມແດນ
               ລະຫວ່າງກັນ ແລະ ຮ້ານຄ້າທີ່ເປີດບັນຊີນຳທະນາຄານທີ່ເຂົ້າຮ່ວມໂຄງການໃນ ສປປ ລາວ ກໍ່ສາມາດຮັບການຊຳລະຄ່າສິນຄ້າ -
               ບໍລິການ ຈາກນັກທ່ອງທ່ຽວຕ່າງປະເທດທີ່ເຂົ້າມາ ສ ປປ ລາວ, ປັດຈຸບັນ LAPNet ໄດ້ຮ່ວມໂຄງການກັບ 4 ປະເທດຄື:
               ປະເທດກຳປູເຈຍ, ປະເທດໄທ, ປະເທດຈີນ ແລະ ປະເທດຫວຽດນາມ.</p>
            <tagproduct label="ຜະລິດຕະພັນ ແລະ ການບໍລິການ" />
         </div>
         <div class="description_right_container">
            <div class="topimg">
               <img src="/product/product6/topimg.png" alt=""></img>
            </div>
            <div class="atmmockup">
               <img src="/product/product6/mbmockup.png" alt="">
            </div>
         </div>

      </div>
   </div>
   <div class="benetfix">
      <videobackgroundhomepage :src="heroVideo" poster="/images/tech-poster.jpg">
         <div class="benetfitcontainer">
            <div class="benetfitcontent">
               <h1>ຜົນປະໂຫຍດທີ່ໄດ້ຮັບ</h1>
               <p>ການເຊື່ອມໂຍງ ລະບົບການຊຳລະຂ້າມແດນໃນຮູບແບບ QR Code ລະຫວ່າງປະເທດ ຈະອຳນວຍຄວາມສະດວກໃຫ້ກັບລູກຄ້າຂອງ
                  ທະນາຄານ ໃຫ້ສາມາດເຮັດທຸລະກຳຊຳລະຂ້າມແດນ ໄດ້ຢ່າງປອດໄພ ສະດວກສະບາຍ ວ່ອງໄວ ໂດຍສາມາດນຳໃຊ້ບັນຊີເງິນກີບໃນການ
                  ຊຳລະ ແລະ ຮ້ານຄ້າໃນ ສ ປປ ລາວ ກໍ່ສາມາດຮັບການສະແກນຈາກນັກທ່ອງທ່ຽວຕ່າງປະເທດໄດ້ ໂດຍຈະອຳນວຍຄວາມສະດວກໃນການ
                  ຮັບຊຳລະ ບໍ່ຫຍຸ້ງຍາກໃນການນຳໃຊ້ເງິນສົດ ແລະ ເງິນທອນຈາກຮ້ານຄ້າໃນເວລາຊຳລະເງິນ.</p>
            </div>

         </div>
      </videobackgroundhomepage>
   </div>
   <div class="slidecontainer">
      <product6swiper />
   </div>
   <div class="crossborderinfo">
      <div class="titlecrossborder">
         <h1 id="memberjoin">ທະນາຄານສະມາຊິກທີ່ເຂົ້າຮ່ວມ</h1>
         <crossborderbtn />
      </div>
      <div class="videocontainer">
         <div class="videocorssbordershow" ref="videoBox">
            <component :is="currentVideoComponent" :key="pair" />
         </div>
      </div>


   </div>
   <div class="descriptionforcustomer">
      <product6tech />
   </div>
   <mainfooter />
</template>


<style scoped>
.descriptionforcustomer {
   width: 100%;
   height: auto;
}

.videocontainer {
   width: 100%;
   height: auto;
}

@media (max-width:518px) {

   #memberjoin {
      font-size: 2.3rem;
   }
}

.titlecrossborder h1 {
   font-size: var(--fs-hero);
   font-weight: bold;
   color: #0025B8;
   background-image: linear-gradient(45deg, #312ba4, #0d1c9c 8%, #00A6FF 100%);
   background-clip: text;
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
   display: inline-block;
}

.titlecrossborder {
   width: 100%;
   height: 30%;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   border: 1px solid red;
}

.crossborderinfo {
   width: 100%;
   height: 1330px;
   border: 1px solid red;
}

@media (max-width: 768px) {
   .slidecontainer {
      display: none;
   }

}

.slidecontainer {
   width: 100%;
   height: 54vh;
   border: 1px solid red;
}

.footermemberproduct1 {
   width: 100%;

   height: 100vh;


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
   height: 50vh;


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
   background-image: url(/product/product6/product6bg.png);
   background-position: left;
   background-size: cover;
   background-repeat: no-repeat;

   display: flex;
   justify-content: center;
   align-items: center;
}
</style>