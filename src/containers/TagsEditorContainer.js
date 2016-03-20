import { connect } from 'react-redux'

import TagsEditor from '../components/TagsEditor'
import {actionCreators} from '../sagas/addTagSaga'

function mapStateToProps(state) {
  return {
    tags: state.tags,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTag: (name) => dispatch(actionCreators.addTag(name)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TagsEditor)
