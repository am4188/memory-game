import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GameView from '../views/GameView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/play',
    name: 'play',
    component: GameView
    
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
