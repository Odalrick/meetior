import Immutable from 'immutable'

const ADD_MEETING = 'meetior/meetings/ADD_MEETING'

const initialState = Immutable.List()

export default function reducer(state = initialState, action) {
  if (actions[action.type]) {
    return actions[action.type](state, action)
  } else {
    return state
  }
}

const actions = {
  [ADD_MEETING](state, action) {
    return state.push(Immutable.Map({name: action.name}))
  },
}

//export function addMeeting(name) {
//  return {
//    type: ADD_MEETING, name,
//  }
//}
