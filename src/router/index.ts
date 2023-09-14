import { createRouter, createWebHistory } from 'vue-router'
import Layout from "../views/Layout.vue";
import SignInView from "../views/SignInView.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'sign in view',
          component: SignInView,
          meta: {index: true}
        },
      ]
    },
  ]
})

export default router
