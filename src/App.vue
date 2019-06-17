<template>
	<div id="app">
		<el-container style="height: 100vh; border: 1px solid #eee">
			<el-header>
				<span style="font-size: 9px;">浅梦-</span>
				<span style="font-size: 22px;">文章管理系统</span>
				<el-dropdown style="float: right;">
					<span class="el-dropdown-link" disabled>
						用户名：
						<span>{{ name }}</span>
						<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>黄金糕</el-dropdown-item>
						<el-dropdown-item disabled>双皮奶</el-dropdown-item>
						<el-dropdown-item divided>蚵仔煎</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-header>
			<el-container>
				<el-aside width="200px" style="background-color: rgb(238, 241, 246)">
					<el-menu router :default-openeds="['/article']">
						<el-submenu index="/article">
							<template slot="title">
								<i class="el-icon-folder-opened"></i>文章管理
							</template>
							<el-menu-item index="create">创建文章</el-menu-item>
							<el-menu-item index="list">文章列表</el-menu-item>
						</el-submenu>
						<el-submenu index="/system">
							<template slot="title">
								<i class="el-icon-folder-opened"></i>系统管理
							</template>
							<el-menu-item index="info">系统信息</el-menu-item>
						</el-submenu>
					</el-menu>
				</el-aside>
				<el-main>
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<style>
* {
	margin: 0;
	padding: 0;
}

.el-header {
	background-color: #242f42;
	color: #fff;
	line-height: 60px;
}

.el-icon-message {
	background-color: white;
}

.header-right {
	display: book;
	text-align: right;
	font-size: 14px;
}

.header-left {
	width: 200px;
	text-align: left;
}
</style>
