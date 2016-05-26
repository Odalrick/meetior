import { connect } from 'react-redux'
import R from 'ramda'
import I from 'immutable'

import CourseEditor from '../edit/CourseEditor.jsx'
import { moveLesson, deleteLesson } from '../../ducks/course'
import { setFieldDispatch } from '../../ducks/commonActions'

function mapStateToProps(state, ownProps) {
  return {
    draft: state.documents.getIn([ownProps.id, 'draft']) || I.Map(),
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    setField: setFieldDispatch(dispatch, ownProps.id),
    moveLesson: (fromIndex, toIndex) => dispatch(R.assocPath(['payload', '_id'], ownProps.id, moveLesson(fromIndex, toIndex))),
    deleteLesson: (lessonIndex) => dispatch(R.assocPath(['payload', '_id'], ownProps.id, deleteLesson(lessonIndex))),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseEditor)
