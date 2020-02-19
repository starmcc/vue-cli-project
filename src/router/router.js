// import VueRouter from 'vue-router'
// import NProgress from '@/utils/NProgress'

const routes = [
	{
		path: '/',
		name: 'Info',
		component: () => import('@/views/home/Info'),
		meta: { title: 'home' }
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})


// 路由进入前钩子函数
router.beforeEach((to, from, next) => {
	NProgress.start()
	// 在routes中的每个路由配置 meta: { title: '标题' }
	/* 路由发生变化修改页面title */
	if (to.meta.title) {
		document.title = to.meta.title
	}
	next()
})

// 路由跳转完成后进入该钩子函数
router.afterEach(() => {
	NProgress.done()
})

export default router
