import React from 'react'

import logo from './logo.svg'
import './App.css'

/* 
应用根组件
*/
export default function App() {
  return (
    <div>
      <img className="img" src={logo} alt="logo"/>
      <h2 className="title">第一个react应用组件</h2>
    </div>
  )
}
