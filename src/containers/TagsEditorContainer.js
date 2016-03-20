import { connect } from 'react-redux'

import TagsEditor from '../components/TagsEditor'
import {addTag} from '../sagas/addTagSaga'

function mapStateToProps(state) {
  return {
    tags: state.tags,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTag: (name) => dispatch(addTag(name)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TagsEditor)
