<template>
    <div class="container-fluid mt-5 py-4">
      <div class="row">
        <div class="col-md-6 mx-auto">
          <h2 class="mb-4">{{ movie.Title }}</h2>
          <img class="cus-image" :src="movieImage(movie.image)" alt="poster">
          <div class="card">
            <div class="card-body">
              <p><strong>Release Date:</strong> {{ movie["Release Date"] }}</p>
              <p><strong>Rating:</strong> {{ movie.Rating }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        movie: {
          Title: "",
          "Release Date": "",
          Rating: "",
          src:""
        },
      };
    },
    methods: {
      getMovieById() {
        const id = this.$route.params.id;
        axios
          .get(`http://localhost:3000/movies/${id}`)
          .then((response) => {
            this.movie = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
      movieImage(src){
            return require(`@/assets/${src}`)     
        }
    },
    created() {
      this.getMovieById();
    },
  };
  </script>
  
  <style>
  .cus-image{
    width: 100%;
    aspect-ratio: 21/31;
    object-fit: cover;
  }
  </style>