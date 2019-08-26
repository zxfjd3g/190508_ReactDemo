# 1. 使用React脚手架创建一个React应用
## 1). react脚手架
	1. xxx脚手架: 用来帮助程序员快速创建一个基于xxx库的模板项目
		* 包含了所有需要的配置
		* 指定好了所有的依赖
		* 可以直接安装/编译/运行一个简单效果
	2. react提供了一个专门用于创建react项目的脚手架库: create-react-app
	3. 项目的整体技术架构为: react + webpack + es6+  + babel + eslint

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



# 3. app2: 实现github用户搜索功能
## 1). react应用与后台交互
		交互方式: 发送ajax请求
		在哪执行发请求的代码?
				componentDidMount()
				事件回调函数或相关函数中
		使用哪个库?
				axios: 包装XMLHttpRequest对象, promise风格, 支持浏览端/node服务器端
				fetch: 浏览器内置语法, promise风格, 老浏览器不支持, 可以引入fetch兼容包
## 2). 拆分组件
    App
    Search
    List
## 3). 编写组件
	编写静态组件
	编写动态组件
		借助父组件实现兄弟组件间通信
		componentWillReceiveProps(nextProps): 监视接收到新的props, 发送ajax
		使用axios库发送ajax请求并异步更新状态

# 4. 组件间通信总结
## 1). 方式一: 通过props传递
	一般属性-->父组件向子组件
	函数属性-->子组件向父组件
	问题: 隔代组件和兄弟组件通信不方便
	
## 2). 方式二: 使用消息订阅(subscribe)-发布(publish)机制
	实现工具库: PubSubJS
	下载: npm install pubsub-js --save
	使用: 
	  	import PubSub from 'pubsub-js' //引入
	  	PubSub.subscribe('delete', (msg, data) => { }); //订阅
	 	  PubSub.publish('delete', data) //发布消息
	 	  PubSub.unsubscribe(flag) //取消订阅
	优点: 可以支持任意关系组件之间的通信

## 3). 事件机制理解
	1. DOM事件
		* 绑定事件监听
			* 事件名(类型): 只有有限的几个, 不能随便写
			* 回调函数
		* 用户操作触发事件(event)
			* 事件名(类型)
			* 数据(event)
	2. 自定义事件
		* 绑定事件监听
			* 事件名(类型): 任意
			* 回调函数: 通过形参接收数据, 在函数体处理事件
		* 触发(emit)/分发(dispatch)事件(编码)
			* 事件名(类型): 与绑定的事件监听的事件名一致
			* 数据: 会自动传递给回调函数
      
# 5. ES6新语法总结
	定义变量/常量: const/let
	解构赋值: let {a, b} = this.props   import {aa} from 'xxx'   ({x, y}) => {}
	对象的简洁表达: {a, b}
	箭头函数: 
			组件的自定义方法: xxx = () => {}
			map/filter的回调方法: (item, index) => {}
			优点:
					简洁
					没有自己的this,使用引用this查找的是外部this
	扩展运算符: ...
			拆解对象:  const MyProps = {}, <Xxx {...MyProps}>
	类: class/extends/constructor/super/static
	ES6模块化: export / default / import...from
	异步: Promise / async / await

# 6. 自定义消息订阅与发布
## 1). 设计语法
		1. subcribe(msgName, callback): 订阅消息
		2. publish(msgName, data): 发布异步的消息
		3. publishSync(msgName, data):  发布同步的消息
		4. unsubscribe(flag): 取消消息订阅
## 2). 设计数据结构
		1. 用来存储所有回调函数的容器
				{
					add: {
						token1: callback1, 
						token2: callback2
					},
					update: {
						token3: callback3
					}
				}
		2. 生成唯一的token
				id = 0
				token = 'token_' + ++id

## 3). 实现
		1. 添加时区别是否已有同名消息监听
		2. 发布消息区别同步与异步
		3. 取消订阅时区别不同情况的flag

# 路由
## 1. 理解react-router-dom
    react的一个插件库
    专门用来实现一个SPA应用
    基于react的项目基本都会用到此库

