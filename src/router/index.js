import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MovieShow from '../components/MovieShow.vue'
import SeriesView from '../views/SeriesView.vue'
import ActorView from '../views/ActorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/series',
      name: 'series',
      component: SeriesView
    },
    {
      path: '/actors',
      name: 'actors',
      component: ActorView
    },
    {
      path: '/movie/:id',
      name: 'movie-show',
      component: MovieShow
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
