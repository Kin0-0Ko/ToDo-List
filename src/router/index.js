import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import InProgress from '../views/InProgress.vue'
import Active from '../views/ActiveT.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
   {
   	path: '/Active',
   	name: 'Active',
   	component: Active
   },
  {
    path: '/InProgress',
    name: 'InProgress',
	component: InProgress,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