## 2. 几个重要问题
		1). SPA应用
				单页Web应用（single page web application，SPA）
				整个应用只有一个完整的页面
				点击页面中的链接不会刷新页面, 本身也不会向服务器发请求
				当点击链接时, 只会做页面的局部更新
				数据都需要通过ajax请求获取, 并在前端异步展现

		2). 路由
				1. 什么是路由?
						一个路由就是一个映射关系(key:value)
						key为路由路径, value可能是function/component
				2. 路由分类
						后台路由: node服务器端路由, value是function, 用来处理客户端提交的请求并返回一个响应数据
						前台路由: 浏览器端路由, value是component, 当请求的是路由path时, 浏览器端前没有发送http请求, 但界面会更新显示对应的组件 
				3. 后台路由
						注册路由: router.get(path, function(req, res))
						当node接收到一个请求时, 根据请求路径找到匹配的路由, 调用路由中的函数来处理请求, 返回响应数据
				4 前端路由
						注册路由: <Route path="/about" component={About}>
						当浏览器的hash变为#about时, 当前路由组件就会变为About组件

## 3. 使用
		1). react-router中的相关组件: 
				BrowserRouter: 内部使用history的state灰实现的router
				HashRouter: 内部使用historyhash来实现的router
				Route: 路由组件, 注册路由 
				Redirect: 自动重定向到指定的路由
				Switch: 用来切换显示多个router中的某一个
				NavLink: 生成路由链接, 当前路由链接有特别的类名
				Link: 生成路由链接

		2). Route: 路由组件
				属性1: path="/xxx"  
				属性2: component={Xxx}

		3). NavLink/Link: 路由链接
				属性1: to="/xxx"
				属性2: activeClassName="myActive"

		4). 路由组件的3个props
				match: 包含请求参数
				history: 提供实现编程式路由跳转的方法
				location: 包含请求路径

		5). 编程式路由导航
				history.push(path)
				history.replace(path)
				history.goBack(path)

		6). 配置多个切换的路由
				<Switch>
						<Route path="/about" component={About}></Route>
						<Route path="/home" component={Home}></Route>
						<Redirect to="/about"/> {/* 当请求路径与上面的都不匹配, 自动使用 */}
				</Switch>

		7). 路由匹配问题
				Route:  进行路由匹配时使用是逐级匹配, 默认是模糊匹配, 但可以指定完全匹配
				Switch: 一旦匹配上Switch中的某个Route, 后面的不现看

		8). 路由组件对象的创建和死亡
				创建: 请求对应的路由路径, 如果不存在创建, 如果存在复用它
				死亡: 跳转到另一个路由路径(从当前路径离开)

		9). 2种参数--向路由组件传递参数
				1). query参数
						路由路径: /login
						请求路径: /login?name=tom&pwd=123
				2). params参数
						路由路径: /login/:name/:pwd
						请求路径: /login/tom/123
						路由组件: props.match.params ==> {name, pwd}

# 最流行的开源React UI组件库
## 1. 下载依赖模块
		npm install --save-dev react-app-rewired customize-cra babel-plugin-import
		npm install --save-dev less less-loader

## 2. 添加配置:  config-overrides.js
    const { override, fixBabelImports, addLessLoader } = require('customize-cra');

    module.exports = override(
      // 配置babel-plugin-import: 
      fixBabelImports('import', {
        libraryName: 'antd', // 针对antd进行按需打包
        libraryDirectory: 'es', // 去es文件夹对应的组件进行打包
        // style: 'css',  // 自动打包组件对应的css样式
        style: true,  // 加载less进行重新编译打包
      }),

      // 添加less的配置
      addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1DA57A' }, // 指定主体颜色为绿色
      }),
    );
## 3. 修改配置: package.json
		"scripts": {
			"start": "react-app-rewired start",
			"build": "react-app-rewired build",
			"test": "react-app-rewired test",
			"eject": "react-scripts eject"
		}
## 4. 去除样式引入
    // import 'antd/dist/antd.css'; 