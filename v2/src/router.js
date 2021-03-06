import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Menu from './views/Menu.vue';
import Orders from './views/Orders.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu,
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders,
    },
  ],
});
