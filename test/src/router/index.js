import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
// import index from '@/pages/header'
// import left from '@/pages/left'
import main from '@/components/main'
=======
>>>>>>> 63886099d8e9b7a8506d7d6d3b4c09c02bc08d38

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
<<<<<<< HEAD
      name: 'main',
      component: main
=======
      redirect: '/table'
    },
    {
      path: '/table',
      name: 'table',
      component: res => require(['@/pages/table'], res)
>>>>>>> 63886099d8e9b7a8506d7d6d3b4c09c02bc08d38
    }
  ]
})
