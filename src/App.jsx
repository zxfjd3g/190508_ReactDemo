import React, {Component} from 'react'

import Add from './components/add/add'
import List from './components/list/list'

/* 
应用根组件
*/
export default class App extends Component {

  state = {
    comments: [
      {id: 2, username: 'tom', content: 'React so easy!'},
      {id: 4, username: 'jack', content: 'React so so!'}
    ]
  }

  render() {
    const { comments } = this.state
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <Add />
          <List comments={comments}/>
        </div>
      </div>
    )
  }
}

