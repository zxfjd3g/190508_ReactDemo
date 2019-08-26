import React from "react"
import {
  BrowserRouter, /* 不带# */
  HashRouter, /* 路由路径带# */
  Route,
  NavLink,
  Switch,
  Redirect
} from "react-router-dom"
import About from './pages/about'
import Home from './pages/home'

/* 
应用根组件
*/
export default function App(props) {
  return (
    <BrowserRouter>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 指定路由链接 */}
              <NavLink className="list-group-item" to="/about">About</NavLink>
              <NavLink className="list-group-item" to="/home">Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                
                {/* 注册路由 */} 
                <Switch>
                  <Route path="/about" component={About}></Route>
                  <Route path="/home" component={Home}></Route>
                  <Redirect to="/about"/> {/* 当请求路径与上面的都不匹配, 自动使用 */}
                </Switch>
              </div>
            </div>
          </div>
        </div>
    </BrowserRouter>
  )
}

/* 
Route:  进行路由匹配时使用是逐级匹配, 默认是模糊匹配, 但可以指定完全匹配
Switch: 一旦匹配上Switch中的某个Route, 后面的不现看
路由组件对象的创建和死亡
  创建: 请求对应的路由路径, 如果不存在创建, 如果存在复用它
  死亡: 跳转到另一个路由路径(从当前路径离开)

2种参数
  1). query参数
    路由路径: /login
    请求路径: /login?name=tom&pwd=123
  2). params参数
    路由路径: /login/:name/:pwd
    请求路径: /login/tom/123
    路由组件: props.match.params ==> {name, pwd}
*/