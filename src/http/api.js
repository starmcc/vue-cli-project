import Axios from '@/http/axios'
// 接口管理
export const path = 'http://localhost'

// 基础配置接口
export const testRequest = (data) => request('GET', data, '/test/request')


/**
 * 请求方法
 */
async function request(method = 'GET', data = '', url = '', headers = {}) {
	let params = method.toLowerCase() === 'get' ? 'params' : 'data'
  if (headers["Content-Type"] != "multipart/form-data") {
    data = method.toLowerCase() === 'post' ? JSON.stringify(data) : data
  }
	if (headers['Content-Type'] === undefined) headers['Content-Type'] = "application/json"
	if (headers['Cache-Control'] === undefined) headers['Cache-Control'] = "no-cache";
	url = path + url
	return Axios({ url, method, [params]: data, headers })
}