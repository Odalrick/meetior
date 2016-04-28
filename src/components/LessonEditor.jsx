import React from 'react'
import SlidePanel from './SlidePanel'
import ImageUploader from './ImageUploader'
import TagInput from './TagInput'

import style from './LessonEditor.css'

export default (props) => {
  const {lesson, tags, setLessonTitle, setLessonDescription, setLessonIcon,
    addTag, removeTag} = props
  const onLessonTitleChange = (event) => {
    const newTitle = event.target.value
    setLessonTitle(newTitle)
  }

  const onLessonDescriptionChange = (event) => {
    const newDescription = event.target.value
    setLessonDescription(newDescription)
  }

  return (
    <div className={style.lessonEditor}>
      <section className={style.lessonInfo}>
		<div>
			<h1>Skapa lektion</h1>
			<button>Spara</button>
		</div>
        <div>
          <label>Titel</label>
          <input value={lesson.get('title')} onChange={onLessonTitleChange}></input>
        </div>
        <div>
          <label>Bild</label>
          <ImageUploader className={style.imageUploader} handleImageUpload={setLessonIcon} />
        </div>
        <label>Beskrivning</label>
        <textarea rows="1" value={lesson.get('description')} onChange={onLessonDescriptionChange}></textarea>

      </section>
      <TagInput handleDeleteTag={removeTag} handleAddTag={addTag}
                tags={lesson.get('tags')} suggestions={tags} />
      <SlidePanel
        {...props}
      />

    </div>
  )
}
