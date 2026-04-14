<script setup lang="ts">
    import './styles/app.scss';
    import Navbar from './Navbar.vue';
</script>

<template>
    <v-app class="v-app">
        <Navbar/>
        <RouterView class="route-app"/>
    </v-app>
</template>

<style scoped></style>