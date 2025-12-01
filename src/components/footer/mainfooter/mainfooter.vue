<script setup>
import footerinfocomponent from './footerinfocomponent.vue';
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
        <div class="maincontentfooter "></div>
    </footer>
</template>



<style scoped>


.description p {
    padding-left: 10px;
    font-size: 1.2rem;
    color: #fff;
}

.iconinfofooter i {
    box-shadow: rgba(0, 0, 0, 0.4) -5px 5px, rgba(32, 14, 26, 0.3) -10px 10px, rgba(38, 21, 32, 0.2) -15px 15px, rgba(27, 12, 22, 0.1) -20px 20px, rgba(13, 6, 10, 0.05) -25px 25px;
    padding: 20px 40px;
    border-radius: 5px;
    border: 1px solid red;
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
    border: 1px solid blue;
}

.logofooter img {
    width: 28%;
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
    border: 1px solid red;
    width: 90%;
    height: 70%;
    display: flex;
    align-items: center;

    border: 1px solid red;

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
    height: 20vh;
    border: 1px solid salmon;

}

@media (max-width: 1320px) {
    .infofooter{
        grid-template-columns: 2fr 1fr 1fr;
    }
    .location{
        display: none;
    }
    
}
@media (max-width: 939px) {
    .infofooter{
        grid-template-columns: 2fr 1fr ;
    }
    .callus{
        display: none;
    }

    .logofooter{
        justify-content: start;
    }
    
}
</style>