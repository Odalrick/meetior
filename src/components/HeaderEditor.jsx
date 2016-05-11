import React from 'react'
import ImageUploader from './ImageUploader'
import TagInput from './TagInput'

import style from './HeaderEditor.css'

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
    <section className={style.headerEditor}>      
        <div>
          <h1>Skapa huvud..?</h1>
          <button>Spara</button>
        </div>
        <div>
          <label>Titel</label>
          <input className={style.titleInput} value={header.get('title')} onChange={onTitleChange}></input>
        </div>
        <div>
          <label>Bild</label>
          <ImageUploader className={style.imageUploader} handleImageUpload={setIcon}/>
        </div>
        <label>Beskrivning</label>
        <textarea className={style.descriptionInput} rows="1" value={header.get('description')}
                  onChange={onDescriptionChange}></textarea>
        <label>Taggar</label>
        <TagInput className={style.tagInput} handleDeleteTag={removeTag} handleAddTag={addTag}
                  tags={header.get('tags')} suggestions={tags}/>      
    </section>
  )
}
