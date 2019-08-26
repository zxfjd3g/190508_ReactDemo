import React from 'react'
import {NavLink} from 'react-router-dom'

export default function MyNavLink(props) {
  return <NavLink activeClassName="my-active" {...props}/>  // 将接收的所有属性原样传递给NavLink
}
