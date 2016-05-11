import React from 'react'

import EditorLayout from './EditorLayout'
import HeaderEditor from './HeaderEditor'
import LessonCard from './LessonCard'

export default function CourseEditor(props) {
  const {course} = props
  return (
    <EditorLayout>
      <HeaderEditor header = {course} />
	  {course.get('lessons').map((lesson) => {
		return (
			<LessonCard key={lesson.get('_id')} lesson={lesson} />
		)
	  })}
    </EditorLayout>
  )
};
