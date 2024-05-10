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

import { StripePlugin } from '@vue-stripe/vue-stripe';

// const options = {
//   pk = process.env.STRIPE_PUBLISHABLE_KEY,
//   stripeAccount: process.env.STRIPE_ACCOUNT,
//   apiVersion: process.env.API_VERSION,
//   locale: process.env.LOCALE,
// };

// SwiperJS
// import { register } from 'swiper/element/bundle';
// register();
// import { Swiper, SwiperSlide} from 'swiper/vue';
// import SwiperCore from 'swiper';
// import "swiper/swiper.min.css";

// SwiperCore.use(Swiper).use(SwiperSlide);

const app = createApp(App)

registerPlugins(app)

app.mount('#app')

app.use(VCalendar, {})
    .use(SvgIcon)
    .use(mdiAccount)
    .use(StripePlugin)
    // .use(options)