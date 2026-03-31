<script setup lang="ts">
    import Navbar from './Navbar.vue';
</script>

<template>
    <v-app class="v-app">
        <Navbar/>
        <RouterView/>
    </v-app>
</template>

<style scoped></style>