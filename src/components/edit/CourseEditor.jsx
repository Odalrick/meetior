import React from 'react'

import EditorLayout from './EditorLayout'
import HeaderEditor from './HeaderEditor'
import FlowPanel from '../FlowPanel'
import Card from '../Card'
import LessonSummary from '../LessonSummary'

import styles from './CourseEditor.css'

export default function CourseEditor(props) {
  const {course} = props
  return (
    <EditorLayout className={styles.courseEditor}>
      <HeaderEditor header={course}/>
      <FlowPanel canMove={() => true} moveItem={(from, to)=>{console.log('Move me...', from, to)}}>
        {course.get('lessons').map((lesson) => {
          return (
			<Card key={lesson.get('_id')}>
				<LessonSummary lesson={lesson}/>
				<div className={styles.buttons}>
				  <div>					
					<button className={styles.button}>REDIGERA</button>
					<button className={styles.button}>TA BORT</button>
				  </div>
				</div>
			</Card>
          )
        })}
      </FlowPanel>
    </EditorLayout>
  )
};
