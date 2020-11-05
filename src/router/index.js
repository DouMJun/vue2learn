import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('@views/home/Home.vue')
const Cart = () => import('@views/cart/cart.vue')
const Category = () => import('@views/category/category.vue')
const Profile = () => import('@views/profile/profile.vue')
const Detail = () => import('@views/detail/detail.vue')

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail:id',
    component: Detail
  }
]



const router = new VueRouter({
  routes
})

export default router
