import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Tarefas',
    component: () => import('../views/TarefasView.vue')
  },
  {
    path: '/myaccount',
    name: 'My Account',
    component: () => import('../views/MyAccount.vue')
  },

  {
    path: '/users',
    name: 'Users',
    component: () => import('../views/UsersView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
