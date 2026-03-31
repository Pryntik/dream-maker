import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import './styles/tailwind.css';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import { createApp } from 'vue';

const app = createApp(App);

app.use(router).use(vuetify);

app.mount('#app');