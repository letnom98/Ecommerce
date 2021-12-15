import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Catalog from '../views/Catalog.vue'
import Product from '../views/Product.vue'
import ContactUs from '../views/ContactUs.vue'
import AboutUs from '../views/AboutUs.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: AboutUs
  },
  {
    path: '/products',
    name: 'Products',
    component: Catalog,
  },
  {
    path: '/products/:id',
    component: Product,
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: ContactUs
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
