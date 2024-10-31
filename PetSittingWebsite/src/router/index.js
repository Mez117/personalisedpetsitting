// Composables
// import PetPackages from '@/views/PetPackages.vue'
import { createRouter,  createWebHashHistory } from 'vue-router'
import PetSitting from '@/views/PetSitting.vue';
import DefaultLayout from '@/layouts/default/Default.vue';
import Booking from '@/views/PetBooking.vue';
import Admin from '@/views/AdminPage.vue';
import Login from '@/components/Login.vue';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase';

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
      { path: '/login', name: 'Login', component: Login },
      {
        path: '/admin',
        name: 'Admin',
        component: Admin,
        meta: { requiresAuth: true },
      },
    ],
    // path: '/',
    // component: PetSitting,
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth) {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        next('/login');
      } else {
        next();
      }
    });
  } else {
    next();
  }
});

export default router
