import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'dashboard',
          redirect:'/home/dashboard/main',
          component: () => import('../views/Dashboard.vue'),
          children: [
            {
              path: 'main',
              component: () => import('../components/BottomPart.vue')
            },
            {
              path: 'find',
              component: () => import('../components/FindUser.vue')
            },
            
          ]
        },
        {
          path: 'add',
          component: () => import('../views/Add.vue')
        },
        {
          path: 'feedback',
          component: () => import('../views/Feedback.vue')
        },
        {
          path: 'past',
          component: () => import('../views/Past.vue')
        },
        {
          path: 'userCenter',
          component: () => import('../views/UserCenter.vue')
        }
      ],
      redirect:'home/dashboard'
    }
  ]
})
export default router
