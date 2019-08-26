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

  componentDidMount () {
    // 模拟发ajax请求
    setTimeout(() => {
      const id = this.props.match.params.id * 1
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
