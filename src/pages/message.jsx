import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'
import MessageDetail from './message-detail'

/* 
二级(Home的子路由)路由组件
*/
export default class Message extends Component {

  state = {
    messages: []
  }

  componentDidMount () {
    // 模拟发异步ajax请求获取数据
    setTimeout(() => {
      const messages = [
        {id: 1, title: 'message001'},
        {id: 3, title: 'message003'},
        {id: 5, title: 'message005'},
      ]
      this.setState({
        messages
      })
    }, 1000)
  }

  render() {
    const {messages} = this.state
    return (
      <div>
        <ul>
          {
            messages.map(m => (
              <li key={m.id}>
                {/* <Link to={'/home/message/' + m.id}>{m.title}</Link> */}
                <Link to={`/home/message/${m.id}`}>{m.title}</Link>
              </li>
            ))
          }
        </ul>
        {/* 请求的路由路径必须有3层, 第3层任意字符 */}
        <Route path="/home/message/:id" component={MessageDetail}></Route>
      </div>
    )
  }
}
