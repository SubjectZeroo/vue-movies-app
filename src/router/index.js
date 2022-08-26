import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MovieShow from '../components/MovieShow.vue'
import SeriesList from '../components/SerieList.vue'
import ActorList from '../components/ActorList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/serie-list',
      name: 'serie-list',
      component: SeriesList
    },
    {
      path: '/actor-list',
      name: 'actor-list',
      component: ActorList
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
