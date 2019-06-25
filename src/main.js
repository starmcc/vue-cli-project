import Vue from 'vue'
import App from './App.vue'
import store from '@/store/store'
import router from '@/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import './assets/css/common.css'

Vue.config.productionTip = false
Vue.use(ElementUI)

console.warn("framework：Vue + Element")

// 初始化基础配置
const created = function () {

}

new Vue({
	router,
	store,
	render: h => h(App),
	created
}).$mount('#app')
