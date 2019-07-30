import Vue from 'vue'
import Index from '@/views/Index'
import store from '@/store/store'
import router from '@/router/router'
import ELEMENT from 'element-ui'
import 'element-ui/lib/theme-chalk/display.css'
import '@/commons/css/public.css'
import { dateFormat } from '@/utils/DateUtils'

Vue.config.productionTip = false
Vue.use(ELEMENT)

console.warn("framework：Vue and Element-UI Project")

// 初始化基础配置
const created = function () {

}

// 全局过滤器
Vue.filter('dataFormat', function (time, fmt = 'yy/MM/dd hh:mm:ss') {
	let date = new Date(time)
	return dateFormat(date, fmt)
})


// vue 实例
export default new Vue({
	el: '#app',
	router,
	store,
	render: h => h(Index),
	created,
})
