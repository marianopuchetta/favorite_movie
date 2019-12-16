<template>
  <div id="favoriteMovie" class="container">
    <br><br>
    <h1 id="peliculas">Peliculas con tus actores favoritos</h1>
    <br><br>
    <div>
      <label for>Escribe el nombre de tu actriz/actor favorito</label>
      <br />
      <input id="persona" v-model="person" type="text" v-on:keypress ="name_autocomplete()" />
    </div>
    <br />
    <button v-on:click="retrievePersons() , getGenre()" class="btn btn-success">Buscar</button>
    <br />
    <br />
<div class="card-columns">
    <div v-for="(star,index) in stars.results" :key="index">
        <div v-for="(movie,inde) in star.known_for" :key="inde">
          <div id="movie_container" class="card">
             <img :src="'https://image.tmdb.org/t/p/w500' + movie.backdrop_path" />
             <div class="card-body">
              <h3 class="card-title">{{movie.title}}</h3>
              <p class="card-text">{{movie.overview}}</p>
                <div v-for="(genre,ind) in genres_ids_array" :key="ind">
                 <div class="card-footer"  >
                  <div v-for="(genr,indice) in genres_ids_array.genres" :key="indice" >
                    <div v-for="(genre_on_movie,indic) in movie.genre_ids" :key="indic">
                        <div id="genre_figure" v-if="genr.id == genre_on_movie" >
                         <h5>{{genr.name}}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
             </div>
         </div>
        </div>
        </div>
        <br>
      </div>
  </div>
</template>
<script>
import { AXIOS } from './http-common'

export default {
  name: 'FavoriteMovie',
  data () {
    return {
      stars: [],
      genres_ids_array: [],
      person: this.person,
      genre_to_display: ''
    }
  },
  methods: {
    // eslint-disable-next-line
    retrievePersons() {
      AXIOS.get(
        'https://api.themoviedb.org/3/search/person?api_key=84110e5384a12f9c5a467f297b4b12b3&language=en-US&query=' +
          this.person +
          '&include_adult=false'
      )
        .then(response => {
          this.stars = response.data
        })
        /*eslint-disable*/
        .catch(e => {
          console.log(e);
        });
    },
    getGenre() {
       AXIOS.get(
         'https://api.themoviedb.org/3/genre/movie/list?api_key=84110e5384a12f9c5a467f297b4b12b3&language=en-US'
       )
         .then(response => {
           this.genres_ids_array = response.data
         })
         /*eslint-disable*/
        .catch(e => {
          console.log(e);
        });
        console.log(this.stars.results[1].known_for)
    },
    name_autocomplete(){
var provincias = ["a coruna","alava","albacete","alicante","almeria","asturias","avila","badajoz","baleares","barcelona","burgos","caceres","cadiz","cantabria","castellon","ceuta","ciudad real","cordoba","cuenca","girona","granada","guadalajara","guipuzcoa","huelva","huesca","jaen","la rioja","las palmas","leon","lleida","lugo","madrid","malaga","melilla","murcia","navarra","ourense","palencia","pontevedra","salamanca","tenerife","segovia","sevilla","soria","tarragona","teruel","toledo","valencia","valladolid","vizcaya","zamora","zaragoza"];
 ("#persona").autocomplete({
      source: provincias
    });
    console.log('hello')
    },
    seePicture() {
      image.onmouseover = () => {};
    }
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url("https://fonts.googleapis.com/css?family=Lilita+One&display=swap");
@import url("https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap");
@import url("https://fonts.googleapis.com/css?family=Acme&display=swap");
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

#peliculas{
  color:rgba(21, 138, 138, 0.9);
  font-size: 85px;
  font-family: "Lilita One", cursive;
 text-shadow: 4px 0 0 rgb(17, 17, 17), -2px 0 0 #fff, 0 2px 0 rgb(15, 15, 15), 0 -2px 0 #fff, 1px 1px rgb(15, 15, 15), -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
}
p{
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
}
label {
  color:rgb(9, 52, 102);
  font-size: 25px;
  font-family: "Acme";
 text-shadow: 1px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
}
label:hover {
  color: red;
  font-size: 35px;
  transition-duration: 3s;
}
h3 {
  font-size: 27px;
  font-family: "Permanent Marker", cursive;
  color: rgba(241, 66, 66, 0.9);
  text-shadow: 1px 1px 2px rgb(238, 238, 240);
}
h5 {
  font-size: 12px;
  font-family: "Permanent Marker";
  color: rgb(24, 9, 9);
  text-shadow: 1px 1px 1px rgb(167, 111, 111);
}
.card-footer{
 display:flex;
 justify-content:center;
}
 #genre_figure{
  border-radius: 25px;
  width: 63px;
  height: 28px;
  border: 1px solid;
  background-color: rgba(70, 129, 107, 0.5);
  margin: 3px;
   display:flex;
 justify-content: center;
}

input {
  text-align: center;
  font-family: "Lilita One", cursive;
}
.card {
  border: 1px solid;
  background-color: rgba(67, 228, 166, 0.8);
 margin:50px;
}
.card-columns{
 grid-gap: 1rem;
}
img{
  width: 100%;
}
</style>
