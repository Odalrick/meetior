import React from 'react'

import Link from '../navigation/Link.jsx'
import FlowPanel from '../FlowPanel.jsx'
import Card from './Card.jsx'
import FlatButton from '../input/FlatButton.jsx'

import styles from './CourseEditor.css'

export default function CourseEditor(props) {
  const {
    draft,
    moveLesson,
    deleteLesson,
    editLesson,
    setField,
    } = props
  if (!draft || draft.isEmpty()) {
    return (
      <div style={{width: 200}}>
        <marquee>Loading...</marquee>
      </div>
    )
  }
  else {
    return (
      <Card draft={draft} setField={setField}>
        <FlowPanel canMove={() => true} moveItem={moveLesson}>
          {draft.get('lessons').map((lessonLink, i) =>(
          <div className={styles.lessonLink} key={lessonLink.get('_id')}>
            <Link to={'/' + lessonLink.get('type') + '/' + lessonLink.get('_id')}>{lessonLink.get('title')}</Link>
            <div className={styles.footer}>
              <span className={styles.ordinal}>{i}.</span>
              <FlatButton onClick={() => {deleteLesson(i); alert('GOTCHA!')}}>REDIGERA</FlatButton>
              <FlatButton onClick={() => deleteLesson(i) }>TA BORT</FlatButton>
            </div>
          </div>))}
        </FlowPanel>
      </Card>
    )
  }
}
