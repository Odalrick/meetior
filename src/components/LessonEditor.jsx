import React from 'react'
import SlidePanel from './SlidePanel'
import ImageUploader from './ImageUploader'

import style from './LessonEditor.css'

export default (props) => {
  const {lesson, setLessonTitle, setLessonDescription, setLessonIcon} = props
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
          <label>Beskrivning</label>
          <input value={lesson.get('description')} onChange={onLessonDescriptionChange}></input>
        </div>
        <div>          
          <label>Bild</label>
          <ImageUploader className={style.imageUploader} handleImageUpload={setLessonIcon} />
        </div>
      </section>
      <SlidePanel
        {...props}
      />

    </div>
  )
}
