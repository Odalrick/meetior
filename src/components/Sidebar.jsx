import React from 'react'

export default function Sidebar() {
  return (
    <div>
      <div>
        <div className="row">
          <img className="col-xs-4" src="http://zblogged.com/wp-content/uploads/2015/11/17.jpg" alt="profile"/>
          <div className="col-xs-8">Göran Ingvarsson</div>
        </div>
      </div>
      <section>
        <ul className="nav nav-pills nav-stacked">
          <li><a>Överblick</a></li>
          <li><a>Statistik</a></li>
          <li className="active"><a>Taggar</a></li>
        </ul>
      </section>
    </div>
  )
}
