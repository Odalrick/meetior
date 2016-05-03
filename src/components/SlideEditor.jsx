import React from 'react'

import Modal from 'react-modal'
import WYSIWYG from './WYSIWYG'
import style from './SlideEditor.css'

export default function SlideEditor(props){
	console.log(props)
  return (
    <Modal isOpen={props.isEditorOpen}>
      <WYSIWYG {...props}></WYSIWYG>
	  <button className={style.closeButton} onClick={props.handleCloseEditor}>Stäng</button>
    </Modal>)
}
