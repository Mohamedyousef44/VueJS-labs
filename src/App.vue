<template>
  <div class="container-fluid">
    <NavbarComponent />
    <router-view></router-view>
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from './components/props/lab2/NavbarComponent.vue';
import FooterComponent from './components/props/lab2/FooterComponent.vue'

export default {
  name: 'App',
  components:{
    NavbarComponent,
    FooterComponent,
  }
};
</script>

<style></style>