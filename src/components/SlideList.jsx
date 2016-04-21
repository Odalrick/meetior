import React from 'react'
import Slide from './Slide'

export default function (props) {
  const {slides, setSlideText, moveSlide,
    startEditingSlide, stopEditingSlide, deleteSlide} = props
  return (
    <div>
      <ol>
        {
          slides
            .map((s, i) =>
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
                  stopEditingSlide={()=>stopEditingSlide(i)}
                  deleteSlide={()=>deleteSlide(i)}
                ></Slide>
              </li>
            )
        }
      </ol>      
    </div>
  )
}
