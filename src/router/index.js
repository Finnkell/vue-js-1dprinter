import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home.vue';
import Checkout from '../pages/Checkout.vue';
import Products from '../pages/Products.vue';

Vue.use(VueRouter);

export const pages = {
  HOME: '/',
  CHECKOUT: '/checkout',
  PRODUCTS: '/products',
  SINGLE_PRODUCT: '/product', // product/{id}
  ERROR: '/404',
  THANKS: '/thanks',
};

const routes = [
  {
    path: pages.HOME,
    name: 'Home',
    component: Home,
  },
  {
    path: pages.CHECKOUT,
    name: 'Checkout',
    component: Checkout,
  },
  {
    path: pages.PRODUCTS,
    name: 'Products',
    component: Products,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
