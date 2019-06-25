import Axios from 'axios'
import { baseURL, requestTimeOut } from '@/config/config.js'

/**
 * 请求方法(this,method,data,url)
 */
export default async (vm, method = 'GET', data = {}, url = '') => {
	let headers = {
		'Accept': 'application/json;charset=utf-8',
		'Content-Type': 'application/json;charset=utf-8',
		'Cache-Control': 'no-cache'
	}
	let params = method.toLowerCase() === 'get' ? 'params' : 'data'
	data = method.toLowerCase() === 'get' ? data : { 'value': data }
	data = JSON.stringify(data)
	let res = await Axios({
		baseURL, url, method, headers,
		[params]: data,
		timeout: requestTimeOut
	}).catch(err => {
		vm.$message.error(err.toString())
	})
	return new Promise((resolve) => {
		let data = res.data.value
		resolve(data)
	})
}