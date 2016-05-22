import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import CourseEditor from '../edit/CourseEditor.jsx'
import { moveLesson, deleteLesson } from '../../ducks/course'
import { setFieldDispatch } from '../../ducks/commonActions'

function mapStateToProps(state, ownProps) {
  return {
    draft: state.documents.getIn([ownProps.id, 'draft']),
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    setField: setFieldDispatch(dispatch, ownProps.id),
    moveLesson: (fromIndex, toIndex) => dispatch(moveLesson(fromIndex, toIndex)),
    deleteLesson: (lessonIndex) => dispatch(deleteLesson(lessonIndex)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseEditor)
