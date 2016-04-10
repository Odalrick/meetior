import { connect } from 'react-redux'

import SlideList from '../components/SlideList'
import {editSlideContent,} from '../ducks/slides'


function mapStateToProps(state) {
  return {
    slides: state.slides,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    editSlideContent: (courseId, slideId, newContent) => dispatch(editSlideContent(courseId, slideId, newContent)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideList)
