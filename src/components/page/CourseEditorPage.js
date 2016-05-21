import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import CourseEditor from '../edit/CourseEditor.jsx'
import {
  setCourseTitle,
  setCourseDescription,
  setCourseIcon,
  addTag,
  removeTag,
  moveLesson,
  deleteLesson,
  addLesson,
} from '../../ducks/course'

function mapStateToProps(state, ownProps) {
  return {
    draft: state.documents.getIn([ownProps.id, 'draft']),
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    setCourseTitle: (newTitle) => dispatch(setCourseTitle(newTitle)),
    setCourseDescription: (newDescription) => dispatch(setCourseDescription(newDescription)),
    setCourseIcon: (newIcon) => dispatch(setCourseIcon(newIcon)),
    addTag: (tag) => dispatch(addTag(tag)),
    removeTag: (tag) => dispatch(removeTag(tag)),
    moveLesson: (fromIndex, toIndex) => dispatch(moveLesson(fromIndex, toIndex)),
    deleteLesson: (lessonIndex) => dispatch(deleteLesson(lessonIndex)),
    addLesson: () => dispatch(addLesson()),
    editLesson: (lessonId) =>
      dispatch(push(`/admin/courses/${ownProps.params.courseId}/lessons/${lessonId}`)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseEditor)
