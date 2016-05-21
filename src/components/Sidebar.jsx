import React from 'react'
import style from './Sidebar.css'
export default function Sidebar(props) {
  return (
    <div className={style.sideBar}>
      <section>
        <h1>Administrera</h1>
        <ul>
          <li><a href="/course/eecf0a39454b4b2244ebdc3518899605">Kurs 1</a></li>
        </ul>
      </section>
    </div>
  )
}
