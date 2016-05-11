import React from 'react'
import {Link} from 'react-router'
import style from './Sidebar.css'
export default function Sidebar(props) {
  return (
    <div className={style.sideBar}>
      <section>
        <h1>Administrera</h1>
        <ul>
          <li><Link to="/admin/courses/1">Kurs 1</Link></li>
        </ul>
      </section>
    </div>
  )
}
