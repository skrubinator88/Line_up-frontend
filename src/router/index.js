import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/profiles/Register'
import Login from '@/components/profiles/Login'

import Haircuts from '@/components/Haircuts/Haircuts'
import NewHaircut from '@/components/Haircuts/NewHaircut'

import NewBarbershop from '@/components/Barbershops/RegisterBarbershop'
import Barbershops from '@/components/Barbershops/Barbershops'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/haircuts',
      name: 'haircuts',
      component: Haircuts
    },
    {
      path: '/haircuts/new',
      name: 'newHaircut',
      component: NewHaircut
    },
    {
      path: '/barbershops/new',
      name: 'newBarbershop',
      component: NewBarbershop
    },
    {
      path: '/barbershops/',
      name: 'Barbershops',
      component: Barbershops
    }
  ]
})
