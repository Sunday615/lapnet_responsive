<script setup>
import footerinfocomponent from './footerinfocomponent.vue';
import buttonnavigator from './buttonnavigator.vue';
</script>


<template>


    <footer class="mainfootercontianer">
        <div class="infofooter">
            <div class="iteminfofooter logofooter">
                <img src="/logolapnet/logolapnet.PNG" alt="LAPNet Logo">
                <img src="/logolapnet/textlogowhite.PNG" alt="">
            </div>
            <div class="iteminfofooter callus ">
                <div class="iconinfofooter">
                    <i class="fa-solid fa-phone"></i>
                </div>
                <div class="description">
                    <p>021 417915</p>
                </div>
            </div>
            <div class="iteminfofooter email ">
                <div class="iconinfofooter">
                    <i class="fa-solid fa-envelope"></i>
                </div>
                <div class="description">
                    <p>info@lapnet.com.la</p>
                </div>
            </div>
            <div class="iteminfofooter location">
                <div class="iconinfofooter">
                    <i class="fa-solid fa-location-dot"></i>
                </div>
                <div class="description">
                    <p>
                        Kaysone Phomvihane Avenue, Vientiane, Laos</p>
                </div>
            </div>
        </div>
        <div class="maincontentfooter ">
            <div class="adjustcontainer">
                <div class="mainfooterinfoitem box1desciption" style="grid-area: box1;">
                    <div class="titlemainfooter" style="border: 1px solid red;">
                        <h1>ກ່ຽວກັບບໍລິສັດ</h1>
                    </div>
                    <div class="desciptioninfofooter" style="border: 1px solid red;">
                        <p>ບ້ານໂພນສະອາດ, ໄຊເສດຖາ, ນະຄອນຫຼວງວຽງຈັນ</p>
                        <p>ເບີໂທ: 021 417915</p>
                        <p>ອີເມວ: info@lapnet.com.la</p>
                        <div class="buttonlink"><a href="https://www.facebook.com/laonationalpaymentnetwork"
                                target="_blank"><i class="fa-brands fa-facebook"></i>Lao National Payment Network</a>
                        </div>
                    </div>
                    <div class="facebookbtn" style="border: 1px solid red;">

                    </div>
                </div>
                <div class="mainfooterinfoitem box2desciption" style="grid-area: box2;">
                    <div class="titlemainfooter" style="border: 1px solid red;">
                        <h1>ຜະລິດຕະພັນ ແລະ ການບໍລີການ</h1>
                    </div>
                    <div class="navigatorfooterbox">
                        <div class="itemproduct"><buttonnavigator title="ກວດເງິນຂ້າມທະນາຄານຜ່ານຕູ້ ATM" /></div>
                        <div class="itemproduct"><buttonnavigator title="ຖອນເງິນສົດຂ້າມທະນາຄານຜ່ານຕູ້ ATM" /></div>
                        <div class="itemproduct"><buttonnavigator title="ໂອນເງິນຂ້າມທະນາຄານຜ່ານຕູ້ ATM" /></div>
                        <div class="itemproduct"><buttonnavigator title="ໂອນເງິນຂ້າມທະນາຄານເທິງມືຖື" /></div>
                        <div class="itemproduct"><buttonnavigator title="ການຊຳລະເງິນຂ້າມທະນາຄານຜ່ານ QR" /></div>
                        <div class="itemproduct"><buttonnavigator title="ຊຳລະຂ້າມແດນຜ່ານ QR" /></div>
                    </div>
                </div>
                <div class="mainfooterinfoitem" style="grid-area: box3;">

                    <div class="titlemainfooter" style="border: 1px solid red; ">
                        <h1>ເມນູ</h1>
                    </div>
                    <div class="navigatorfooterbox">
                        <div class="itemproduct"><buttonnavigator title="ກວດເງິນຂ້າມທະນາຄານຜ່ານຕູ້ ATM" /></div>
                        <div class="itemproduct"><buttonnavigator title="ຖອນເງິນສົດຂ້າມທະນາຄານຜ່ານຕູ້ ATM" /></div>
                        <div class="itemproduct"><buttonnavigator title="ໂອນເງິນຂ້າມທະນາຄານຜ່ານຕູ້ ATM" /></div>
                        <div class="itemproduct"><buttonnavigator title="ໂອນເງິນຂ້າມທະນາຄານເທິງມືຖື" /></div>
                        <div class="itemproduct"><buttonnavigator title="ການຊຳລະເງິນຂ້າມທະນາຄານຜ່ານ QR" /></div>
                       
                    </div>
                </div>
                <div class="copyrright" style="grid-area: box4;"></div>
            </div>
        </div>
    </footer>
