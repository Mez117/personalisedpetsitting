import { createRouter,  createWebHashHistory } from 'vue-router'
import PetSitting from '@/components/Content.vue';
import DefaultLayout from '@/layouts/default/Default.vue';
import Booking from '@/components/Booking.vue';
import Admin from '@/components/Admin.vue';
import Login from '@/components/Login.vue';
import Reviews from '@/components/Reviews.vue';
import Gallery from '@/components/Gallery.vue';
import Faqs from '@/components/Faqs.vue';
import Packages from '@/components/Packages.vue';

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
        path: '/packages',
        name: 'Packages',
        component: Packages
      },
      {
        path: '/bookings',
        name: 'Bookings',
        component: Booking,
      },
      { 
        path: '/login', 
        name: 'Login', 
        component: Login 
      },
      {
        path: '/admin',
        name: 'Admin',
        component: Admin,
        meta: { requiresAuth: true },
      },
      {
        path: '/reviews',
        name: 'Reviews',
        component: Reviews,
      },
      {
        path: '/faqs',
        name: 'Faqs',
        component: Faqs,
      },
      {
        path: '/gallery',
        name: 'Gallery',
        component: Gallery,
      },
    ],
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
