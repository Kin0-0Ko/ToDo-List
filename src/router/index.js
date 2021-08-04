import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Active from '../views/Active.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
   {
   	path: '/active',
   	name: 'active',
   	component: Active
   },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
