import React, {Component} from 'react'
import Search from './components/search'
import Main from './components/main'

/* 
应用根组件
*/
export default class App extends Component {

  state = {
    searchName: '', // 搜索的关键字
  }

  setSearchName = (searchName) => {
    this.setState({
      searchName
    })
  }

  render() {
    const {searchName} = this.state
    return (
      <div className="container">
        <Search setSearchName={this.setSearchName}/>
        <Main searchName={searchName}/>
      </div>
    )
  }
}

