<template>
<body>
  <div id="app">
    <br><br>
    <div>
   <div>
  <b-navbar toggleable="sm" class="navbar navbar-expand-md  bg-primary navbar-dark fixed-top">
    <b-navbar-brand href="https://searchactors.herokuapp.com/">Busca tus pelis</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
       <!-- <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>-->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
  <Adsense adSlot = '3791641209'></Adsense>
</div> 
<router-view/> 
 <footer>
   <div id="footer_items">
     <ul>
       <li>
          <router-link to="/terms">
        terms of use</router-link>
       </li>
       <li>
        <router-link to="/terms">
        terms of u</router-link>
       </li>
       <li>
          <!-- Contador de visitas --> 
    <center><a title="Contador De Visitas Gratis">
     <img alt="contador de visitas" src="http://www.websmultimedia.com/contador-de-visitas.php?id=275729"></a>
    </center>
<!-- Fin Contador de visitas --> 
       </li>
     </ul> 
   </div> 
 </footer>
  </div>
  </body>
</template>

<script>
import Home from './components/favoritemovie.vue'
import Adsense from './components/Adsense.vue'
export default {
  name: 'App',
  components: {
    Adsense,
    Home
  },
  methods: {
    toggleNavbar() {
      this.show = !this.show;
    }
  }

}
</script>

<style>
#counter {
 border: 0px solid;
 }
#navbar{
 font-family: "Lilita One", cursive;
 font-size: 20px;
 height: 45px;
}
body{
  background-image: url(assets/tom.jpg);
  text-align: center;
}
footer{
  background: rgb(15, 127, 219);
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 20px;
  z-index: 1;
}
h4{
  color:black;
}
li{
  list-style:none;
   font-family: "Lilita One";
  font-size: 15px;
  color:black;
  text-shadow: 1px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
  padding:2px;
}
#footer_items ul li {
  display: inline;
}
@media only screen and (max-width: 768px){
  
}
</style>
