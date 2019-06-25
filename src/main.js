import Vue from 'vue'
import Index from '@/Index'
import store from '@/store/store'
import router from '@/router/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import './common/css/public.css'

Vue.config.productionTip = false
Vue.use(ElementUI)

console.warn("framework：Vue + Element")

// 初始化基础配置
const created = function () {

}

new Vue({
	router,
	store,
	render: h => h(Index),
	created,
}).$mount('#app')
