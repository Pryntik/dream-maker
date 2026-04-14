<script setup lang="ts">
    import './styles/app.scss';

    const linkNames = ['Accueil', 'Biographie', 'Contactez-moi'];
    const linkRoutes = ['/', '/bio', '/contact'];
</script>

<template>
    <v-app-bar class="navbar">
        <v-btn
            v-for="link in linkNames"
            :key="link"
            :text="link"
            @click="$router.push(linkRoutes[linkNames.indexOf(link)])"
            variant="text"
            class="mr-5"
            rounded>
      </v-btn>
    </v-app-bar>
</template>