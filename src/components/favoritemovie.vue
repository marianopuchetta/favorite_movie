<template>
<body>
  <div id="favoriteMovie" class="container">
    <h1>Movies with your favorites actors</h1>
    <br />
    <br />
    <div>
      <label for>Enter your favorite Actress/Actor name</label>
      <br />
      <input id="person" v-model="person" type="text" />
    </div>
    <br />
    <button v-on:click="retrievePersons() , getGenre()" class="btn btn-success">Find</button>
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
</body>
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
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Lilita+One&display=swap");
@import url("https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap");
@import url("https://fonts.googleapis.com/css?family=Acme&display=swap");
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
h1 {
  font-size: 85px;
  font-family: "Lilita One", cursive;
}
p{
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
}
body {
  text-align: center;
  background-color: azure;
 
}
label {
  font-size: 25px;
  font-family: "Acme";
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
  background-color: rgba(67, 228, 166, 0.5);
 margin:50px;
}
.card-columns{
 grid-gap: 1rem;
}
img{
  width: 100%;
}

</style>
