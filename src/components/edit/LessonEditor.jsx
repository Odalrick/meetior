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
    setAttachment,
    pending,
    makeSlideLink,
    } = props

  const panelItems = draft && draft.get('slides') ? draft.get('slides').map((slide, i) => (
    <section onClick={() => console.log('clicked')}>
      <span>{i}</span>
      <Link to={makeSlideLink(i, slide.get('title'))}></Link>
      <p>{slide.get('text').slice(0,100)}...</p>
    </section>)) : []
  const canMove = (i) => !lesson.get('slides').get(i).get('editing')
  return (
    <Loading waitFor={draft}>
      <Card draft={draft} setField={setField} setAttachment={setAttachment} pending={pending}>
      </Card>
      <FlowPanel canMove={() => true} moveItem={() => {}}>
        {panelItems}
      </FlowPanel>
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