</template>



<style scoped>
.itemproduct h1{
    font-size: 2.5rem;
    color: #fff;
}
.navigatorfooterbox{
     padding-top: 70px;
    display: grid;
    
    grid-template-rows: repeat(6, 80px);
    grid-row-gap: 1rem;
}
.itemproduct{
    border: 1px solid red;
  

}
.buttonlink a i {
    font-size: 3rem;
}

.buttonlink {
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 100%;
    height: 90px;
    border: 1px solid red;
}

.desciptioninfofooter a {
    font-size: 1rem;
    display: flex;
    align-items: center;

    border: 1px solid #fff;
    padding: 5px 5px;
    color: white;

    border-radius: 999px;
}

.desciptioninfofooter p {
    font-size: 1.2rem;
    color: #fff;
    padding-bottom: 20px;
}

.desciptioninfofooter {
    padding-top: 70px;
}

.titlemainfooter h1 {
    font-size: 2.5rem;
    color: #fff;
    font-weight: bold;
}

.box1desciption {

    display: grid;
    grid-template-rows: auto 1fr;
}

.adjustcontainer {
    width: 90%;
    height: 90%;

    display: grid;
    grid-template-columns: auto 1fr 1fr;
    grid-column-gap: 6rem;
    grid-template-rows: 5fr 1fr;
    grid-template-areas:
        "box1 box2 box3"
        "box4 box4 box4"
    ;
    grid-auto-columns: 30%;

    grid-auto-rows: 30%;
}

.copyrright {
    border: 1px solid blue;
}

.mainfooterinfoitem {
    border: 1px solid red;
}

.description p {
    padding-left: 10px;
    font-size: 1.2rem;
    color: #fff;
}

.iconinfofooter i {
    box-shadow: rgba(0, 0, 0, 0.4) -5px 5px, rgba(32, 14, 26, 0.3) -10px 10px, rgba(38, 21, 32, 0.2) -15px 15px, rgba(27, 12, 22, 0.1) -20px 20px, rgba(13, 6, 10, 0.05) -25px 25px;
    padding: 20px 40px;
    border-radius: 5px;

    font-size: 2.5rem;
    color: #433bff;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
}

.maincontentfooter {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(/footer/footerbg.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

}

.logofooter img {
    width: 23%;
    height: auto;
}

.logofooter {
    width: 100%;
    height: 20vh;
    justify-content: center;
    display: flex;
    align-items: center;



}

.iteminfofooter {

    width: 90%;
    height: 70%;
    display: flex;
    align-items: center;



}

.infofooter {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    align-items: center;
    width: 100%;
    height: 100%;
    /* fill footer */
    background-image: url(/footer/footer-info.png);
    background-repeat: no-repeat;
    background-position: center;
    /* key line: stretch image to follow container size */
    background-size: 100% 100%;
}

.mainfootercontianer {
    width: 100%;
    height: 18vh;
   


}

@media (max-width: 1320px) {
    .infofooter {
        grid-template-columns: 2fr 1fr 1fr;
    }

    .location {
        display: none;
    }

}

@media (max-width: 939px) {
    .infofooter {
        grid-template-columns: 2fr 1fr;
    }

    .callus {
        display: none;
    }

    .logofooter {
        justify-content: start;
    }

}
</style>