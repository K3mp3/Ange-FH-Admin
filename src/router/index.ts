import { createRouter, createWebHistory } from 'vue-router'
import LayoutVue from '@/views/Layout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: LayoutVue,
      children: [
        {
          path: "/admin",
          name: "admin page",
          component: AdminView,
        },
      ]
    },
  ]
})

export default router
