import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import vToggleBg from './directives/v-toggle-bg';

const app = createApp(App);

// Register v-toggle-bg custom directive globally
app.directive('toggle-bg', vToggleBg);

app.mount('#app');
