<script setup lang="ts">
    const linkNames = ['Accueil', 'Biographie', 'Contactez-moi'];
    const linkRoutes = ['/', '/bio', '/contact'];
</script>

<template>
    <v-app-bar class="d-flex">
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