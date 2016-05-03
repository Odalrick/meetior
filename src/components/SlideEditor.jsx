import React from 'react'

import WYSIWYG from './WYSIWYG'
import style from './SlideEditor.css'

export default function SlideEditor(props){
  const {stopEditingSlide, setSlideText, text} = props
  const stopEditing = (event) => {
    event.stopPropagation()
    stopEditingSlide()
  }
  return (
    <div className={style.modalOverlay}>
      <div className={style.content}>
        <WYSIWYG  handleEditorChange={setSlideText} text={text}></WYSIWYG>
	      <button className={style.closeButton} onClick={stopEditing}>&#x2716;</button>
	    </div>
    </div>)
}
