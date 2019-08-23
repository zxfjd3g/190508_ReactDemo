# 1. 使用React脚手架创建一个React应用
## 1). react脚手架
	1. xxx脚手架: 用来帮助程序员快速创建一个基于xxx库的模板项目
		* 包含了所有需要的配置
		* 指定好了所有的依赖
		* 可以直接安装/编译/运行一个简单效果
	2. react提供了一个专门用于创建react项目的脚手架库: create-react-app
	3. 项目的整体技术架构为: react + webpack + es6  + babel + eslint

## 2). 创建项目并启动
	npm install -g create-react-app
	create-react-app react-app
	cd react-app
	开发环境运行: npm start
	生产环境打包并运行: npm run build--> serve build

## 3). 使用脚手架开发的项目的特点
	模块化: js是一个一个模块编写的
	组件化: 界面是由多个组件组合编写实现的
	工程化: 实现了自动化构建/运行/打包的项目

## 4). 组件化编写项目的流程
	拆分组件
	实现静态组件--->静态页面
	实现动态组件
		动态显示初始化数据
		交互

# 2. app1: 实现一个评论管理功能
## 1). 拆分组件:
	应用组件: App
	添加评论组件: Add
	评论项组件: Item
	评论列表组件: List

## 2). 编写静态组件
	拆分页面
	拆分css

## 3). 实现动态组件
	1. 动态展示初始化数据
	  初始化状态数据
	  传递属性数据
	2. 响应用户操作, 更新组件界面
	  绑定事件监听, 并处理
	  更新state