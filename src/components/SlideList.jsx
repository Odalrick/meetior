import React from 'react'

export default function(props) {
  const slides = props.slides
  return (
    <ol>
      {
        slides.map((s, i) =>
          <li key={i}><textarea defaultValue={s}></textarea></li>
        )
      }
    </ol>
  )
}
