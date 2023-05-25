<template>
    <div class="container-fluid movies-con mt-5 py-3 px-0">
        <button class="btn btn-light my-4">Create New Movie</button>
        <div class="row">
            <div class="col-12 col-md-3 d-flex flex-column justify-content-between align-items-center p-3 border-1" v-for="movie of movies" :key="movie.id">
                <img class="cus-img" src='@/assets/cover.jpg' alt="card">
                <div class="h-25 text-light">
                    <p>{{ movie.Title }}</p>
                    <p>{{ movie['Release Date'] }}</p>
                    <p>{{ movie.Rating }}</p>
                </div>
                <div class="h-25">
                    <button @click="deleteMovie(movie.id)">delete</button>
                    <button>show</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data(){
        return {
            movies:[],
        }
    },
    methods:{
        getAllMovies(){
            axios.get('http://localhost:3000/movies')
            .then(result=>{
                this.movies = result.data
            }).catch(err=>{
                console.log(err)
            })
        },
        deleteMovie(id){
            axios.delete('http://localhost:3000/movies/'+id)
            .then(result=>{
                console.log(result)
                this.getAllMovies()
            }).catch(err=>{
                console.log(err)
            })
        }
    },
    created(){
        this.getAllMovies()
    }
}
</script>
<style>

.movies-con{
    background-color: rgb(24, 24, 24);
    padding-left: 0 !important;
    padding-right: 0 !important;
}
.cus-img{
    width:100%;
    aspect-ratio: 21/22;
    object-fit: cover;
    cursor: pointer;
    transition: all .8 ease-in-out;
}
.cus-img:hover{
    transform: scale(1.02);
}
    
</style>