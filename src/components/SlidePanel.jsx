import React from 'react'

import SlidePanelLayout from './SlidePanelLayout'
import SlidePanelItem from './SlidePanelItem'


export default function SlidePanel(props) {
  const {slides, moveSlide, startEditingSlide, stopEditingSlide, setSlideText,
    addSlide, deleteSlide} = props
  return (
    <SlidePanelLayout>
      {
        slides
          .map((slide, i) =>
            <SlidePanelItem index={i} key={i} slide={slide}
             moveSlide={moveSlide}
             startEditingSlide={() => startEditingSlide(i)}
             setSlideText={(newText) => setSlideText(i, newText)}
             stopEditingSlide={()=>stopEditingSlide(i)}
             deleteSlide={()=>deleteSlide(i)}
             />)
      }
      <button onClick={addSlide}>ADD SLIDE</button>
    </SlidePanelLayout>
  )
}
