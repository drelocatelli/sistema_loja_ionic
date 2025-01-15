import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';
import 'vuetify/styles'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { createPinia } from 'pinia';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* @import '@ionic/vue/css/palettes/dark.always.css'; */
/* @import '@ionic/vue/css/palettes/dark.class.css'; */
// import '@ionic/vue/css/palettes/dark.system.css';

/* Theme variables */
import '@/theme/variables.css';
import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify/lib/framework.mjs';
import DashboardLayout from './layout/DashboardLayout.vue';


const Vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  }
});

const pinia = createPinia()
const app = createApp(App)
.use(IonicVue, {mode: 'md'})
.use(Vuetify)
.use(router)
.use(pinia)

app.component('dashboard-layout', DashboardLayout)

router.isReady().then(() => {
  app.mount('#app');
});
