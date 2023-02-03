import { createRouter, createWebHistory } from 'vue-router'
import intro from '../views/intro.vue'

const routes = [
  {
    path: '/',
    name: 'intro',
    component: intro
  },
  {
    path: '/look',
    name: 'look',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/look.vue')
    }
  },
  {
    path: '/look/post',
    name: 'post',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/post.vue')
    }
  }

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  //   }
  // }
  ]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router
  