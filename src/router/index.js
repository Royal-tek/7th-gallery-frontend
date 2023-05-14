import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Originals from '../views/Originals.vue'
import Print from '../views/Print.vue'
import OriginalDetail from '../views/OriginalDetail.vue'
import PrintDetail from '../views/PrintDetail.vue'
import Cart from '../views/Cart.vue'
import CheckOut from '../views/Checkout.vue'
import Contact from '../views/Contact.vue'
import About from '../views/About.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/originals',
    name: 'Originals',
    component: Originals
  },
  {
    path: '/print',
    name: 'Print',
    component: Print
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/checkout',
    name: 'CheckOut',
    component: CheckOut
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/original/:id',
    name: 'OriginalDetail',
    component: OriginalDetail
  },
  {
    path: '/print/:id',
    name: 'PrintDetail',
    component: PrintDetail
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    window.scrollTo(0,0);
  }
})

export default router
