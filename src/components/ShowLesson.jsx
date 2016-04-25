import React from 'react'

export default function ShowLesson(props) {
  const lessons = props.lessons.map(lesson => <li key={'showLesson-' + lesson.get('_id')}>{lesson.get('title')}</li>)
  return (
    <div>
      <button onClick={props.loadLessons}>Load lessons</button>
      <ul>
        {lessons}
      </ul>
    </div>
  )
}
