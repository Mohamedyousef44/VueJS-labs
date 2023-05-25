<template>
  <div class="container-fluid">
    <NavbarComponent v-if="!$route.meta.hideNavbar" />
    <router-view></router-view>
    <FooterComponent v-if="!$route.meta.hideNavbar" />
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