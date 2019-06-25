import axios from 'axios'
import loading from '@/utils/loading'


axios.defaults.baseURL = "http://localhost"
axios.defaults.timeout = 6 * 1000
//设置cross跨域 并设置访问权限 允许跨域携带cookie信息
axios.defaults.withCredentials = true

// request拦截器
axios.interceptors.request.use(config => {
	config.headers['Accept'] = "application/json"
	config.headers['Content-Type'] = "application/json"
	config.headers['Cache-Control'] = "no-cache"
	loading.start()
	return config
}, error => {
	loading.close()
	Promise.reject(error)
})

// respone拦截器
axios.interceptors.response.use(
	response => {
		const value = response.data.value
		loading.close()
		return value
	},
	error => {
		loading.close()
		return Promise.reject(error)
	}
)
export default axios