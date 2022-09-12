import { createRouter, createWebHistory } from 'vue-router'

import RegisterView from '../components/RegisterView.vue'
import EditView from '../components/EditView.vue'
import ShowView from '../components/ShowView.vue'


const routes = [

  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/edit',
    name: 'edit',
    component: EditView
  },
  {
    path: '/show',
    name: 'show',
    component: ShowView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
