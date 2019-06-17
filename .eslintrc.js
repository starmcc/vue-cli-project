module.exports = {
	root: true,
	env: {
		node: true,
	},
	'extends': [
		'plugin:vue/essential',
		'@vue/standard'
	],
	rules: {
		// 强制使用一致的缩进
		"indent": [2, "tab"],
		// 禁止 function 定义中出现重名参数
		"no-dupe-args": 1,
		// 禁用 tab
		"no-tabs": 0,
		// 要求使用 let 或 const 而不是 var
		"no-var": 1,
		// 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
		"no-undef": 2,
		// 禁止将 undefined 作为标识符
		"no-undefined": 2,
		// 禁止出现空语句块
		"no-empty": 2,
		// 禁用 arguments.caller 或 arguments.callee
		"no-caller": 2,
		// 禁用 eval() 
		"no-eval": 2,
		// 禁止在循环中出现 await
		"no-await-in-loop": 2,
		// 禁用 alert、confirm 和 prompt
		"no-alert": 1,
		// 禁止出现未使用过的变量
		"no-unused-vars": 2,
		// 禁止修改 const 声明的变量
		"no-const-assign": 2,
		// 强制一行的最大长度
		"max-len": 0,
		// 禁用一元操作符 ++ 和 --
		"no-plusplus": 0,
		// 禁止条件表达式中出现赋值操作符
		"no-cond-assign": 0,
		// 强制在大括号中使用一致的空格
		"object-curly-spacing": [2, "always"],
		// 禁用 console 禁用console的debug
		"no-console": [2, { "allow": ["warn", "error", "info"] }],
		// 禁止空格和 tab 的混合缩进
		"no-mixed-spaces-and-tabs": 2,
		// 强制函数中的变量要么一起声明要么分开声明
		"one-var": 0,
		// 要求或禁止使用分号代替 ASI   现在是禁止使用分号[2, "never"]
		"semi": [2, "never"],
		// 禁用 debugger
		"no-debugger": 2,
		// 禁止在变量定义之前使用它们
		"no-use-before-define": 2,
		// 禁止混合使用不同的操作符
		"no-mixed-operators": 0,
		// 禁用嵌套的三元表达式
		"no-nested-ternary": 0,
		// 禁止可以在有更简单的可替代的表达式时使用三元操作符
		"no-unneeded-ternary": 0,
		// 禁止在 return 语句中使用赋值语句
		"no-return-assign": 0,
		// 要求或禁止末尾逗号 
		"comma-dangle": 0,
		// 强制最大空行数
		"no-multiple-empty-lines": [2, { "max": 5 }],
		// 禁用行尾空格
		"no-trailing-spaces": 0,
	},
	parserOptions: {
		parser: 'babel-eslint'
	}
}
