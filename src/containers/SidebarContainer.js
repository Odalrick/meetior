import { connect } from 'react-redux'

import Sidebar from '../components/Sidebar'


function mapStateToProps(state) {
  return {
    tags: state.tags,
  }
}

// function mapDispatchToProps(dispatch) {
//  return {
//    createMeeting: (name) => dispatch(addMeeting(name)),
//  }
// }

export default connect(mapStateToProps /* , mapDispatchToProps */)(Sidebar)

