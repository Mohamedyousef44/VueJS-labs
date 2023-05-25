import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { createWebHistory,createRouter } from 'vue-router';
import HomeComponent from './components/props/lab2/HomeComponent.vue'
import AboutComponent from './components/props/lab2/AboutComponent.vue'
import ProfileComponent from './components/props/lab2/ProfileComponent.vue'
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
    // {
    //     path:'/:NotFound(.*)*',component:errorApp,meta:{hideNavbar:true}
    // }
  ]
const router = createRouter({
    history:createWebHistory(),
    routes
})
createApp(App).use(router).mount('#app')
