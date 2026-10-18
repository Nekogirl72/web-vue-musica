import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArtistsView from '../views/ArtistsView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/artistes',
      name: 'artists',
      component: ArtistsView
    },
    {
      path: '/sobre',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router