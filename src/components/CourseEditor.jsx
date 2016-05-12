import React from 'react'

import EditorLayout from './EditorLayout'
import HeaderEditor from './HeaderEditor'
import FlowPanel from './FlowPanel'
import LessonCard from './LessonCard'

import styles from './CourseEditor'

export default function CourseEditor(props) {
  const {course} = props
  return (
    <EditorLayout className={styles.courseEditor}>
      <HeaderEditor header={course}/>
      <FlowPanel canMove={() => true} moveItem={(from, to)=>{console.log('Move me...', from, to)}}>
        {course.get('lessons').map((lesson) => {
          return (
			<div key={lesson.get('_id')}>
				<LessonCard className={styles.lessonCard} lesson={lesson}/>
				<div className={styles.buttons}>
				  <div>					
					<button>REDIGERA</button>
					<button>TA BORT</button>
				  </div>
				</div>
			</div>
          )
        })}
      </FlowPanel>
    </EditorLayout>
  )
};
