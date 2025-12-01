<script setup>
import productDropdown from '../dropdown-homepage/product-dropdown.vue';
import aboutusdropdown from '../dropdown-homepage/aboutusdropdown.vue';
import memberdropdown from '../dropdown-homepage/memberdropdown.vue';
</script>

 

<template>
    <div class="navbarcontainerview">
        <div class="logolapnet">
            <img src="/logolapnet/logolapnet.PNG" alt="">
            <img src="/logolapnet/textlogo.PNG" alt="">
        </div>
        <div class="listnav">
            <ul>
                <li><product-dropdown/></li>
                <li><memberdropdown/></li>
                <li>ຂ່າວສານ ແລະ ກິດຈະກຳ</li>
                <li>ຮ່ວມງານກັບເຮົາ</li>
                <li><aboutusdropdown/></li>
                <li>ຕິດຕໍ່ພວກເຮົາ</li>
            </ul>
            
        </div>
    </div>
    <div class="navigator"></div>

</template>


<style scoped>
.navigator{
    width: 100%;
    height: 40vh;
    border: 1px solid red;
}
.listnav ul li{
    color: #fff;
    border: 1px solid red;
    font-size: 1.2rem;
    margin-left: 50px;
    margin-right: 10px;
  
  
}
.listnav ul{
    display: flex;
    align-items: center;
    
  

    border: 1px solid salmon;


}
.listnav{
 width: 100%;
 height: 100%;
 display: flex;
 align-items: center;
 border: 1px solid blue;
}
.logolapnet img{
    width: 35%;
    height: auto;
}
.logolapnet{
    justify-content: center;
    align-items: center;
    width: 25%;
    display: flex;
    height: 100%;
    border: 1px solid salmon;
}
.navbarcontainerview{
    display: flex;
    width: 100%;
   
    height: 15vh;
    border: 1px solid red;
    background-image: url(/navbar/navbar-bg.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;

}
</style>