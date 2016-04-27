import React from 'react'
import DropZone from 'react-dropzone'

export default function ImageUploader(props) {
  const {handleImageUpload} = props
  return (
    <div>
      <DropZone multiple={false} accept="image/*"
        onDrop={handleImageUpload}>
        <div>Dra en fil hit eller klicka och välj en.</div>
      </DropZone>
    </div>
  )
}
