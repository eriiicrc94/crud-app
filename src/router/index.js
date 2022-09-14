import { createRouter, createWebHistory } from 'vue-router'

import RegisterView from '../components/RegisterView.vue'
import ShowView from '../components/ShowView.vue'


const routes = [
  {
    path: '/',
    redirect: '/show'
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/show',
    name: 'show',
    component: ShowView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
