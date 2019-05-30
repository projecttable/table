// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import lazy from 'vue-lazyload'
import router from './router'
import sty from './assets/css/reset.styl'
import foots from './components/use/footer.vue'
import head from './components/use/header.vue'
import indexFind from './components/use/index-find.vue'
import recMenu from './components/use/recMenu.vue'
import reload from './components/use/reload.vue'
Vue.config.productionTip = false
Vue.component('appHeader',head);
Vue.component('appFooter',foots);
Vue.component('find',indexFind);
Vue.component('recMenu',recMenu);
Vue.component('reload',reload);
Vue.prototype.$axios=axios
Vue.use(lazy)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
