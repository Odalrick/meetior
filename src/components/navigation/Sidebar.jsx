import React from 'react'
import Link from './navigation/Link'
import style from './Sidebar.css'
export default function Sidebar(props) {
  return (
    <div className={style.sideBar}>
      <section>
        <h1>Administrera</h1>
        <ul>
          <li><Link to="/course/eecf0a39454b4b2244ebdc3518899605">Kurs 1</Link></li>
          <li><Link to="/XXX">404</Link></li>
        </ul>
      </section>
    </div>
  )
}
