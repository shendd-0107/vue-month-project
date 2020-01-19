import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import My from '@/views/my'
import Fenlei from '@/views/feilei'
import Classify from '@/views/classify'

Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
    {
      path: '/fenlei',
      name: 'fenlei',
      component: Fenlei
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify
    }
  ]
})
