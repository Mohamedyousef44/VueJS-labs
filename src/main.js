import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { createWebHistory,createRouter } from 'vue-router';
import HomeComponent from './components/props/lab2/HomeComponent.vue'
import AboutComponent from './components/props/lab2/AboutComponent.vue'
import ProfileComponent from './components/props/lab2/ProfileComponent.vue'
import NotFoundComponent from './components/props/lab2/NotFoundComponent.vue'
import MoviesComponent from './components/props/lab2/MoviesComponent.vue'
import MovieFormComponent from './components/props/lab2/MovieFormComponent.vue'
import MovieDetailsComponent from './components/props/lab2/MovieDetailsComponent.vue'
import App from './App.vue'

const routes = [
    { 
        path: '/', component: HomeComponent
    },
    { 
        path: '/about', component: AboutComponent
    },
    { 
        path: '/profile', component: ProfileComponent
    },
    { 
        path: '/movies', component: MoviesComponent
    },
    { 
        path: '/movie/create', component: MovieFormComponent
    },
    { 
        path: '/movies/:id', component: MovieDetailsComponent
    },
    {
        path:'/:NotFound(.*)*', component:NotFoundComponent, meta:{hideNavbar:true}
    }
  ]
const router = createRouter({
    history:createWebHistory(),
    routes
})
createApp(App).use(router).mount('#app')
