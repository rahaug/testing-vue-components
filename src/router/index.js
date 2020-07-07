import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const Login = () => import('../views/Login.vue')
const Protected = () => import('../views/Protected.vue')
const Messages = () => import('../views/Messages.vue')
const Shopping = () => import('../views/Shopping.vue')
const Notification = () => import('../views/Notification.vue')

Vue.use(VueRouter)


// Changed to access routes directly
export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/shopping',
    name: 'shopping',
    component: Shopping
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/protected',
    name: 'protected',
    component: Protected
  },
  {
    path: '/messages',
    name: 'messages',
    component: Messages
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: Notification
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
