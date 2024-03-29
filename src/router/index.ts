import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Template from '../views/Template.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Layout from '../views/Layout.vue'
import StudentForm from '../views/StudentForm.vue'
import Matematika from '../views/Matematika.vue'
import Fisika from '../views/Fisika.vue'
import Web from '../views/Web.vue'
import Sukses from '../views/Sukses.vue'
import ProfileEditForm from '../views/ProfileEditForm.vue'
import Meet from '../views/Meet.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  { 
    path: '/redirect',
    component: Layout,
    children: [
        {path: '/redirect', redirect: '/login'},
        {path: '/profile', component: Template},
        {path: '/profile/edit/:id',component: ProfileEditForm},
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/meet/:id',
    name: 'Meet',
    component: Meet
  },
  {
    path: '/matematika',
    name: 'Matematika',
    component: Matematika
  },
  {
    path: '/sukses',
    name: 'Sukses',
    component: Sukses
  },
  {
    path: '/fisika',
    name: 'Fisika',
    component: Fisika
  },
  {
    path: '/web',
    name: 'Web',
    component: Web
  },
  {
    path: '/student/:id',
    name: 'StudentForm',
    component: StudentForm
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
