import { createApp } from 'vue';
import App from './App.vue';

import ComponentLibrary from 'ui-library-starter-2';
import 'ui-library-starter-2/dist/ui-library-starter-2.css';

import { createRouter, createWebHistory } from 'vue-router';

import Home from './views/Home.vue';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const routes: any = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/route/:id',
    name: 'Test',
    component: () =>
      import(/* webpackChunkName: "TestRoute" */ './views/Test.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () =>
      import(/* webpackChunkName: "NotFound" */ './views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

createApp(App).use(ComponentLibrary).use(router).mount('#app');
