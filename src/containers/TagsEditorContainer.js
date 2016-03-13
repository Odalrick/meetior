import { connect } from 'react-redux'

import TagsEditor from '../components/TagsEditor'
import {addTag} from '../ducks/tags'

function mapStateToProps(state) {
  return {
    tags: state.tags,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createTag: (name) => dispatch(createTag(name)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TagsEditor)
