import React from 'react'

import Link from '../navigation/Link.jsx'
import FlowPanel from '../layout/FlowPanel.jsx'
import Card from './Card.jsx'
import FlatButton from '../input/FlatButton.jsx'
import Loading from '../navigation/Loading.jsx'

import styles from './CourseEditor.css'

export default function CourseEditor(props) {
  const {
    draft,
    moveLesson,
    deleteLesson,
    editLesson,
    setField,
  } = props

  const panelItems = draft.get('lessons') ? draft.get('lessons').map((lessonLink, i) =>(
    <div className={styles.lessonLink} key={lessonLink.get('_id')}>
      <Link to={'/' + lessonLink.get('type') + '/' + lessonLink.get('_id')}>{lessonLink.get('title')}</Link>
      <div className={styles.footer}>
        <span className={styles.ordinal}>{i}.</span>
        <FlatButton onClick={() => {deleteLesson(i); alert('GOTCHA!')}}>REDIGERA</FlatButton>
        <FlatButton onClick={() => deleteLesson(i) }>TA BORT</FlatButton>
      </div>
    </div>)) : []

  return (
    <Loading waitFor={draft}>
      <Card draft={draft} setField={setField}>
        <FlowPanel canMove={() => true} moveItem={moveLesson}>
          {panelItems}
        </FlowPanel>
      </Card>
    </Loading>
  )
}
