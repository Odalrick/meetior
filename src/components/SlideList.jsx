import React from 'react'

export default function(props) {
  const slides = props.slides
  return (
    <ol>
      {
        slides.map((s) =>
          <li key={s.get('_id')}><textarea defaultValue={s.get('content')}></textarea></li>
        )
      }
    </ol>
  )
}
