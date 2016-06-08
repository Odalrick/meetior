import React from 'react'
import DropZone from 'react-dropzone'

/* TODO: Remove classname as prop */
export default function ImageInput(props) {
  const {value, onChange} = props
  return (
    <div>
      <DropZone multiple={false} accept="image/*" className={className}
        onDrop={(files) => onChange(files[0])}>
        <div>Dra en fil hit eller klicka och välj en.</div>
      </DropZone>
    </div>
  )
}
