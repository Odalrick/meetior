import React from 'react'

import style from './SlidePanelLayout.css'


export default function SlidePanelLayout(props) {
  return (
    <div className={style.slidePanelLayout}>
        {props.children[0]
        .map((c, i) => {
            return <div key={i}>{c}</div>
          }
        )}
        {props.children[1]}
    </div>
  )
}
