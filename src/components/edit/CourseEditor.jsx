import React from 'react'

import EditorLayout from '../layout/EditorLayout.jsx'
import HeaderEditor from './HeaderEditor.jsx'
import FlowPanel from '../FlowPanel.jsx'
import Card from '../Card.jsx'
import LessonSummary from '../LessonSummary.jsx'
import FlatButton from '../input/FlatButton.jsx'

const styles = require('./CourseEditor.css')

export default function CourseEditor(props) {

  const {
    draft,
    setCourseTitle,
    setCourseDescription,
    setCourseIcon,
    addTag,
    removeTag,
    moveLesson,
    deleteLesson,
    addLesson,
    editLesson,
    } = props
  if (!draft || draft.isEmpty()) {
    return (
    <div style={{width: 200}}>
      <marquee>Loading...</marquee>
    </div>
    )
  }
  else {
    console.log(props.draft.toJS())
    return (
      <EditorLayout className={styles.courseEditor}>
        <HeaderEditor setTitle={setCourseTitle} setDescription={setCourseDescription}
                      setIcon={setCourseIcon} addTag={addTag} removeTag={removeTag}
                      header={draft}/>
        <FlowPanel canMove={() => true} moveItem={moveLesson}>
          {draft.get('lessons').map((lesson, i) => {
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
  }
}
