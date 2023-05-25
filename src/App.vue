<template>
  <div class="container-fluid">
    <NavbarComponent />
    <HomeComponent />
  </div>
</template>

<script>
import HomeComponent from './components/props/lab2/HomeComponent.vue';
import NavbarComponent from './components/props/lab2/NavbarComponent.vue';

export default {
  name: 'App',
  components:{
    HomeComponent,
    NavbarComponent,
  }
};
</script>

<style></style>