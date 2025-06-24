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
  routes
})

export default router
