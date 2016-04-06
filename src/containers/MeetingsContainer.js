import { connect } from 'react-redux'

import Meetings from '../components/Meetings'
import {addMeeting} from '../ducks/meetings'

function mapStateToProps(state) {
  return {
    meetings: state.meetings,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createMeeting: (name) => dispatch(addMeeting(name)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Meetings)
