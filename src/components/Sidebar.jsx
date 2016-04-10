import React from 'react'

export default function Sidebar(props) {
  return (
    <div>
      <div>
        <div className="row">
          <img className="col-xs-4" src="http://www.clker.com/cliparts/c/f/c/5/1368304250375490740bioman-avatar-3-blue-icon-hi.png" alt="profile"/>
        </div>
      </div>
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
