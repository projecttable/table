import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/table'
    },
    {
      path: '/table',
      name: 'table',
      component: res => require(['@/pages/indexTable'], res)
    },
    {
      path: '/loadin',
      name: 'loadin',
      component: res => require(['@/pages/loadin'], res)
    }
  ]
})
