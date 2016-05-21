import React from 'react'

import FlowPanel from '../FlowPanel.jsx'
import Card from './Card.jsx'
import FlatButton from '../input/FlatButton.jsx'

const styles = require('./CourseEditor.css')

export default function CourseEditor(props) {
  const {
    draft,
    moveLesson,
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
          {draft.get('lessons').map((lessonLink) =>(
          <div key={lessonLink.get('_id')}>
            <a href={'/' + lessonLink.get('type') + '/' + lessonLink.get('_id')}>{lessonLink.get('title')}</a>
            <div className={styles.buttons}>
              <div>
                <FlatButton onClick={() => editLesson(lessonLink.get('_id'))}>REDIGERA</FlatButton>
              </div>
            </div>
          </div>))}
        </FlowPanel>
      </Card>
    )
  }
}
