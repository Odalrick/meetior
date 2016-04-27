import { connect } from 'react-redux'

import ShowLessons from '../components/ShowLesson.jsx'
import {actionCreators} from '../sagas/showLessonSagas'

function mapStateToProps(state) {
  return {
    lessons: state.showLesson.get('lessons'),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadLessons: () => dispatch(actionCreators.loadViewableLessons()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowLessons)
