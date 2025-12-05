<template>
    <div class="video-background-container">
        <!-- Background Video -->
        <video ref="videoRef" class="video-bg" autoplay muted loop playsinline>
            <source :src="videoSrc" type="video/mp4" />
            Your browser does not support HTML5 video.
        </video>

        <!-- Center Content -->
        <div class="content">
            <div class="glass-card">
                <div class="topcontainer">
                    <h1 ref="titleRef">
                        ຈີນ
                        <img src="https://flagcdn.com/cn.svg" alt="" />
                        ສະແກນຊຳລະ ລາວ
                        <img src="https://flagcdn.com/la.svg" alt="" />
                        : ນັກທ່ອງທ່ຽວຈີນ (ແລະ ອື່ນໆ) ຊຳລະຢູ່ລາວ
                    </h1>
                </div>

                <div class="centercontainer">
                    <div class="headercondition">
                        <p>ເບື້ອງລາວ (ຮັບການຊຳລະ) : 10 ທະນາຄານສະມາຊິກ.</p>
                    </div>
                    <div class="logomember">
                        <div class="row1">
                            <img src="/logoallmember/retangle_scale/BCEL.png" alt="" />
                            <img src="/logoallmember/retangle_scale/LDBnew.png" alt="" />
                            <img src="/logoallmember/retangle_scale/jdbnew.png" alt="" />
                            <img src="/Logomember/APB.png" alt="" />
                            <img src="/logoallmember/retangle_scale/STB.jpg" alt="" />
                            <img src="/logoallmember/retangle_scale/mjbl.jpeg" alt="" />
                            <img src="/logoallmember/retangle_scale/ACL.jpg" alt="" />
                            <img src="/logoallmember/retangle_scale/psvb.PNG" alt="" />
                            <img src="/logoallmember/retangle_scale/LVBnew.png" alt="" />
                            <img src="/logoallmember/retangle_scale/MB.png" alt="" />
                        </div>
                    </div>
                </div>

                <div class="bottomcontainer">
                    <div class="headercondition">
                        <p style="font-size: 29px">
                            ເບື້ອງຈີນ/ສາກົນ (ສະແກນຊຳລະ) : ທະນາຄານທີ່ເປັນສະມາຊິກຂອງ Unionpay International ໃນທົ່ວໂລກ
                        </p>

                    </div>

                    <div class="logomember">
                        <div class="unoinpaycontainer">
                            <img style="width:230px; height:150px;margin-right: 40px;" src="/Logomember/Unoin.png"
                                alt="">
                            <img src="/Logomember/UPI.webp" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from "vue";
import { gsap } from "gsap";


const videoSrc = "/videos/testcrossborder.mp4";
const videoRef = ref(null);
const titleRef = ref(null);

// country จาก dropdown
const selectedCountry = ref("china");

// refs สำหรับแถว logo
const row2Ref = ref(null);
const row3Ref = ref(null);

const onChangeCountry = (countryId) => {
    if (selectedCountry.value === countryId) return;
    selectedCountry.value = countryId;
};

const animateRows = () => {
    if (row2Ref.value) {
        gsap.fromTo(
            row2Ref.value,
            { opacity: 0, y: 25 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power3.out",
            }
        );
    }

    if (row3Ref.value) {
        gsap.fromTo(
            row3Ref.value,
            { opacity: 0, y: 35 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power3.out",
                delay: 0.08,
            }
        );
    }
};

onMounted(() => {
    if (titleRef.value) {
        gsap.from(titleRef.value, {
            y: -40,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        });
    }

    animateRows();
});

watch(selectedCountry, async () => {
    await nextTick();
    animateRows();
});
</script>

<style scoped>
.unoinpaycontainer img {
    width: 150px;
    height: 150px;
}

.unoinpaycontainer {
    width: 50%;

    margin: 0 auto;
    display: flex;
    justify-content: center;
    height: 200px;
    align-items: center;

}


.imgqrpayment img {
    width: 100%;
    height: 100%;
}

.imgqrpayment {
    width: 30%;
    height: 190px;
    margin: 0 auto;
    margin-top: 20px;
}

.bottomcontainer {
    margin-top: 30px;
    width: 100%;
    height: auto;
    /* แทน 350px */
}

.row3 img,
.row2 img,
.row1 img {
    width: 120px;
    height: 120px;
    margin-left: 10px;

}

.row3 {
    display: flex;
    width: 50%;
    justify-content: center;
    align-items: center;
    height: auto;
    margin: 0 auto;
}

.row2,
.row1 {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: auto;
    margin: 0 auto;
}

.logomember {
    width: 100%;
    height: auto;
    margin-top: 30px;

}

.headercondition p {
    font-size: 28px;
    font-weight: bold;
    text-align: center;
}

.headercondition img {
    width: 90px;
    margin-left: 10px;
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
    display: flex;
    border-radius: 3px;
    margin-left: 10px;
    margin-right: 10px;
}

.topcontainer h1 {
    font-size: 40px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
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
