<template>
    <div class="container-fluid movies-con mt-5 py-3">
        <button @click="addDirective">click</button>
        <router-link class="text-decoration-none" to="/movie/create"> <button class="btn btn-light my-4 ms-2">Create New Movie</button></router-link>
        <div class="row">
            <div class="col-12 col-md-3 d-flex flex-column justify-content-between align-items-center movie-card" v-for="movie of movies" :key="movie.id">
                <router-link class="text-decoration-none" :to = "movieUrl(movie.id)">
                <img class="cus-img" v-src="movieImage(movie.image)"  alt="card">
                <div class="text-light">
                    <p>{{ movie.Title }}</p>
                    <p>{{ movie['Release Date'] }}</p>
                    <p>{{ movie.Rating }}</p>
                </div>
                <div class="d-flex justify-content-center my-2">
                    <button class="btn btn-light" @click="deleteMovie(movie.id)"><i class="fs-4 bi bi-trash3"></i></button>
                </div>
                </router-link>
            </div>
        </div>
    </div>
    <div>{{data}}</div>
</template>
<script>
import axios from "axios";
export default {
 data(){
    return{
        movies : [],
    }
  },
    methods:{
        addDirective(){
            let el = this.$el
            el.setAttribute('v-dark' , 'dark-mode')
            console.log(el)
        },
        // getAllMovies(){
        //     axios.get('http://localhost:3000/movies')
        //     .then(result=>{
        //         console.log(result.data)
        //         this.movies = result.data
        //     }).catch(err=>{
        //         console.log(err)
        //     })
        // },
        deleteMovie(id){
            axios.delete('http://localhost:3000/movies/'+id)
            .then(()=>{
                
                this.getAllMovies()
                this.$router.push("/movies");
            }).catch(err=>{
                console.log(err)
            })
        },
        movieUrl(id){
            return `/movies/${id}`
        },
        movieImage(src){
            return `@/assets/${src}`

        }
    },
    // created(){
    //     this.getAllMovies()
    //     this.fetchData()
    // }
}
</script>
<script setup>
import { onMounted } from 'vue';
import {useService} from '@/service'

const{data:movies , fetchData:getMovies} = useService()

onMounted(async ()=>{
    await getMovies()
})

</script>

<style>
.movies-con{
    background-color: rgb(24, 24, 24);
}
.cus-img{
    width:90%;
    aspect-ratio: 21/22;
    object-fit: cover;
    cursor: pointer;
    transition: all .8 ease-in-out;
}
.cus-img:hover{
    transform: scale(1.02);
}
.movie-card{
    /* border: solid 2px white */
}

.dark-mode{
    background-color: rgb(250, 250, 250);
}
.dark-mode button{
    background-color: black;
    color:white;
}
.dark-mode p{
    color:black;
}
    
</style>