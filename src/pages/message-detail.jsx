import React, { Component } from 'react'

const allDetails = [
  {id: 1, title: 'message001', content: 'message content001...'},
  {id: 3, title: 'message003', content: 'message content003...'},
  {id: 5, title: 'message005', content: 'message content005...'},
]

/* 
3级路由(Message的子路由)
*/
export default class MessageDetail extends Component {

  state = {
    detail: {}
  }

  // 如果不跳转到其它路由, 只是改变路由的params参数, 此方法不会调用
  componentDidMount () {
    const id = this.props.match.params.id * 1
    // 模拟发ajax请求
    this.getDetail(id)
  }

  // 接收到新的属性 <===路由参数变化
  componentWillReceiveProps (nextProps) {
    const id = nextProps.match.params.id * 1
    this.getDetail(id)
  }

  getDetail = (id) => {
    // 模拟发ajax请求
    setTimeout(() => {
      const detail = allDetails.find(detail => detail.id===id)
      this.setState({
        detail
      })
    }, 1000)
  }

  render() {
    const {detail} = this.state
    return (
      <ul>
        <li>ID: {this.props.match.params.id}</li>
        <li>TITLE: {detail.title}</li>
        <li>CONTENT: {detail.content}</li>
      </ul>
    )
  }
}
