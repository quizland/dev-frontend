import Vue from 'vue'
import Router from 'vue-router'
// import firebase from 'firebase'
import firebase from 'firebase/app'
import 'firebase/auth'

import Dashboard from './components/Dashboard.vue'
import About from './components/About.vue'
import CategoryView from './components/CategoryView.vue'
import QuizView from './components/QuizView.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/dashboard',
      component: Dashboard,
      name: Dashboard.name,
      meta: { title: 'Catergories Dashboard', requiresAuth: true }
    },
    {
      path: '/about',
      component: About,
      name: About.name,
      meta: { title: 'About Project Quiz Land', requiresAuth: false }
    },
    {
      path: '/:categoryId/quizes',
      component: CategoryView,
      name: CategoryView.name,
      meta: { title: 'Quizes Dashboard', requiresAuth: true },
      props: true
    },
    {
      path: '/:categoryId/quiz/:quizId',
      component: QuizView,
      name: QuizView.name,
      meta: { title: 'Quiz View', requiresAuth: true },
      props: true
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) {
    next({
      path: '/',
      query: {
        redirect: to.fullPath
      }
    })
    // next('/login')
  } else if (!requiresAuth && currentUser) {
    next('/dashboard')
  } else {
    next()
  }
})

export default router
