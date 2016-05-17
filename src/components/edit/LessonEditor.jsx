import React from 'react'

import EditorLayout from './EditorLayout'
import HeaderEditor from './HeaderEditor'
import FlowPanel from '../FlowPanel'
import Card from '../Card'
import Slide from '../Slide'
import FlatButton from '../FlatButton'

import styles from './LessonEditor.css'

export default (props) => {
  const {lesson, tags, setLessonTitle, setLessonDescription, setLessonIcon, addTag, removeTag,
    moveSlide, deleteSlide, addSlide, editSlide} = props
  const canMove = (i) => !lesson.get('slides')[i].get('editing');
  return (
    <EditorLayout className={styles.lessonEditor}>
      <HeaderEditor setTitle={setLessonTitle} setDescription={setLessonDescription}
                    setIcon={setLessonIcon} addTag={addTag} removeTag={removeTag}
                    header={lesson}/>
      <FlowPanel canMove={canMove} moveItem={moveSlide}>
        {lesson.get('slides').map((slide, i) => {
          return (
            <Card key={slide.get('_id')}>
              <Slide text={slide.get('text')}></Slide>
            </Card>
          )
        })}
      </FlowPanel>
    </EditorLayout>

  )
}

/*
 <Card key={lesson.get('_id')}>
 <LessonSummary lesson={lesson}/>
 <div className={styles.buttons}>
 <div>
 <FlatButton onClick={() => editLesson(lesson.get('_id'))}>REDIGERA</FlatButton>
 <FlatButton onClick={() => deleteLesson(i)}>TA BORT</FlatButton>
 </div>
 </div>
 </Card>
 */
