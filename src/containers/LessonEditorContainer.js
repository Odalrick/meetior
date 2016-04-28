import { connect } from 'react-redux'

import LessonEditor from '../components/LessonEditor'
import {setLessonTitle, setLessonDescription, setLessonIcon,
  setSlideText, moveSlide, startEditingSlide, stopEditingSlide,
  deleteSlide, addSlide} from '../ducks/lesson'

function mapStateToProps(state) {

  return {
    lesson: state.lesson,
    slides: state.lesson.get('slides'),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setLessonTitle: (newTitle) => dispatch(setLessonTitle(newTitle)),
    setLessonDescription: (newDescription) => dispatch(setLessonDescription(newDescription)),
    setLessonIcon: (newIcon) => dispatch(setLessonIcon(newIcon)),
    setSlideText: (slideIndex, newText) => dispatch(setSlideText(slideIndex, newText)),
    moveSlide: (fromIndex, toIndex) => dispatch(moveSlide(fromIndex, toIndex)),
    startEditingSlide: (slideIndex) => dispatch(startEditingSlide(slideIndex)),
    stopEditingSlide: (slideIndex) => dispatch(stopEditingSlide(slideIndex)),
    deleteSlide: (slideIndex) => dispatch(deleteSlide(slideIndex)),
    addSlide: () => dispatch(addSlide())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LessonEditor)
