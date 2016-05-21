import I from 'immutable'

const LOADED_DOCUMENT = 'planck/documents/LOADED_DOCUMENT'
const SET_PENDING_DOCUMENT = 'planck/documents/SET_PENDING_DOCUMENT'

const initialState = I.Map()
const emptyDocument = I.Map().set('current', I.Map()).set('draft', I.Map())

export default function factory(innerReducers) {
  const actions = {
    [LOADED_DOCUMENT](state, action) {
      const { _id, draft } = action.payload
      return state.update(
        _id,
        emptyDocument,
        middleState => middleState
          .set(
            'current',
            I.fromJS(action.payload)
          )
          .set(
            'draft',
            draft ? I.fromJS(draft) : I.fromJS(action.payload)
          )
          .delete('pending')
      )
    },
    [SET_PENDING_DOCUMENT](state, action) {
      const { _id } = action.payload
      return state.update(
        _id,
        emptyDocument,
        middleState => middleState
          .set(
            'pending',
            true
          )
      )
    },
  }

  function innerReducer(state, action) {
    const type = state.getIn([action.payload._id, 'draft', 'type'])
    if (innerReducers[type]) {
      return state.updateIn(
        [action.payload._id, 'draft'],
        innerState => innerReducers[type](innerState, action)
      )
    } else {
      return state
    }
  }

  function reducer(state = initialState, action = {}) {
    if (actions[action.type]) {
      return actions[action.type](state, action)
    } else if (action.payload && action.payload._id) {
      return innerReducer(state, action)
    } else {
      return state
    }
  }

  return reducer
}

export function loadedDocument(doc) {
  return {
    type: LOADED_DOCUMENT,
    payload: doc,
  }
}

export function setPending({ _id }) {
  return {
    type: SET_PENDING_DOCUMENT,
    payload: { _id },
  }
}
