import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello.vue'
import Player from '../components/Player.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/player',
      name: 'Player',
      component: Player
    }
  ]
})
