// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
<<<<<<< HEAD
import '@/assets/css/reset.styl'
import ele from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ele)
=======

import elementUi from 'element-ui'
Vue.use(elementUi)

>>>>>>> 63886099d8e9b7a8506d7d6d3b4c09c02bc08d38
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
