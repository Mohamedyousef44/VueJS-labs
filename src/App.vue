<template>
  <div class="container-fluid">
    <NavbarComponent />
    <HomeComponent />
    <FooterComponent />
  </div>
</template>

<script>
import HomeComponent from './components/props/lab2/HomeComponent.vue';
import NavbarComponent from './components/props/lab2/NavbarComponent.vue';
import FooterComponent from './components/props/lab2/FooterComponent.vue'

export default {
  name: 'App',
  components:{
    HomeComponent,
    NavbarComponent,
    FooterComponent,
  }
};
</script>

<style></style>