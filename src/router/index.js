import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CityView from '../views/CityView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: "home",
      }
    },
    {
      path: '/weather/:state/:city',
      name: 'cityView',
      component: CityView,
      meta: {
        title: "Weather",
      }
    },
    /*{
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }*/
  ],
})

router.beforeEach((to, from, next) => {
  document.title = `${to.params.state
      ? `${to.params.city}, ${to.params.state}`
      : to.meta.title
    } | The Local Weather`;
  next();
})

export default router
