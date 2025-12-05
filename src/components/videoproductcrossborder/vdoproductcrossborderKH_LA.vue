<template>
    <div class="video-background-container">
        <!-- Background Video -->
        <video ref="videoRef" class="video-bg" autoplay muted loop playsinline>
            <source :src="videoSrc" type="video/mp4" />
            Your browser does not support HTML5 video.
        </video>

        <!-- Overlay -->

        <!-- Center Content -->
        <div class="content">
            <div class="glass-card">
                <div class="topcontainer">
                    <h1>
                        ກຳປູເຈຍ <img src="https://flagcdn.com/kh.svg" alt="" /> ສະແກນຊຳລະ ລາວ
                        <img src="https://flagcdn.com/la.svg" alt="" />: ນັກທ່ອງທ່ຽວກຳປູເຈຍຊຳລະຢູ່ລາວ
                    </h1>
                </div>
                <div class="centercontainer">
                    <div class="headercondition">
                        <p>ເບື້ອງລາວ (ຮັບການຊຳລະ) : 11 ທະນາຄານສະມາຊິກ</p>
                    </div>
                    <div class="logomember">
                        <div class="row1">
                            <img src="/logoallmember/retangle_scale/BCEL.png" alt="" />
                            <img src="/logoallmember/retangle_scale/LDBnew.png" alt="" />
                            <img src="/logoallmember/retangle_scale/APB.png" alt="" />
                            <img src="/logoallmember/retangle_scale/jdbnew.png" alt="" />
                            <img src="/logoallmember/retangle_scale/LVBnew.png" alt="" />
                            <img src="/logoallmember/retangle_scale/IBbankk.JPG" alt="" />
                            <img src="/logoallmember/retangle_scale/ACL.jpg" alt="" />
                            <img src="/logoallmember/retangle_scale/BICnew.jpeg" alt="" />
                            <img src="/logoallmember/retangle_scale/sacom.png" alt="" />
                            <img src="/logoallmember/retangle_scale/STB.jpg" alt="" />
                            <img src="/logoallmember/retangle_scale/Kbank.webp" alt="" />
                        </div>
                        
                    </div>
                </div>
                <div class="bottomcontainer">
                    <div class="headercondition">
                        <p style="font-size: 25px">
                            ຜ່ານເຄືອຂ່າຍ Bakong: ທຸກທະນາຄານທີ່ເປັນສະມາຊິກຂອງ Bakong (ປັດຈຸບັນມີ 59 ທະນາຄານ), ແລະ ທະນາຄານ ACLEDA <br>(ໃຊ້ Mobile Banking ຂອງຕົນເອງ).
                        </p>
                    </div>
                    <div class="imgqrpayment">
                        <img src="/Logomember/bakong.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.imgqrpayment img{
    width: 100%;
    height: 100%;

}
.imgqrpayment{
    width: 30%;
    height: 190px;
    
    margin: 0 auto;
    margin-top: 20px;
}
.bottomcontainer {
    margin-top: 30px;
    width: 100%;
    height: 350px;
   
}

.row1 img {
    width: 120px;

        margin-left: 10px;
}

.row1 {
    width: 100%;
   display: flex;
   justify-content: center;
    height: auto;
    
 
}

.logomember {
    width: 100%;
    height: auto;
   
}

.headercondition p {
    font-size: 28px;
    font-weight: bold;
    text-align: center;
}

.headercondition {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;

    align-items: center;
}

.centercontainer {
    margin-top: 20px;
    width: 100%;
    height: auto;

}

.topcontainer img {
    width: 45px;
    height: 35px;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 3px;
    margin-left: 10px;
    margin-right: 10px;
}

.topcontainer h1 {
    font-size: 40px;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    display: flex;
    color: #fff;
}

.topcontainer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;

}

.glass-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
}

.glass-card::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 100%;
    background: linear-gradient(180deg,
            rgba(255, 255, 255, 0.8),
            transparent,
            rgba(255, 255, 255, 0.3));
}

.glass-card {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.5),
        inset 0 -1px 0 rgba(255, 255, 255, 0.1), inset 0 0 0px 0px rgba(255, 255, 255, 0);
    position: relative;
    overflow: hidden;
}

.video-background-container {
    position: relative;
  width: 100%;
  height: 100%;
  min-height: 1000px;
  padding: 40px 0;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  
  color: #fff;
  font-family: "Poppins", sans-serif;
  z-index: 0;
}

.video-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    filter: brightness(70%);
    z-index: 1;
}

.content {
    width: 90%;
    height: 750px;

    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 3;
}
</style>
<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

const videoSrc = "/videos/testcrossborder.mp4"; // change to your video path
const videoRef = ref(null);
const titleRef = ref(null);
const subtitleRef = ref(null);
const buttonRef = ref(null);

onMounted(() => {
    // GSAP intro animation
    gsap.from(titleRef.value, { y: -50, opacity: 0, duration: 1, ease: "power3.out" });
    gsap.from(subtitleRef.value, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
    });
    gsap.from(buttonRef.value, {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        delay: 1,
        ease: "back.out(1.7)",
    });
});

function playAnimation() {
    // Example GSAP button click animation
    gsap.to(buttonRef.value, {
        scale: 0.9,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut",
    });
}
</script>
