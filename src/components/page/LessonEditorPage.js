import { connect } from 'react-redux'
import R from 'ramda'
import I from 'immutable'

import LessonEditor from '../edit/LessonEditor.jsx'
import { setFieldDispatch } from '../../ducks/commonActions'

function mapStateToProps(state, ownProps) {
  return {
    draft: state.documents.getIn([ownProps.id, 'draft']) || I.Map(),
    course: state.documents.getIn([ownProps.id2, 'draft']) || I.Map(),
    pending: state.documents.getIn([ownProps.id, 'pending']),
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    setField: setFieldDispatch(dispatch, ownProps.id),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LessonEditor)
