import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Signup from '@/views/Signup'
import Login from '@/views/Login'
import Games from '@/views/Games'
import Rolls from '@/views/Rolls'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/games',
      name: 'Games',
      component: Games
    },
    {
      path: '/rolls',
      name: 'Rolls',
      component: Rolls
    }
  ]
})
