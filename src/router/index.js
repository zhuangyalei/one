import Vue from 'vue'
import Router from 'vue-router'
import one from '@/component/one'
import all from '@/component/all'
import me from '@/component/me'
import day from '@/component/day'
import pen from '@/component/pen'
import detail from '@/component/detail'
import tabContent from '@/component/tabContent'

Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
  	{
    	path:'/',
    	name:'one',
    	component:one
   	},
    {
    	path:'/all',
    	name:'all',
    	component:all,
    },
    {
    	path:'/me',
    	name:'me',
    	component:me
    },
    {
    	path:'/day',
    	name:'day',
    	component:day
    },
    {
    	path:'/pen',
    	name:'pen',
    	component:pen
    },
    {
    	path:'/detail/:id/:type',
    	name:'detail',
    	component:detail
    },
  ],
//scrollBehavior (to, from, savedPosition) {
//	if(to.name=='one'){
//		return {
//	    	x: 0,
//	    	y: 0
//	    }
//	}
//  
//}
})
