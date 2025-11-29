<script setup>
import { ref } from 'vue'  // ✅ add this

import topnavbar from '../../components/topnavbar/topnavbar.vue';
import aboutusdropdown from '../../components/dropdown-homepage/aboutusdropdown.vue';
import memberdropdown from '../../components/dropdown-homepage/memberdropdown.vue';
import productDropdown from '../../components/dropdown-homepage/product-dropdown.vue';
import search from '../../components/search/search.vue';
import homepagebutton from '../../components/button/homepagebutton.vue';
import sidebar from '../../components/sidebar/sidebar.vue';

// ✅ create a ref to access sidebar methods
const sidebarRef = ref(null)

const openSidebarFromNavbar = () => {
    if (sidebarRef.value && sidebarRef.value.openSidebar) {
        sidebarRef.value.openSidebar()
    }
}
</script>

<template>

    <topnavbar />
    <div class="homepage-laddingpagecontainer">
        <div class="mainhomepagecontainer">
            <div class="item navbar">
                <div class="homepagelogolapnet" style="border: 1px solid red;">
                    <img src="/logolapnet/logolapnet.PNG" alt="">
                </div>
                <sidebar ref="sidebarRef" />


                <navbar class="navbar-list" style="border: 1px solid red;">
                    <div class="hamberger" @click="openSidebarFromNavbar">
                        <i class="fa-solid fa-bars"></i>
                    </div>
                    <ul>
                        <li>
                            <productDropdown />
                        </li>
                        <li>
                            <memberdropdown />
                        </li>
                        <li>ຂ່າວ ແລະ ກີດຈະກຳ</li>
                        <li>ຮ່ວມງານກັບເຮົາ</li>
                        <li>
                            <aboutusdropdown />
                        </li>
                        <li>ຕິດຕໍ່ພວກເຮົາ</li>
                    </ul>
                </navbar>

                <div class="search" style="border: 1px solid red; ">
                    <a href="#">EN /</a>

                    <a href="#" style="margin-right: 20px;"> LA </a>
                    <search class="searchbtn" />
                </div>

            </div>
        </div>
        <div class="item homecontainer">
            <div class="homepagemaintitle">
                <div class="titleproduct5">
                    <h1>ການຊຳລະເງິນຂ້າມ<br>ທະນາຄານຜ່ານ QR</h1>
                </div>
                <div class="descriptionproduct5">
                    <p>ການຊຳລະຂ້າມທະນາຄານຜ່ານ LAPNet QRPay ໂດຍນຳໃຊ້ລະບົບ LMPS ໃນການເຊື່ອມໂຍງຜ່ານApplications
                        ຂອງແຕ່ລະທະນາຄານທີ່ເປັນສະມາຊິກຂອງບໍລິສັດ LAPNet ໃຫ້ສາມາດນຳໃຊ້ຟັງຊັ້ນການດຳເນີນທຸລະກຳຊຳລະຜ່ານ QR
                        ຂອງທະນາຄານອື່ນໄດ.
                    </p>
                </div>
                <div class="buttonhomepage">
                    <homepagebutton label="ຜະລິດຕະພັນ ແລະ ການບໍລິການ" />
                </div>
            </div>


        </div>
    </div>
    <div class="visioncontainer">
        <div class="contentvision">
            <div class="itemvisionimg">
                <img src="/homepage/newmission-2.png" alt="">
            </div>
            <div class="itemvision-title">
                <h1 style="border: 1px solid red;">
                    ວິໄສທັດຂອງພວກເຮົາ
                </h1>
                <div class="visioncontentbox1">
                    <div class="number">
                        <h2>01</h2>
                    </div>
                    <div class="description-vision">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta minus enim debitis nihil, qui
                            placeat aliquam incidunt repudiandae corrupti nostrum similique perspiciatis eveniet
                            voluptas inventore, quis rerum adipisci cumque quia!</p>
                    </div>
                </div>
                <div class="visioncontentbox2">
                    <div class="number">
                        <h2>02</h2>
                    </div>
                    <div class="description-vision">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima cumque, quod atque
                            repudiandae quos voluptate, ullam assumenda labore, amet tenetur quam. Ratione, sint. Quia
                            veniam, alias magni doloremque molestiae aperiam? Eaque, repellendus sit! Temporibus
                            similique quisquam voluptates, voluptas, dolorem nemo eos non corporis fugit quo tempora
                            cupiditate ipsa. Animi, quos.</p>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>


<style scoped>
.hamberger i {
    font-size: 3.5rem;
    color: #fff;
}

.description-vision {
    width: 83%;
    height: 100%;
    border: 1px solid red;
}

.number h2 {
    text-align: center;

    padding: 25px 0px;
    font-size: 2rem;
    color: #fff;
    background: #000080;
    background: linear-gradient(0deg, rgba(0, 0, 128, 1) 0%, rgba(0, 15, 219, 1) 100%);
}

