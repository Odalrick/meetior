import React from 'react'
import { connect } from 'react-redux'
import R from 'ramda'
import I from 'immutable'

import CourseEditor from '../edit/CourseEditor.jsx'
import CardHolder from '../layout/CardHolder.jsx'
import { moveLesson, deleteLesson } from '../../ducks/course'
import { setFieldDispatch, setAttachmentDispatch } from '../../ducks/commonActions'

function mapStateToProps(state, ownProps) {
  return {
    draft: state.documents.getIn([ownProps.id, 'draft']) || I.Map(),
    pending: state.documents.getIn([ownProps.id, 'pending']),
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    setField: setFieldDispatch(dispatch, ownProps.id),
    moveLesson: (fromIndex, toIndex) => dispatch(R.assocPath(['payload', '_id'], ownProps.id, moveLesson(fromIndex, toIndex))),
    deleteLesson: (lessonIndex) => dispatch(R.assocPath(['payload', '_id'], ownProps.id, deleteLesson(lessonIndex))),
    setAttachment: setAttachmentDispatch(dispatch, ownProps.id),
  }
}

function CourseEditorPage(props) {
  return (
    <CardHolder>
      {[<CourseEditor {...props} key="CourseEditor" />]}
    </CardHolder>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseEditorPage)
