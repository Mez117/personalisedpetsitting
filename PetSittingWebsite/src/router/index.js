// Composables
// import PetPackages from '@/views/PetPackages.vue'
import { createRouter, createWebHistory } from 'vue-router'
import PetSitting from '@/views/PetSitting.vue';
import DefaultLayout from '@/layouts/default/Default.vue';
import Booking from '@/views/PetBooking.vue';


const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'Petsitting',
        component: PetSitting,
      },
      {
        path: '/petsitting',
        name: 'PetSitting',
        component: () => import('@/views/PetSitting.vue'),
      },
      { path: '/packages',
        name: 'Packages',
        component: () => import('@/views/PetPackages.vue')
      },
      {
        path: '/bookings',
        name: 'Bookings',
        component: Booking,
      },
    ],
    // path: '/',
    // component: PetSitting,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
