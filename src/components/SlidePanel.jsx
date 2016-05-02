import React from 'react'

import SlidePanelLayout from './SlidePanelLayout'
import SlidePanelItem from './SlidePanelItem'

import style from './SlidePanel.css'

export default function SlidePanel(props) {
  const {slides, moveSlide, startEditingSlide, stopEditingSlide, setSlideText,
    addSlide, deleteSlide} = props
  return (
    <SlidePanelLayout>
      {
        slides
          .map((slide, i) =>
            <SlidePanelItem index={i} key={slide.get('_id') || i} slide={slide}
             moveSlide={moveSlide}
             startEditingSlide={() => startEditingSlide(i)}
             setSlideText={(newText) => setSlideText(i, newText)}
             stopEditingSlide={()=>stopEditingSlide(i)}
             deleteSlide={()=>deleteSlide(i)}
             />)
      }
      <div className={style.emptyPanelItem} onClick={addSlide}></div>
    </SlidePanelLayout>
  )
}
