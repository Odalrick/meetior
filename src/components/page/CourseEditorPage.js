import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import R from 'ramda'

import CourseEditor from '../edit/CourseEditor.jsx'
import {
  setField,
  moveLesson,
  deleteLesson,
} from '../../ducks/course'

function mapStateToProps(state, ownProps) {
  return {
    draft: state.documents.getIn([ownProps.id, 'draft']),
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    setField: R.curry((field, value) => dispatch(R.assocPath(['payload', '_id',], ownProps.id, setField(field, value)))),
    moveLesson: (fromIndex, toIndex) => dispatch(moveLesson(fromIndex, toIndex)),
    deleteLesson: (lessonIndex) => dispatch(deleteLesson(lessonIndex)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseEditor)
