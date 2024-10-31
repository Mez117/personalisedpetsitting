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

// Vue3datepicker
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const app = createApp(App)

registerPlugins(app)

app.component('VueDatePicker', VueDatePicker);

app.mount('#app')

app.use(VCalendar, {})
    .use(SvgIcon)
    .use(mdiAccount)
    // .use(options)