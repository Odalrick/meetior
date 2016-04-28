import React from 'react'
import DropZone from 'react-dropzone'

export default function ImageUploader(props) {
  const {handleImageUpload, className} = props
  console.log(className);
  return (
    <div>
      <DropZone multiple={false} accept="image/*"
		className={className}
        onDrop={handleImageUpload}>
        <div>Dra en fil hit eller klicka och välj en.</div>
      </DropZone>
    </div>
  )
}
