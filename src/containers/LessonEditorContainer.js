import { connect } from 'react-redux'

import Immutable from 'immutable'
import LessonEditor from '../components/edit/LessonEditor'
import {setLessonTitle, setLessonDescription, setLessonIcon,
  setSlideText, moveSlide, startEditingSlide, stopEditingSlide,
  deleteSlide, addSlide, addTag, removeTag} from '../ducks/lesson'

function mapStateToProps(state, ownProps) {
  const lesson = state.lesson
  return {
    course: state.course,
    lesson,
    slides: lesson.get('slides'),
    tags: Immutable.fromJS(['Tacos', 'cray', 'gluten-free'])
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setLessonTitle: (newTitle) => dispatch(setLessonTitle(newTitle)),
    setLessonDescription: (newDescription) => dispatch(setLessonDescription(newDescription)),
    setLessonIcon: (newIcon) => dispatch(setLessonIcon(newIcon)),
    addTag: (tag) => dispatch(addTag(tag)),
    removeTag: (tag) => dispatch(removeTag(tag)),
    setSlideText: (slideIndex, newText) => dispatch(setSlideText(slideIndex, newText)),
    moveSlide: (fromIndex, toIndex) => dispatch(moveSlide(fromIndex, toIndex)),
    startEditingSlide: (slideIndex) => dispatch(startEditingSlide(slideIndex)),
    stopEditingSlide: (slideIndex) => dispatch(stopEditingSlide(slideIndex)),
    deleteSlide: (slideIndex) => dispatch(deleteSlide(slideIndex)),
    addSlide: () => dispatch(addSlide())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LessonEditor)
