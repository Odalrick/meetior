import { connect } from 'react-redux'
import immutable from 'immutable'
import { push } from 'react-router-redux';

import CourseEditor from '../components/edit/CourseEditor'
import {setCourseTitle, setCourseDescription, setCourseIcon, addTag, removeTag,
  moveLesson, deleteLesson, addLesson} from '../ducks/course'

function mapStateToProps(state) {
  return {
    course: state.course
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
      dispatch(push(`/admin/courses/${ownProps.params.courseId}/lessons/${lessonId}`))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseEditor)
