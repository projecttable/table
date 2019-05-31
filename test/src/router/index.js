import Vue from 'vue'
import Router from 'vue-router'
// import index from '@/pages/header'
// import left from '@/pages/left'
import main from '@/components/main'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'index',
    //   component: index
    // },
    // {
    //   path: '/left',
    //   name: 'left',
    //   component: left
    // }
    {
      path: '/',
      name: 'main',
      component: main
    }
  ]
})
