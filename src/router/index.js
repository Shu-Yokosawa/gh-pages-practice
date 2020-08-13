import Vue from 'vue'
import Router from 'vue-router'

import Top from '@/components/Top'
import Profile from '@/components/Profile'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Top
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/skills',
      component: Skills
    },
    {
      path: '/contact',
      component: Contact
    }
  ]
})
