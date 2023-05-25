<template >
    <div class="container-fluid mt-5 pt-3 cover-banner d-flex justify-content-center align-items-center">
        <div>
            <h1 class="text-light">Start Your Journey</h1>
            <router-link class="btn btn-light" to="/movies">Get Started</router-link>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.cover-banner{
    background-image: url('@/assets/banner (2).jpg');
    min-height: 100vh;
    width: 100%;
    object-fit: cover;
}
    
</style>