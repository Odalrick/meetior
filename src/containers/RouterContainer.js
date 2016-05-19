import { connect } from 'react-redux'

import '../components/Router'

function mapStateToProps(state) {
  return {
    router: state.router
  }
}

export default connect(mapStateToProps)(Router)