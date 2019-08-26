import React, { Component } from "react"

import {Route, Switch, Redirect} from 'react-router-dom'

import MyNavLink from '../components/my-nav-link'
import News from './news'
import Message from './message'

/* 
一级(最外层的)路由组件
*/
export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink className="list-group-item" to="/home/news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink className="list-group-item" to="/home/message">Message</MyNavLink>
            </li>
          </ul>
          <Switch>
            <Route path="/home/news" component={News}/>
            <Route path="/home/message" component={Message}/>
            <Redirect to="/home/news"/>
          </Switch>
        </div>
      </div>
    );
  }
}
