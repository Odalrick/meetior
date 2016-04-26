import React from 'react'
import SlidePanel from './SlidePanel'

export default (props) => {
	const {lesson, setLessonTitle, setLessonDescription} = props
	const onLessonTitleChange = (event) => {
	  const newTitle  = event.target.value
    setLessonTitle(newTitle)
  }

  const onLessonDescriptionChange = (event) => {
    const newDescription  = event.target.value
    setLessonDescription(newDescription)
  }

	return (
		<div>
		  <section>
		  <h1>Skapa lektion</h1>
		  <button>Spara</button>
		  <label>Titel<input value={lesson.get('title')} onChange={onLessonTitleChange}></input></label>
		  <label>Beskrivning<input value={lesson.get('description')} onChange={onLessonDescriptionChange}></input></label>
		  </section>
			<SlidePanel
				{...props}
			/>

		</div>
	)
}
