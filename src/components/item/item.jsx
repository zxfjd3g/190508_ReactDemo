import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './item.css'

export default class Item extends Component {

  static propTypes = {
    comment: PropTypes.object.isRequired,
    deleteComment: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
  }

  deleteComment = () => {
    if (window.confirm('确定删除评论吗?')) {
      this.props.deleteComment(this.props.index)
    }
  }

  render() {
    const { username, content } = this.props.comment
    return (
      <li className="list-group-item">
        <div className="handle">
          <a href="##" onClick={this.deleteComment}>删除</a>
        </div>
        <p className="user"><span>{username}</span><span>说:</span></p>
        <p className="centence">{content}</p>
      </li>
    )
  }
}
