<script setup>
import topnavbar from '../../components/topnavbar/topnavbar.vue';
import aboutusdropdown from '../../components/dropdown-homepage/aboutusdropdown.vue';
import memberdropdown from '../../components/dropdown-homepage/memberdropdown.vue';
import productDropdown from '../../components/dropdown-homepage/product-dropdown.vue';
import search from '../../components/search/search.vue';
</script>

<template>

<topnavbar/>
    <div class="homepage-laddingpagecontainer">
        <div class="mainhomepagecontainer">
            <div class="item navbar">
            <div class="homepagelogolapnet" style="border: 1px solid red;">
                <img src="/logolapnet/logolapnet.PNG" alt="">
            </div>
            <navbar class="navbar-list" style="border: 1px solid red;">
                <ul>
                    <li><productDropdown /></li>
                    <li><memberdropdown/></li>
                    <li>ຂ່າວ ແລະ ກີດຈະກຳ</li>
                    <li>ຮ່ວມງານກັບເຮົາ</li>
                    <li><aboutusdropdown/></li>
                    <li>ຕິດຕໍ່ພວກເຮົາ</li>
         

                </ul>
            </navbar>
            <div class="search" style="border: 1px solid red;">
                <a href="#">EN /</a>
                
                <a href="#" style="margin-right: 20px;">LA </a>
                <search/>
            </div>
            
        </div>
        </div>
    <div class="item homecontainer"></div>
    </div>
</template>


<style scoped>
.search{
    display: flex;
    justify-content: center;
    align-items: center;
   
}

.search a{
    color: #fff;
    font-size: 1.2rem;
    text-decoration: none;
    font-family: "Inter";
   

}
.navbar-list ul li{
    font-size: 1.2rem;
    font-weight: 500;
}
.navbar-list ul{
    list-style: none;
      font-family: "Noto Sans Lao", sans-serif;
    display: flex;
    color: #fff;
    align-items: center;
    justify-content: space-between;


}

.homepagelogolapnet img{
    width: 9vh;
    height: 9vh;
}
.mainhomepagecontainer{
    width: 90%;
  
    margin: 0 auto;
}
.navbar{
    display: grid;
    grid-template-columns: 10% 5fr 1fr ;
    align-items: center;
    
}
.homepage-laddingpagecontainer{
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
.item{
    border: 1px solid red;

}
@media (max-width : 1350px)  {
    .navbar-list ul li{
        font-size: 1rem;
    }
    .search a{
        font-size: 1rem;
    }
}

</style>