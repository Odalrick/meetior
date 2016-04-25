import React from 'react'

export default function SlidePanelLayout(props) {
  return (
    <div>
      {props.children
        .map((c, i) =>
            <div key={i}>{c}</div>
        )}
    </div>
  )
}
