import React from 'react'
import { connect } from 'react-redux'
import I from 'immutable'

import LessonEditor from '../edit/LessonEditor.jsx'
import CardStatic from '../edit/CartStatic.jsx'
import CardHolder from '../layout/CardHolder.jsx'
import Link from '../navigation/Link.jsx'
import Loading from '../navigation/Loading.jsx'
import { setFieldDispatch, setAttachmentDispatch } from '../../ducks/commonActions'

function mapStateToProps(state, ownProps) {
  return {
    course: {
      draft: state.documents.getIn([ownProps.id2, 'draft']) || I.Map(),
      pending: state.documents.getIn([ownProps.id2, 'pending']),
      link: { type: 'course', id: ownProps.id2 },
    },
    lesson: {
      draft: state.documents.getIn([ownProps.id, 'draft']) || I.Map(),
      pending: state.documents.getIn([ownProps.id, 'pending']),
      makeSlideLink: (index, title) => ({
        id: ownProps.id,
        id2: ownProps.id2,
        type: 'lesson',
        index,
        title,
      }),
    },
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    setField: setFieldDispatch(dispatch, ownProps.id),
    setAttachment: setAttachmentDispatch(dispatch, ownProps.id),
  }
}

function LessonEditorPage(props) {
  return (
    <CardHolder>
      <Link to={props.course.link} >
        <Loading waitFor={props.course.draft} >
          <CardStatic draft={props.course.draft} pending={props.course.pending} />
        </Loading>
      </Link>
      <div>
        <LessonEditor {...props.lesson} setField={props.setField} setAttachment={props.setAttachment} />
      </div>
    </CardHolder>
  )
}

//LessonEditorPage.propTypes = {
//}

export default connect(mapStateToProps, mapDispatchToProps)(LessonEditorPage)
