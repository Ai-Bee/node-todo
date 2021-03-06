import Vue from 'vue'
import Router from 'vue-router'
import SchoolPage from '@/components/schools'
import Landing from '@/components/landing'
import Tests from '@/components/tests'
import Learning from '@/components/learning'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/schools',
      name: 'SchoolPage',
      component: SchoolPage
    },
    {
      path: '/tests',
      name: 'Tests',
      component: Tests
    },
    {
      path: '/learning',
      name: 'Learning',
      component: Learning
    }
  ]
})
