import React from 'react'

import Modal from 'react-modal'
import WYSIWYG from './WYSIWYG'
import style from './SlideEditor.css'

export default function SlideEditor(props){
  return (
    <Modal isOpen={true}>
      <WYSIWYG {...props}></WYSIWYG>
    </Modal>)
}
