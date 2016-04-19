import { connect } from 'react-redux'

import SlideList from '../components/SlideList'
import {setSlideText, moveSlide, startEditingSlide} from '../ducks/lesson'


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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideList)
