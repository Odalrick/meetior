const CREATE_MEETING = 'CREATE_MEETING'

const initialState = mori.vector()

const actions = {
  [CREATE_MEETING](state, action) {
    return mori.conj(state, mori.hashMap('name', action.name))
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
