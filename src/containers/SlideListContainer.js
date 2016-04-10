import { connect } from 'react-redux'

import SlideList from '../components/SlideList'


function mapStateToProps(state) {
  return {
    slides: state.slides,
  }
}

// function mapDispatchToProps(dispatch) {
//  return {
//    createMeeting: (name) => dispatch(addMeeting(name)),
//  }
// }

export default connect(mapStateToProps /* , mapDispatchToProps */)(SlideList)
