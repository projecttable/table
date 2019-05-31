import Vue from 'vue'
import Router from 'vue-router'
import form from '@/form/form'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/form',
      name: 'form',
      component: form
    }
  ]
})
