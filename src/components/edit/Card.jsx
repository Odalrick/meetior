import React from 'react'
import ImageUploader from '../input/ImageUploader.jsx'
import TagInput from '../input/TagInput.jsx'
import FlatButton from '../input/FlatButton.jsx'

import styles from './Card.css'

export default function Card(props) {
  const {draft, setField} = props
  const onTitleChange = (event) => {
    const newTitle = event.target.value
    setField('title', newTitle)
  }

  const onDescriptionChange = (event) => {
    const newDescription = event.target.value
    setField('description', newDescription)
  }
  return (
    <section className={styles.card}>
      <div className={styles.titleInput}>
        <label>Titel</label>
        <input className={styles.titleInput} value={draft.get('title')} onChange={onTitleChange}/>
      </div>
      <div className={styles.iconInput}>
        <label>Bild</label>
        <ImageUploader className={styles.imageUploader} handleImageUpload={setField('icon')}/>
      </div>
      <div className={styles.descriptionInput}>
        <label>Beskrivning</label>
        <textarea className={styles.descriptionInput} rows="5" value={draft.get('description')}
                  onChange={onDescriptionChange}>
        </textarea>
      </div>
      <label>Taggar</label>
      <TagInput className={styles.tagInput} />
      {props.children}
    </section>
  )
}
