const CREATE_MEETING = 'CREATE_MEETING'

const initialState = Immutable.List()

const actions = {
  [CREATE_MEETING](state, action) {
    return state.push(Immutable.Map({name: action.name}))
  },
}

Store = {
  reduceMeetings(state = initialState, action) {
    if (actions[action.type]) {
      return actions[action.type](state, action)
    } else {
      return state
    }
  }, actionCreators: {
    addMeeting(name)
    {
      return {
        type: CREATE_MEETING, name,
      }
    },
  },
}
