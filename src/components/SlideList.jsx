import React from 'react'
import SlideEditor from './SlideEditor'

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
                <SlideEditor
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
                ></SlideEditor>
              </li>
            )
        }
      </ol>
    </div>
  )
}
