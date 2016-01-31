//import { Component } from 'react'
import { connect } from 'react-redux'

import Meetings from '../components/Meetings'

function mapStateToProps(state) {
  return {
    meetings: state.meetings,
  }
}

//function mapDispatchToProps(dispatch) {
//  return {}
//}

export default connect(
  mapStateToProps
)(Meetings)
