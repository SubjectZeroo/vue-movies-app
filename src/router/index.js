import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MovieDetail from '../views/MovieDetail.vue'
import ShowsView from '../views/ShowsView.vue'
import ShowDetail from '../views/ShowDetail.vue'
import ActorView from '../views/ActorView.vue'
import ActorDetail from '../views/ActorDetail.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/movies/:id',
      name: 'movie-detail',
      component: MovieDetail,
      props: true
    },
    {
      path: '/shows',
      name: 'shows',
      component: ShowsView
    },
    {
      path: '/shows/:id',
      name: 'show-detail',
      component: ShowDetail,
      props: true
    },
    {
      path: '/actors',
      name: 'actors',
      component: ActorView
    },
    {
      path: '/actors/:id',
      name: 'actor-detail',
      component: ActorDetail,
      props: true
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
