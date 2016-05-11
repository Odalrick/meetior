import React from 'react'

import EditorLayout from './EditorLayout'
import HeaderEditor from './HeaderEditor'
import FlowPanel from './FlowPanel'
import LessonCard from './LessonCard'

export default function CourseEditor(props) {
  const {course} = props
  return (
    <EditorLayout>
      <HeaderEditor header={course}/>
      <FlowPanel canMove={() => true} moveItem={(from, to)=>{console.log('Move me...', from, to)}}>
        {course.get('lessons').map((lesson) => {
          return (
            <LessonCard key={lesson.get('_id')} lesson={lesson}/>
          )
        })}
      </FlowPanel>
    </EditorLayout>
  )
};
