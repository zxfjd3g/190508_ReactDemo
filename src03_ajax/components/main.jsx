import React, { Component } from 'react'
import axios from 'axios'

export default class Main extends Component {

  state = {
    firstView: true, // 是否显示第一个界面
    loading: false, // 请求中
    users: [], // 搜索出所有匹配的用户列表
    errorMsg: '', // 请求失败需要显示的错误提示文本
  }

  async componentWillReceiveProps (nextProps) { // 接收到了新的searchName, 应该发请求
    const searchName = nextProps.searchName
    // 更新状态(请求中)
    this.setState({
      firstView: false,
      loading: true
    })

    // 发ajax请求获取users
    const url = `https://api.github.com/search/users2?q=${searchName}`

    try {
      const response = await axios.get(url)
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
    } catch (error) {
      // 如果失败, 更新状态(失败)
      this.setState({
        loading: false,
        errorMsg: '请求失败: statusCode is ' + error.response.status
      })
    }
    

    /* axios.get(url)
      .then(response => {
        
      })
      .catch(error => {
        debugger
        
      }) */
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

/* 
理解并使用async/await
1. 理解
  具体说: 简化promise的使用, 不用再通过then()/catch()来指定回调函数
  抽象说: 以同步编码实现异步流程
2. 使用await
  在返回promise的表达式左侧使用, 不想要promise, 而要得到其异步执行返回的成功结果
  使用try...catch来处理异步失败的结果
3. 使用async
  await所在最近函数定义左侧
*/