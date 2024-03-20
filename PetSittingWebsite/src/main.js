/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// VCalendar
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

// mdi icons
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiAccount } from '@mdi/js'

// SwiperJS
import { Swiper, SwiperSlide } from 'swiper/vue';

const app = createApp(App)

registerPlugins(app)

app.mount('#app')

app.use(VCalendar, {})
    .use(SvgIcon)
    .use(mdiAccount)
    .use(Swiper)
    .use(SwiperSlide)
