import React from 'react'

export default function Sidebar(props) {
  return (
    <div>
      <div>Profile</div>
      <section>
        <ul>
          <li>Överblick</li>
          <li>Statistik</li>
          <li className="chosen">Taggar</li>
        </ul>
      </section>
    </div>
  )
}
