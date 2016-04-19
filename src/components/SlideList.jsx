import React from 'react'
import Slide from './Slide'

export default function(props) {
  const {slides, setSlideText, moveSlide, startEditingSlide} = props
  return (
    <ol>
      {
        slides
          .map((s,i) =>
            <li key={i}>
              <Slide
                slide={s}
                index={i}
                setSlideText={(newText) => {
                   setSlideText(i, newText)
                  }
                }
                moveSlide={(fromIndex, toIndex) => {
                    moveSlide(fromIndex, toIndex)
                  }
                }
                startEditingSlide={()=>startEditingSlide(i)}
                ></Slide>
            </li>
          )
      }
    </ol>
  )
}
