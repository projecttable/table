import Vue from 'vue'
import Router from 'vue-router'
import app from '@/components/xhApp.vue'
import index from '@/components/app/index.vue'
import lists from '@/components/app/list.vue'
import sc from '@/components/app/sancan.vue'
Vue.use(Router)
export default new Router({
  routes: [
	{
		path:'/',
		name:'index',
		component:index
	},
	{
		path:'/lists',
		name:'lists',
		component:lists
	},
	{
		path:'/sancan',
		name:'sancan',
		component:sc
	},
	{
		path:'/app',
		name:'download',
		component:app
	}
  ]
})