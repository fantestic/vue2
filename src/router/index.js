import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import collectionRoutes from './collection'
import scenarioRoutes from './scenario'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { breadcrumb: 'Home' }
  },
  ...collectionRoutes,
  ...scenarioRoutes
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
