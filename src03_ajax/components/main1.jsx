import React, { Component } from 'react'
import axios from 'axios'

export default class Main extends Component {

  state = {
    firstView: true, // 是否显示第一个界面
    loading: false, // 请求中
    users: [], // 搜索出所有匹配的用户列表
    errorMsg: '', // 请求失败需要显示的错误提示文本
  }
  
  componentWillReceiveProps (nextProps) { // 接收到了新的searchName, 应该发请求
    const searchName = nextProps.searchName
    // 更新状态(请求中)
    this.setState({
      firstView: false,
      loading: true
    })

    // 发ajax请求获取users
    const url = `https://api.github.com/search/users2?q=${searchName}`
    axios.get(url)
      .then(response => {
        const result = response.data
        const users = result.items.map(item => ({
          username: item.login,
          url: item.html_url,
          avatar_url: item.avatar_url,
        }))
         // 如果成功, 更新状态(成功)
        this.setState({
          loading: false,
          users
        })
      })
      .catch(error => {
        debugger
        // 如果失败, 更新状态(失败)
        this.setState({
          loading: false,
          errorMsg: '请求失败: statusCode is ' + error.response.status
        })
      })
  }

  render() {
    const { firstView, loading, users, errorMsg } = this.state

    // 条件渲染
    if (firstView) {
      return <h2>请输入关键字进行搜索 {this.props.searchName}</h2> // ctrl + down
    } else if (loading) {
      return <h2>正在搜索中...</h2> // alt + down
    } else if (errorMsg) {
      return <h2>{errorMsg}</h2>
    } else {
      return (
        <div className="row">
          {
            users.map(user => (
              <div className="card" key={user.username}>
                <a href={user.url}>
                  <img src={user.avatar_url} style={{width: 100}} alt="avatar"/>
                </a>
                <p className="card-text">{user.username}</p>
              </div>
            ))
          }
        </div>
      )
    }
    
  }
}
