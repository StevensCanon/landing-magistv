// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import { Home, Contacto, Dispositivos, Faq } from './Pages'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/contacto', name: 'Contacto', component: Contacto },
  { path: '/faq', name: 'Faq', component: Faq },
  { path: '/dispositivos', name: 'Dispositivos', component: Dispositivos },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0 }
  }
})

export default router
