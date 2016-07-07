import React from 'react'
import Link from './Link'
import style from './Sidebar.css'
import I from 'immutable'

export default function Sidebar(props) {
  return (
    <div className={style.sideBar}>
      <section>
        <h1>Administrera</h1>
        <ul>
          <li><Link to={ I.fromJS({title:"En kurs!", type:"course", id:"eecf0a39454b4b2244ebdc3518899605"}) }></Link></li>
          <li><Link to={ I.fromJS({title:"404", type: "XXX", id: "XXX"}) }></Link></li>
        </ul>
      </section>
    </div>
  )
}
