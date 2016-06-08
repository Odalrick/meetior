import React from 'react'
import DropZone from 'react-dropzone'

import styles from './ImageInput.css'

export default function ImageInput(props) {
  const {value, onChange} = props

  return (
    <div>
      <DropZone multiple={false} accept="image/*" className={styles.imageInput}
        onDrop={(files) => onChange(files[0])}>
        {value ?
          <img src={value} /> : <div>Dra en fil hit eller klicka och välj en.</div>
        }
      </DropZone>
    </div>
  )
}
