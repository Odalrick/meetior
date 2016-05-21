import React from 'react'
import ImageUploader from '../input/ImageUploader.jsx'
import TagInput from '../input/TagInput.jsx'
import FlatButton from '../input/FlatButton.jsx'

import styles from './HeaderEditor.css'

export default (props) => {
  const {header, tags, setTitle, setDescription, setIcon,
    addTag, removeTag} = props
  const onTitleChange = (event) => {
    const newTitle = event.target.value
    setTitle(newTitle)
  }

  const onDescriptionChange = (event) => {
    const newDescription = event.target.value
    setDescription(newDescription)
  }

  return (
    <section className={styles.headerEditor}>
      <div className={styles.titleInput}>
        <label>Titel</label>
        <input className={styles.titleInput} value={header.get('title')} onChange={onTitleChange}/>
      </div>
      <FlatButton>Spara</FlatButton>
      <div className={styles.iconInput}>
        <label>Bild</label>
        <ImageUploader className={styles.imageUploader} handleImageUpload={setIcon}/>
      </div>
      <div className={styles.descriptionInput}>
        <label>Beskrivning</label>
        <textarea className={styles.descriptionInput} rows="5" value={header.get('description')}
                  onChange={onDescriptionChange}>
        </textarea>
      </div>
      <label>Taggar</label>
      <TagInput className={styles.tagInput} handleDeleteTag={removeTag} handleAddTag={addTag}
                tags={header.get('tags')} suggestions={tags}/>
    </section>
  )
}
