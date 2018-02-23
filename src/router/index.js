import Vue from 'vue'
import Router from 'vue-router'
import Marquee from '@/components/marquee'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Marquee',
      component: Marquee
    }
  ]
})
