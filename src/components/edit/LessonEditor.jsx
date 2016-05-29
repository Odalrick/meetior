import React from 'react'

import Link from '../navigation/Link.jsx'
import FlowPanel from '../layout/FlowPanel.jsx'
import Card from './Card.jsx'
import FlatButton from '../input/FlatButton.jsx'
import Loading from '../navigation/Loading.jsx'

import styles from './LessonEditor.css'

export default (props) => {
  const {
    draft,
    setField,
    pending,
    } = props

  const canMove = (i) => !lesson.get('slides').get(i).get('editing')
  return (
    <Loading waitFor={draft}>
      <Card draft={draft} setField={setField} pending={pending}>
      </Card>
    </Loading>
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
