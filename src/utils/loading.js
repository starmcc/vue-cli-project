import { Loading } from 'element-ui'

const config = {
	lock: true,
	text: '正在获取信息...',
	spinner: 'el-icon-loading',
	background: 'rgba(0, 0, 0, 0.7)',
}

const loadingService = {
	loadingCount: 0,
	loading: {},
	start: function () {
		if (this.loadingCount === 0) {
			this.loading = Loading.service(config)
		}
		this.loadingCount++
	},
	close: function () {
		if (this.loadingCount <= 0) return
		this.loadingCount--
		if (this.loadingCount === 0) this.loading.close()
	}
}

export default loadingService