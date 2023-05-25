<template>
    <div class="container-fluid mt-5 py-4">
      <div class="row">
        <div class="col-md-6 mx-auto">
          <form @submit.prevent="createMovie">
            <div class="form-group">
              <label for="title">Title:</label>
              <input type="text" class="form-control" id="title" v-model="newMovie.Title" required>
            </div>
            <div class="form-group">
              <label for="releaseDate">Release Date:</label>
              <input type="date" class="form-control" id="releaseDate" v-model="newMovie['Release Date']" required>
            </div>
            <div class="form-group">
              <label for="rating">Rating:</label>
              <input type="number" class="form-control" id="rating" v-model="newMovie.Rating" required>
            </div>
            <button type="submit" class="btn btn-dark">Create Movie</button>
          </form>
        </div>
      </div>
    </div>
  </template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      newMovie: {
        Title: "",
        "Release Date": "",
        Rating: "",
      },
    };
  },
  methods: {
    createMovie() {
      axios
        .post("http://localhost:3000/movies", this.newMovie)
        .then((response) => {
          console.log(response);
          this.newMovie.title = "";
          this.newMovie.releaseDate = "";
          this.newMovie.rating = "";
          this.$router.push("/movies");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style lang="">
    
</style>