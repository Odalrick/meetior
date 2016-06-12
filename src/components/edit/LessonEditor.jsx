import React from 'react'
import IPropTypes from 'react-immutable-proptypes'

import Link from '../navigation/Link.jsx'
import FlowPanel from '../layout/FlowPanel.jsx'
import Card from './Card.jsx'
import Loading from '../navigation/Loading.jsx'

function LessonEditor(props) {
  const {
    draft,
    setField,
    setAttachment,
    pending,
    makeSlideLink,
    } = props

  const panelItems = draft && draft.get('slides') ? draft.get('slides').map((slide, i) => (
    <section key={`slide-index-${i}`}>
      <Link to={makeSlideLink(i, slide.get('title'))} />
      <p>{slide.get('text').slice(0, 100)}...</p>
    </section>)) : []
  return (
    <Loading waitFor={draft} >
      <Card draft={draft} setField={setField} pending={pending} setAttachment={setAttachment} />
      <FlowPanel canMove={() => true} moveItem={() => {}} >
        {panelItems}
      </FlowPanel>
    </Loading>
  )
}

LessonEditor.propTypes = {
  draft: IPropTypes.map,
  setField: React.PropTypes.func.isRequired,
  setAttachment: React.PropTypes.func.isRequired,
  pending: React.PropTypes.bool,
  makeSlideLink: React.PropTypes.func.isRequired,
}

export default LessonEditor
