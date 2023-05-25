import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { VueRouter } from 'vue-router'
import HomeComponent from './components/props/lab2/HomeComponent.vue'
import App from './App.vue'

const router = new VueRouter({
    routes: [
      { path: '/', component: HomeComponent },
    //   { path: '/about', component: About }
    ]
  });

createApp(App).use(router).mount('#app')
