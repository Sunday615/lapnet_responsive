
import { createApp } from 'vue';

import router from './router';
import { gsap } from "gsap";
import App from './App.vue';

const app = createApp(App);

app.use(router);
app.use(gsap)
app.mount('#app');