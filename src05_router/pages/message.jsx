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

  pushShow = (id) => {
    // 进行编程式路由跳转(导航)
    this.props.history.push(`/home/message/${id}`)
  }

  replaceShow = (id) => {
    this.props.history.replace(`/home/message/${id}`)
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
                <Link to={`/home/message/${m.id}?name=tom&pwd=123`}>{m.title}</Link> &nbsp;
                <button onClick={() => this.pushShow(m.id)}>push查看</button>&nbsp;
                <button onClick={() => this.replaceShow(m.id)}>replace查看</button>
              </li>
            ))
          }
        </ul>
        <button onClick={() => this.props.history.goBack()}>回退</button>
        <hr/>
        {/* 请求的路由路径必须有3层, 第3层任意字符 */}
        <Route path="/home/message/:id" component={MessageDetail}></Route>
      </div>
    )
  }
}
