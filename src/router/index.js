import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: ()=>import('@/views/Home/index.vue')
    // },
    {
      path: '/',
      name: 'haloC3',
      component: ()=>import('@/views/HaloC3/index.vue')
    },
    {
      path: '/TextWiz',
      name: 'TextWiz',
      component: ()=>import('@/views/TextWiz/index.vue')
    },
    {
      path: '/DataCenter',
      name: 'DataCenter',
      component: ()=>import('@/views/DataCenter/index.vue')
    },
    {
      path: '/AWS',
      name: 'AWS',
      component: ()=>import('@/views/AWS/index.vue')
    }
  ]
})

export default router
