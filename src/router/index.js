import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tamchay',
    name: 'TamChay',
    component: () => import(/* webpackChunkName: "tamchay" */ '../views/TamChay.vue'),
  },
  {
    path: '/artesaniaslily',
    name: 'ArtesaniasLily',
    component: () => import(/* webpackChunkName: "artesaniaslily" */ '../views/ArtesaniasLily.vue')
  },
  {
    path: '/todolist',
    name: 'ToDoList',
    component: () => import(/* webpackChunkName: "todolist" */ '../views/ToDoList.vue')
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
