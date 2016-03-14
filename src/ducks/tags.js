import Immutable from 'immutable'

const ADD_TAG = 'meetingz/tags/ADD_TAG'

const initialState = Immutable.Map()

export default function reducer(state = initialState, action) {
  if (actions[action.type]) {
    return actions[action.type](state, action)
  } else {
    return state
  }
}

const actions = {
  [ADD_TAG](state, action) {
    const id = `tags/${action.name}`
    // Not happy with this, shouldn't this dispatch an action? See redux-thunk...
    // or the example: https://github.com/reactjs/redux/tree/master/examples/real-world
    if(state.get(id)) {
      throw new Error('Får inte finnas två taggar med samma namn')
    }

    return state.set(id,
      Immutable.fromJS({id, name: action.name}))
  },
}

export function addTag(name) {
  return {
    type: ADD_TAG, name,
  }
}
