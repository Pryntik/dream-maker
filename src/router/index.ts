import { createRouter, createWebHistory } from 'vue-router';
import Accueil from '../Accueil.vue';
import Biographie from '../Biographie.vue';
import Contact from '../Contact.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', name: 'accueil', component: Accueil },
        { path: '/bio', name: 'bio', component: Biographie },
        { path: '/contact', name: 'contact', component: Contact },
    ],
})

export default router
