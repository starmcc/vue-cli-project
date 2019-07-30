//引入gzip压缩插件
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
	//基本路径 vue-cli3.3+新版本使用
	publicPath: '/',
	// 编译后输出的文件名称
	outputDir: 'dist',
	// 静态文件路径
	assetsDir: '',
	filenameHashing: true,
	// cors 相关 https://jakearchibald.com/2017/es-modules-in-browsers/#always-cors
	// corsUseCredentials: false,
	// webpack 配置，键值对象时会合并配置，为方法时会改写配置
	// https://cli.vuejs.org/guide/webpack.html#simple-configuration
	configureWebpack: config => ({
		plugins: [
			new CompressionPlugin({//gzip压缩配置
				test: /\.js$|\.html$|\.css/,//匹配文件名
				threshold: 10240,//对超过10kb的数据进行压缩
				deleteOriginalAssets: false,//是否删除原文件
			})
		],
		externals: {
			'vue': 'Vue',
			'vuex': 'Vuex',
			'vue-router': 'VueRouter',
			'element-ui': 'ELEMENT',
			'Axios': 'axios'
		}
	}),
	chainWebpack: (config) => {
		// 链式配置
	},

	// eslint-loader 是否在保存的时候检查
	lintOnSave: false,

	// 是否使用包含运行时编译器的Vue核心的构建
	runtimeCompiler: false,

	// 默认情况下 babel-loader 忽略其中的所有文件 node_modules
	transpileDependencies: [],

	// 生产环境 sourceMap
	productionSourceMap: false,

	// 配置高于chainWebpack中关于 css loader 的配置
	css: {
		// 是否开启支持 foo.module.css 样式
		modules: false,

		// 是否使用 css 分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用 <style> 方式内联至 html 文件中
		extract: true,

		// 是否构建样式地图，false 将提高构建速度
		sourceMap: false,

		// css预设器配置项
		loaderOptions: {
			css: {
				// options here will be passed to css-loader
			},

			postcss: {
				// options here will be passed to postcss-loader
			}
		}
	},

	devServer: {
		open: false,
		host: '0.0.0.0',
		port: 80,
		https: false,
		hotOnly: false,
		proxy: null,
		before: app => { }
	},
	//  构建时开启多进程处理 babel 编译
	parallel: require('os').cpus().length > 1,
	// 第三方插件配置
	pluginOptions: {}
}