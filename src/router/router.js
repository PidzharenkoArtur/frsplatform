import Vue from 'vue'
import Router from 'vue-router'
import { ROUTER_NAMES, ROUTER_PATH } from './routerConstants'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: ROUTER_PATH.AUTH.LOGIN,
      name: ROUTER_NAMES.AUTH.LOGIN,
      component: () => import('@/views/Auth/' + ROUTER_NAMES.AUTH.LOGIN),
      meta: {
        guest: true
      }
    },
    {
      path: ROUTER_PATH.AUTH.REGISTRATION,
      name: ROUTER_NAMES.AUTH.REGISTRATION,
      component: () => import('@/views/Auth/' + ROUTER_NAMES.AUTH.REGISTRATION),
      meta: {
        guest: true
      }
    },
    {
      path: ROUTER_PATH.AUTH.RESET,
      name: ROUTER_NAMES.AUTH.RESET,
      component: () => import('@/views/Auth/' + ROUTER_NAMES.AUTH.RESET),
      meta: {
        guest: true
      }
    },
    {
      path: ROUTER_PATH.USER.ME,
      name: ROUTER_NAMES.USER.ME,
      component: () => import('@/views/User/' + ROUTER_NAMES.USER.ME),
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') === null) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    } else next()
  } else if (to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem('jwt') === null) {
      next()
    } else next()
  } else {
    next()
  }
})

export default router
