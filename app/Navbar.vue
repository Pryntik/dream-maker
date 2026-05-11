<script setup lang="ts">
    import './styles/app.scss';

    const linkNames = ['Accueil', 'Biographie', 'Contactez-moi'];
    const linkRoutes = ['/', '/bio', '/contact'];
</script>

<template>
    <v-tabs class="v-tabs">
        <v-tab
            v-for="link in linkNames"
            :key="link"
            :text="link"
            @click="$router.push(linkRoutes[linkNames.indexOf(link)])"
            class="v-tab"
            variant="text">
      </v-tab>
    </v-tabs>
</template>