import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import AccessDeniedView from '../views/AccessDeniedView.vue'
import { isAuthenticated } from '../utils/auth.js'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: { requiresAuth: true }, // Mark this route as requiring authentication
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
    meta: { hideForAuth: true }, // Logged-in users don't need to see the login page
  },
  {
    path: '/access-denied',
    name: 'AccessDenied',
    component: AccessDeniedView,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    redirect: '/', // 404 page redirects to home
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Global before guard
router.beforeEach((to, from, next) => {
  const userIsAuthenticated = isAuthenticated()

  // If route requires authentication
  if (to.meta.requiresAuth) {
    if (userIsAuthenticated) {
      // User is logged in, allow access
      next()
    } else {
      // User is not logged in, show access-denied page first
      next({ name: 'AccessDenied' })
    }
  }
  // If it's the login page, but user is already logged in
  else if (to.meta.hideForAuth && userIsAuthenticated) {
    // Logged-in user accessing login page, redirect to home
    next({ name: 'Home' })
  }
  // Other cases proceed normally
  else {
    next()
  }
})

export default router
