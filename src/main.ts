
    import { createApp } from 'vue';
    import App from './App.vue';
    import router from './router';
     import { gsap } from "gsap";

    const app = createApp(App);

    app.use(router); 
    app.use(gsap)
    app.mount('#app');