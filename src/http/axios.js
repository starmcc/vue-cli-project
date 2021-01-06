// import Axios from 'axios'

NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })


Axios.defaults.timeout = 6 * 1000
//设置cross跨域 并设置访问权限 允许跨域携带cookie信息
Axios.defaults.withCredentials = true

// request拦截器
Axios.interceptors.request.use(config => {
	NProgress.start()
	config.headers['Accept'] = "application/json"
	config.headers['Content-Type'] = "application/json"
	config.headers['Cache-Control'] = "no-cache"
	return config
}, error => {
	NProgress.done()
	Promise.reject(error)
})

// respone拦截器
Axios.interceptors.response.use(
	response => {
		NProgress.done()
    const data = response.data
    if (response.data.code != 1) {
      context.$Message.error(response.data.msg)
    }
		return data
	},
	error => {
		NProgress.done()
		return Promise.reject(error)
	}
)
export default Axios