<template>
  <div id="app">
    <br><br>
    <div>
    <nav id="navbar" class="navbar navbar-expand-md  bg-primary navbar-dark fixed-top">
    <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#myNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse navbar-right" id="myNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="https://searchactors.herokuapp.com/">Busca tus pelis</a>
        </li>
      </ul>
    </div>
  </nav>
  <Adsense adSlot = '3791641209'></Adsense>
</div> 
<router-view/>   
 <footer>
   <router-link to="/terms">
        <h3 id="footer_items">terms of use</h3></router-link>|
      </footer>
  </div>
</template>

<script>
import Home from './components/favoritemovie.vue'
import Adsense from './components/Adsense.vue'
export default {
  name: 'App',
  components: {
    Adsense,
    Home
  }
}
</script>

<style>
#navbar{
 font-family: "Lilita One", cursive;
 font-size: 20px;
 height: 45px;
}
#app{
  background-image: url(assets/tom.jpg);
  text-align: center;
  height: 100vh !important;
}
footer{
  background: rgb(15, 127, 219);
  text-align: center;
   position: fixed;
   bottom: 0;
   width: 100%;
   height: 20px;
    z-index: 1;
}
#footer_items{
  font-family: "Lilita One";
   font-size: 15px;
color:black;
   text-shadow: 1px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;

}
h4{
  color:black;
}
</style>
