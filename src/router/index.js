import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      component: Home
    }
  ]
})

export default router
