import I from 'immutable'

const SET_LIST = 'planck/list/SET_LIST'
const SET_PENDING = 'planck/list/SET_PENDING'

const initialState = I.Map()
const actions = {
  [SET_LIST](state, action) {
    const { lessonIndex, entries } = action.payload
    return state.set(lessonIndex, I.fromJS({ entries, pending: false }))
  },
  [SET_PENDING](state, action) {
    const { lessonIndex } = action.payload
    return state.set(lessonIndex, I.fromJS({ entries: [], pending: true }))
  },
}

export default function reducer(state = initialState, action) {
  if (actions[action.type]) {
    return actions[action.type](state, action)
  } else {
    return state
  }
}

export function setList(lessonIndex, entries) {
  return {
    type: SET_LIST, payload: { lessonIndex, entries },
  }
}

export function setPending(lessonIndex) {
  return {
    type: SET_PENDING, payload: { lessonIndex },
  }
}
