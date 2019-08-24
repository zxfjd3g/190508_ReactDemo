import React, { Component } from 'react'

export default class Search extends Component {

  search = () => {
    const searchName = this.refs.name.value.trim()
    if (searchName) {
      this.props.setSearchName(searchName)
      this.refs.name.value = ''
    }
    
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref="name" type="text" placeholder="enter the name you search"/>
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
