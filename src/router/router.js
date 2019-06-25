import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Index from '@/Index'

Vue.use(Router)

const routes = [
	{ path: '/', name: 'index', component: Index, meta: { title: 'index' } },
	{ path: '/home', name: 'home', component: Home, meta: { title: 'home' } },
]

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.beforeEach((to, from, next) => {
	/* 路由发生变化修改页面title */
	if (to.meta.title) {
		document.title = to.meta.title
	}
	next()
})

export default router