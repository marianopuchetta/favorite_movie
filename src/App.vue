<template>
<body>
  <div id="app">
    <div>
   <div>
  <b-navbar toggleable="sm" class="navbar navbar-expand-md  bg-primary navbar-dark fixed-top">
    <b-navbar-brand href="https://searchactors.herokuapp.com/">Find your movies</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</div> 
<router-view/> 
 <footer>
   <div id="footer_items">
     <ul>
       <li>
          <router-link to="/terms">
        terms of use</router-link>
       </li>
     </ul> 
   </div> 
 </footer>
  </div>
  </body>
</template>

<script>
import Home from './components/favoritemovie.vue'
export default {
  name: 'App',
  components: {
    Home
  },
  methods: {
    toggleNavbar() {
      this.show = !this.show;
    }
  }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
body{
text-align: center;
}
#navbar{
 font-size: 20px;
 height: 45px;
}

footer{
  background: rgb(15, 127, 219);
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 3%;
  z-index: 1;
}
#footer_items ul li {
  list-style:none;
  font-size: .8em;
  text-shadow: 1px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
}
h4{
  color:black;
}
@media only screen and (max-width: 768px){
  
}
</style>
<style >
*{
  margin:0px;
  padding:0px;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
</style>
