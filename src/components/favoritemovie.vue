<template>
  <div id="favoriteMovie" class="container">
    <div>
      <h1 id="peliculas">Find your favorite movies or actors</h1> 
    </div>
    <div>
      <label for>Write the name of an actor or movie</label>
      <br>
      <input id="persona" v-model="person" type="text" v-on:keypress ="name_autocomplete()" />
    </div>
    <br>
    <button v-on:click="retrievePersons() , getGenre()" class="btn btn-success">Buscar</button>
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
    seePicture() {
      image.onmouseover = () => {};
    }
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
.container{
  margin-top: 5%;
  
}
#peliculas{
  color:rgba(21, 138, 138, 0.9);
  font-size: 5em;
  font-family: 'Roboto';
   font-weight: 900;
  }
p{
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
}
label {
  color:rgb(9, 52, 102);
  font-size: 1.8em;
  font-family: 'Roboto', sans-serif;
 text-shadow: 1px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
}
label:hover {
  color: red;
  font-size: 2em;
  transition-duration: 3s;
}
h3 {
  font-size: 1.7em;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: rgba(241, 66, 66, 0.9);
  text-shadow: 1px 1px 2px rgb(238, 238, 240);
}
h5 {
  font-size: .8em;
  font-family: 'Roboto', sans-serif;
  color: rgb(24, 9, 9);
}
.card-footer{
 display:flex;
 justify-content:center;
}
 #genre_figure{
  border-radius: 25px;
  width: 100%;
  height: 40%;
  border: 1px solid;
  background-color: rgba(70, 129, 107, 0.5);
  margin: 1vh;
  display:flex;
 justify-content: center;
 align-items: center;
}

input {
  text-align: center;
  font-family: 'Roboto', sans-serif;
}
.card {
  border: 1px solid;
  background-color: rgba(67, 228, 166, 0.8);
  margin:10vh;
}
.card-columns{
 grid-gap: 1rem;
}
img{
  width: 100%;
}
@media only screen and (max-width: 768px){
  #peliculas{
    font-size: 3.5em;
  }
   #genre_figure{
  border-radius: 25px;
  width: 100%;
  height: 40%;
  background-color: rgba(70, 129, 107, 0.4);
  margin: 1vh;
}
h5 {
  font-weight: 800;
  font-size: .8em;
}
}
</style>
