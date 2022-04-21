import Vue from 'vue';
import VueRouter from 'vue-router';
import { getCurrentUser } from '../firebase/firebase';
import Store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/contatc-list',
  },
  {
    path: '/contatc-list',
    name: 'contactList',
    component: () => import('../views/ContactList.vue'),
  },
  {
    path: '/conatc/add',
    name: 'contactAdd',
    component: () => import('../views/ContactForm.vue'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/conatc/edit',
    name: 'contactEdit',
    component: () => import('../views/ContactForm.vue'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/conatc/detail',
    name: 'contactDetail',
    component: () => import('../views/ContactDetail.vue'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/auth/Login.vue'),
    meta: {
      guest: true,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.auth);
  const isGuest = to.matched.some((record) => record.meta.guest);
  const user = await getCurrentUser();

  if (requiresAuth && !user) {
    next('login');
  } else if (user && isGuest) {
    next('/contact-list');
  } else {
    Store.dispatch('fetchUser', user);
    next();
  }
});

export default router;
