import { connect } from 'react-redux'

import LessonEditor from '../components/LessonEditor'
import {setSlideText, moveSlide, startEditingSlide, stopEditingSlide,
  deleteSlide, addSlide} from '../ducks/lesson'

function mapStateToProps(state) {

  return {
    slides: state.lesson.get('slides'),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setSlideText: (slideIndex, newText) => dispatch(setSlideText(slideIndex, newText)),
    moveSlide: (fromIndex, toIndex) => dispatch(moveSlide(fromIndex, toIndex)),
    startEditingSlide: (slideIndex) => dispatch(startEditingSlide(slideIndex)),
    stopEditingSlide: (slideIndex) => dispatch(stopEditingSlide(slideIndex)),
    deleteSlide: (slideIndex) => dispatch(deleteSlide(slideIndex)),
    addSlide: () => dispatch(addSlide())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LessonEditor)
