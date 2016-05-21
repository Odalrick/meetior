import React from 'react'

import FlowPanel from '../FlowPanel.jsx'
import Card from './Card.jsx'
import FlatButton from '../input/FlatButton.jsx'

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
          </div>))}
        </FlowPanel>
      </Card>
    )
  }
}
