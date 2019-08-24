import React, {Component} from 'react'
import axios from 'axios'

/* 
应用根组件
*/
export default class App extends Component {

  state = {
    repoName: '',
    repoUrl: ''
  }

  /* 
  在第一次render()后调用
  执行异步操作: 发ajax请求
  */
  componentDidMount () {
    const url = `https://api.github.com/search/repositories?q=r&sort=stars`
    // 使用axios发送异步ajax请求获取数据
   /*  axios.get(url)
      .then(response => { // response: 请求成功的所有相关信息的对象
        // console.log(response)
        // 得到响应体数据
        const result = response.data
        //取出需要的数据
        const {name, html_url} = result.items[0]
        // 更新状态
        this.setState({
          repoName: name,
          repoUrl: html_url
        })

      })
      .catch(error => {
        // debugger
        console.log(error)
        alert('请求失败')
      }) */

    // 使用fetch发送异步ajax请求获取数据
    fetch(url)
      .then((response) => {
        if (response.ok) {// 请求成功了
          return response.json()   // 返回一个promise
        } else { // 请求出错了
          throw new Error('request error status='+response.status)
        }
      }).then((result) => {
         //取出需要的数据
         const {name, html_url} = result.items[0]
         // 更新状态
         this.setState({
           repoName: name,
           repoUrl: html_url
         })
      }).catch((error) => {
        console.log(error)
        alert('请求失败')
      })
  }

  render() {
    const { repoName, repoUrl } = this.state
    if (!repoName) {
      return <h2>LOADING...</h2>
    } else {
      return (
        <div>
          most star repo is 
          <a href={repoUrl}>{repoName}</a>
        </div>
      )
    }

  }
}

