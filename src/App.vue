<template>
  <div id="app">
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
</div>    
    <Adsense adSlot = '3791641209'></Adsense>
 <footer>
   <router-link to="/terms">
        <h3 id="footer_items">term of use</h3></router-link>|
      </footer>
    <router-view/>
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
  background-image: url(assets/tom.jpg),url(assets/dumb.jpg);
  background-position: 710px 162px,58px 80px;
  background-repeat: no-repeat;
  text-align: center;
  height: 100%;
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
color:white;
}
h4{
  color:black;
}
</style>