.number {
    width: 13%;
    height: 100%;
    border: 1px solid red;
}

.visioncontentbox2 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 40%;
    border: 1px solid salmon;
}

.visioncontentbox1 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 30%;
    border: 1px solid salmon;

}

.itemvision-title h1 {
    font-size: 4rem;
    color: #0D02D4;
    background-image: linear-gradient(45deg, #372cff, #00beed 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;

}

.itemvision-title {
    width: 60%;
    height: 85%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    border: 1px solid salmon;

}

.itemvisionimg img {
    width: 90%;
    height: auto;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.itemvisionimg {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    border: 1px solid red;
}

.contentvision {
    height: 90%;
    width: 100%;
    display: flex;
    align-items: center;
    border: 1px solid blue;

}

.visioncontainer {
    width: 90%;
    display: flex;
    align-items: center;
    margin: 0 auto;
    height: 90vh;
    border: 1px solid red;
}

.buttonhomepage {
    width: 100%;
    height: 20%;

}

.descriptionproduct5 p {
    font-size: 1.5rem;
    color: #fff;

}

.descriptionproduct5 {
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;


}

.titleproduct5 h1 {
    font-size: 6.25rem;

    color: #fff;
    font-family: "Noto Sans Lao", sans-serif;
}

.titleproduct5 {
    width: 100%;
    height: 40%;
    display: flex;
    align-items: center;
    line-height: 1.3;
    border: 1px solid red;


}

.homepagemaintitle {
    width: 70%;
    height: 80%;
    justify-content: space-between;
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px solid salmon;

}

.homecontainer {
    width: 80%;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
    border: 1px solid red;


}

.search {
    display: flex;
    justify-content: center;
    align-items: center;

}

.search a {
    color: #fff;
    font-size: 1.2rem;
    text-decoration: none;
    font-family: "Inter";


}

.navbar-list ul li {
    font-size: 1.2rem;
    font-weight: 500;
}

.navbar-list ul {
    list-style: none;
    font-family: "Noto Sans Lao", sans-serif;
    display: flex;
    color: #fff;
    width: 95%;
    align-items: center;
    justify-content: space-between;


}

.homepagelogolapnet img {
    width: 100%;
    height: auto;
}

.mainhomepagecontainer {
    width: 90%;

    margin: 0 auto;
}

.navbar {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 7% 5fr 1fr;
    align-items: center;

}

.homepage-laddingpagecontainer {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 8fr;
    height: 100vh;

    gap: 0.5px;
    width: 100%;
    background-image: url(/homepage/mainhomepage.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

}

.item {
    border: 1px solid red;

}

@media (min-width:1100px) {

    .hamberger i {
        display: none;
    }
}

@media (min-width:200px) {
    .sidebar {
        display: none;
    }
}
@media (max-width : 1750px) {
   .navbar{
    grid-template-columns: 90px 8fr 1fr;
   }
}
@media (max-width : 1350px) {
    .navbar-list ul li {
        font-size: 1rem;
    }

    .search a {
        font-size: 1rem;
    }
}

@media (max-width : 1275px) {
    .titleproduct5 h1 {
        font-size: 5.5rem;
    }
}


@media (max-width : 1579px) {
    .search a{
        display: none;
    }

}
@media (max-width : 1130px) {
    .titleproduct5 h1 {
        font-size: 4.5rem;
    }
  
    .contentvision {
        flex-direction: column;
    }
    .titleproduct5{
        align-items: end;
    }

}

@media (max-width : 1100px) {

    .navbar-list ul {
        display: none;

    }
    
    .navbar-list {
        display: flex;
        justify-content: end;
    }
    .search a{
        display: none;
    }

}

@media (max-width : 1010px) {

    .navbar-list ul {
        display: none;
    }


}

@media (max-width : 920px) {
    .titleproduct5 h1 {
        font-size: 4rem;
    }
}

@media (max-width : 990px) {
    .search a {
        display: none;
    }
}

@media (max-width : 760px) {




    .titleproduct5 h1 {
        font-size: 3.5rem;
    }

    .homepage-laddingpagecontainer {
        background-image: url(/homepage/mobileside.webp);
        background-repeat: no-repeat;
        background-position: left;
        background-size: cover;


    }
}


@media (max-width : 826px) {
    .descriptionproduct5 p {
        font-size: 1.1rem;
    }


}

@media (max-width : 664px) {
    .titleproduct5 h1 {
        font-size: 3rem;
        text-align: center;
    }

}

@media (max-width : 617px) {
    .titleproduct5 h1 {
        font-size: 2.5rem;
        text-align: center;
    }

}


@media (max-width : 375px) {
    .titleproduct5 h1 {
        font-size: 3rem;
    }
}
</style>