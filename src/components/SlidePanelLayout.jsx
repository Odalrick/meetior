import React from 'react'

import style from './SlidePanelLayout.css'


export default function SlidePanelLayout(props) {
  return (
    <div>		
		<div className="row">
		  {props.children[0]
			.map((c, i) => {
					return <div className="col-md-3" key={i}>{c}</div>
				}
			)}
		  <div className="col-md-3">
			{props.children[1]}
		  </div>
		</div>
    </div>
  )
}
