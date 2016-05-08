import I from 'immutable'

const LOAD_DOCUMENT = 'planck/documents/LOAD_DOCUMENT'
const SET_PENDING_DOCUMENT = 'planck/documents/SET_PENDING_DOCUMENT'

const initialState = I.Map()
const emptyDocument = I.Map().set('current', I.Map()).set('draft', I.Map())

export default function factory(innerReducers) {
  const actions = {
    [LOAD_DOCUMENT](state, action) {
      const { _id, draft, type } = action.payload
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
            I.fromJS(action.payload)
          )
      )
    },
  }

  function reducer(state = initialState, action = {}) {
    if (actions[action.type]) {
      return actions[action.type](state, action)
    } else {
      return state
    }
  }

  return reducer
}

export function loadDocument(doc) {
  return {
    type: LOAD_DOCUMENT,
    payload: doc,
  }
}
