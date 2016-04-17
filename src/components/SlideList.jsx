import React from 'react'

import Slide from './Slide'

export default function(props) {
  const {slides, editSlideContent, moveSlide} = props
  return (
    <ol>
      {
        slides
          .sort((s1, s2) => s1.get('position') - s2.get('position'))
          .map((s,i) =>
            <li key={s.get('_id')}>
              <Slide
                slide={s}
                index={s.get('position')}
                editSlideContent={(newContent) => {
                   editSlideContent('unknown course', s.get('_id'), newContent)
                  }
                }
                moveSlide={(newPosition) => {
                    moveSlide('unknown course', s.get('_id'), newPosition)
                  }
                }
                ></Slide>
            </li>
          )
      }
    </ol>
  )
}
