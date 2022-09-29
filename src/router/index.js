
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import count from '../views/Count-1.vue'
import SignUp from '../views/SignUp.vue'
import transactionsView from '../views/TransactionsView.vue'
import fashionView from '../views/FashionView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/count',
    component:count
  }, 
  {
    path: '/sign-up',
    component: SignUp
  },
  {
    path: '/transactionsView',
    component: transactionsView
  },
  {
    path: '/fashionView',
    component: fashionView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
