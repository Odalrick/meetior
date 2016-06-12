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
    makeSlideLink,
    } = props

  const panelItems = draft && draft.get('slides') ? draft.get('slides').map((slide, i) => (
    <section>
      <Link to={makeSlideLink(i, slide.get('title'))} />
      <p>{slide.get('text').slice(0, 100)}...</p>
    </section>)) : []
  return (
    <Loading waitFor={draft} >
      <Card draft={draft} setField={setField} pending={pending} />
      <FlowPanel canMove={() => true} moveItem={() => {}} >
        {panelItems}
      </FlowPanel>
    </Loading>
  )
}
