import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from './components/Dashboard.vue'
import About from './components/About.vue'
import CategoryView from './components/CategoryView.vue'
import QuizView from './components/QuizView.vue'

Vue.use(Router)

let notFoundComponent = Vue.extend({
  template: '<h1>Not Found: {{ $route.fullPath }}</h1>'
})

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Dashboard,
      name: Dashboard.name,
      meta: { title: 'Catergories Dashboard' }
    },
    {
      path: '/about',
      component: About,
      name: About.name,
      meta: { title: 'About Project Quiz Land' }
    },
    {
      path: '/:categoryId/quizes',
      component: CategoryView,
      name: CategoryView.name,
      meta: { title: 'Quizes Dashboard' },
      props: true
    },
    {
      path: '/:categoryId/quiz/:quizId',
      component: QuizView,
      name: QuizView.name,
      meta: { title: 'Quiz View' },
      props: true
    },
    {
      path: '*',
      component: notFoundComponent
    }
  ]
})
