import React from "react"
import { Button, message } from 'antd'
// import 'antd/dist/antd.css' // 引入


function handleClick () {
  message.success('This is a success message')
}

/* 
应用根组件
*/
export default function App(props) {
  return (
    <Button type="primary" onClick={handleClick}>Button</Button>
  )
}
