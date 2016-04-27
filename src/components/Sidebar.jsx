import React from 'react'

export default function Sidebar(props) {
  return (
    <div>      
      <section>
        <ul className="nav nav-pills nav-stacked">
          <li><a>Kurser</a></li>
          <li className="active"><a>Testkurs</a>
          </li>
        </ul>
      </section>
    </div>
  )
}
