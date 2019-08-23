import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './add.css'

export default class Add extends Component {

  static propTypes = {
    addComment: PropTypes.func.isRequired
  }

  addComment = () => {
    // 收集输入数据, 封装comment对象
    const username = this.refs.username.value
    const content = this.refs.content.value
    if (!username || !content) {
      return
    }

    const comment = {
      id: Date.now(),
      username,
      content
    }

    // 向comments添加comment
    this.props.addComment(comment)

    // 清除输入数据
    this.refs.username.value = ''
    this.refs.content.value = ''
  }
  render() {
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input type="text" className="form-control" placeholder="用户名" ref="username"/>
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea className="form-control" rows="6" placeholder="评论内容" ref="content"></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="button" className="btn btn-default pull-right" onClick={this.addComment}>提交</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
