import React from "react"
import {
  BrowserRouter,
  HashRouter,
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
    <HashRouter>
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
    </HashRouter>
  );
}
