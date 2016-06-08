import React from 'react'
import DropZone from 'react-dropzone'

export default function ImageUploader(props) {
  const {handleImageUpload, className} = props
  return (
    <div>
      <DropZone 
		multiple={false} accept="image/*"
		className={className}
        onDrop={(files) => handleImageUpload(files[0])}>
        <div>Dra en fil hit eller klicka och välj en.</div>
      </DropZone>
    </div>
  )
}
