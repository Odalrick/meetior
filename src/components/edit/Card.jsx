import React from 'react'
import ImageInput from '../input/ImageInput.jsx'
import TagInput from '../input/TagInput.jsx'

import styles from './Card.css'

export default function Card(props) {
  const { draft, setField, setAttachment, pending } = props
  const onTitleChange = (event) => {
    const newTitle = event.target.value
    setField('title', newTitle)
  }

  const onDescriptionChange = (event) => {
    const newDescription = event.target.value
    setField('description', newDescription)
  }

  const onIconChange = (file) => {
    setField('icon', file.preview)
    setAttachment('icon', file)
  }

  const spinner = pending ? <div>Test pending</div> : <div>test not pending</div>

  return (
    <section className={styles.card}>
      <div className={styles.titleInput}>
        <label>Titel</label>
        <input className={styles.titleInput} value={draft.get('title')} onChange={onTitleChange} />
      </div>
      <div className={styles.imageInput}>
        <label>Bild</label>
        <ImageInput onChange={onIconChange} value={draft.get('icon')} />
        {spinner}
      </div>
      <div className={styles.descriptionInput}>
        <label>Beskrivning</label>
        <textarea className={styles.descriptionInput} rows="5" value={draft.get('description')}
                  onChange={onDescriptionChange}>
        </textarea>
      </div>
      <label>Taggar</label>
      <TagInput className={styles.tagInput}/>
      {props.children}
    </section>
  )
}
