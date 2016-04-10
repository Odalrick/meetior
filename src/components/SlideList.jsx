import React from 'react'

import Slide from './Slide'

export default function(props) {
  const slides = props.slides
  const editSlideContent = props.editSlideContent
  return (
    <ol>
      {
        slides.map((s) =>
          <li key={s.get('_id')}>
            <Slide
              slide={s}
              editSlideContent={(newContent) => {
                editSlideContent('unknown course', s.get('_id'), newContent)
            }} ></Slide>
          </li>
        )
      }
    </ol>
  )
}
