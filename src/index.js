import React from 'react'
import ReactDOM from 'react-dom'
import 'whatwg-fetch'  // 内部先判断window是否有fetch, 如果没有, 给window添加一个fetch方法(内部包装xhr)

import './index.css'

import App from './App.jsx'

ReactDOM.render(<App/>, document.getElementById('root'))


