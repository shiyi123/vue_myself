import Vue from 'vue'
import Router from 'vue-router'
import First from '@/components/First'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'First',
      component: First
    }
  ]
})
