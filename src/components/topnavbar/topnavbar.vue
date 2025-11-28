<template>

    <div class="topsidecontent">

        <div class="containertopcontent">
            <div class="gridtopcontentcontainer">
                <div class="item location">
                    <i class="fa-solid fa-location-dot"></i>
                    <p>Kaysone Phomvihane Avenue, Vientiane, Laos</p>
                </div>
                <div class="item topmenubar">
                        <div class="boxtopmenu social">
                         <i class="fa-brands fa-facebook-f"></i>
                         <i class="fa-solid fa-globe"></i>
                        </div>
                        <div class="boxtopmenu register"> 
                            <i class="fa-solid fa-user"></i>
                            <p>Register</p>
                        </div>
                        <div class="boxtopmenu login"> 
                        <i class="fa-solid fa-lock"></i>
                        <p>Login</p>    
                        </div>
                </div>
            </div>
        </div>

    </div>

    <navbar>



    </navbar>
</template>



<style scoped>
.login p{
    font-size: 1.2rem;
}
.login i{
    padding-right: 25px;
    font-size: 1.5rem;
}
.login{
    padding: 1rem;
    border: 1px solid salmon;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60%;
    font-family: "Inter";
 
}
.register p{
    font-size: 1.2rem;
}

.register i {
    padding-right: 25px;
    font-size: 1.5rem;
}
.register{
    border: 1px solid red;
    padding: 1rem;
    display: flex;
    justify-content: center;
    font-family: "Inter";
    align-items: center;
    height: 60%;
        border-right: 1px solid rgba(255, 255, 255, 0.612);
}
.social i{
    font-size: 1.5rem;
    margin-right: 20px;
}
.social{
    border: 1px solid blue;
    padding: 1rem;
    font-size: 1.5rem;
    color: #fff;
    display: flex;
    height: 60%;
    justify-content: center;
    align-items: center;
    border-right: 1px solid rgba(255, 255, 255, 0.612);
  
}
.location i{
    font-size: 1.5rem;
    padding-right: 10px;
  
}
.location p {
    font-size: 1.2rem;
}
.location{
    display: flex;
    align-items: center;
    
    font-family: "Inter";
}

.topmenubar{
    display: grid;
    align-items: center;
    
    grid-template-columns: 1fr 1fr 1fr;
}
.containertopcontent{
    width: 90%;
    height: 100%;
    margin: 0 auto;
    
}
.gridtopcontentcontainer {
    color: #fff;
    height: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;



}

.item {
    border: 1px solid red;
}

.topsidecontent {
    width: 100%;
    height:9vh;
    background-color: rgb(8, 0, 41);
}

.listnavbar {
    width: 50%;
    height: 100%;


}

.logo img {
    width: 20%;

}

.logo {
    display: flex;
    align-items: center;
    width: 50%;
    height: 100%;

}

.navbar {
    width: 100%;
    height: 4rem;
    background-color: red;
}

@media (max-width:640px) {
 .gridtopcontentcontainer{
    grid-template-columns: 1fr;
 }   
 .location{
    display: none;
 }

}
@media (max-width:710px) {
 .gridtopcontentcontainer{
    grid-template-columns: 1fr;
 }   
 .location{
    display: none;
 }

}
</style>