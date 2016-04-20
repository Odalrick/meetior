import { connect } from 'react-redux'

import SlideList from '../components/SlideList'
import {setSlideText, moveSlide, startEditingSlide, stopEditingSlide} from '../ducks/lesson'


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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideList)
