import Axios from '@/http/axios.js'
// 接口管理


// 基础配置接口
// export const testRequest = (vm, data) => request(vm, 'GET', data, '/test/request')


/**
 * 请求方法
 */
async function request(method = 'GET', data = '', url = '') {
	let params = method.toLowerCase() === 'get' ? 'params' : 'data'
	data = method.toLowerCase() === 'get' ? data : { 'value': data }
	if (method.toLowerCase() === 'post') {
		data = JSON.stringify(data)
	}
	return Axios({ url, method, [params]: data })
}