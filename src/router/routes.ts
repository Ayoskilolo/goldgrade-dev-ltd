import { RouteRecordRaw } from 'vue-router';
import HomePage from 'src/pages/HomePage.vue';
import AboutUsPage from 'src/pages/AboutUsPage.vue';
import ClientsPage from 'src/pages/ClientsPage.vue';
import ContactUsPage from 'src/pages/ContactUsPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: { name: 'HomePage' },
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'home', name: 'HomePage', component: HomePage },
      { path: 'about-us', name: 'AboutUsPage', component: AboutUsPage },
      { path: 'clients', name: 'ClientsPage', component: ClientsPage },
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
