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
   <div id="footer_items">
      <router-link to="/terms">
        <h3 id="terms">terms of use</h3></router-link>
    </div>
     <div id="footer_item">
      <router-link to="/terms">
        <h3 id="terms">terms of u</h3></router-link>
    </div>
    <div id="footer_ite">
      <router-link to="/terms">
        <h3 id="terms">terms of </h3></router-link>
    </div>
   <div id="counter">
   <!-- Contador de visitas --> 
    <center><a title="Contador De Visitas Gratis">
     <img alt="contador de visitas" src="http://www.websmultimedia.com/contador-de-visitas.php?id=275729"></a>
    </center>
<!-- Fin Contador de visitas --> 
    </div>
    
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
#counter {
 border: 0px solid;
 display: flex;
 }
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
  display: flex;
  justify-content: space-between
}
footer > #counter{
  display: flex;
  justify-items: center;
}
#terms{
  font-family: "Lilita One";
  font-size: 15px;
  color:black;
  text-shadow: 1px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
}
h4{
  color:black;
}
</style>
