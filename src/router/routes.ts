import { RouteRecordRaw } from 'vue-router';
import HomePage from 'src/pages/HomePage.vue';
import ContactUsPage from 'src/pages/ContactUsPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'home', name: 'HomePage', component: HomePage },
      { path: 'contact-us', name: 'ContactUsPage', component: ContactUsPage },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
