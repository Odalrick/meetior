import React from 'react'

import EditorLayout from './EditorLayout'
import HeaderEditor from './HeaderEditor'
import FlowPanel from '../FlowPanel'
import Card from '../Card'
import LessonSummary from '../LessonSummary'
import FlatButton from '../FlatButton'

import styles from './CourseEditor.css'

export default function CourseEditor(props) {
  const {course, setCourseTitle, setCourseDescription, setCourseIcon, addTag, removeTag,
    moveLesson, deleteLesson, addLesson, editLesson} = props
  return (
    <EditorLayout className={styles.courseEditor}>
      <HeaderEditor setTitle={setCourseTitle} setDescription={setCourseDescription}
                    setIcon={setCourseIcon} addTag={addTag} removeTag={removeTag}
                    header={course}/>
      <FlowPanel canMove={() => true} moveItem={moveLesson}>
        {course.get('lessons').map((lesson, i) => {
          return (
            <Card key={lesson.get('_id')}>
              <LessonSummary lesson={lesson}/>
              <div className={styles.buttons}>
                <div>
                  <FlatButton onClick={() => editLesson(lesson.get('_id'))}>REDIGERA</FlatButton>
                  <FlatButton onClick={() => deleteLesson(i)}>TA BORT</FlatButton>
                </div>
              </div>
            </Card>
          )
        })}
      </FlowPanel>
    </EditorLayout>
  )
};
