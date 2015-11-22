const CREATE_MEETING = 'CREATE_MEETING'

Store = {
  reduceMeetings(state, action){
    if (action.type === CREATE_MEETING) {
      return mori.conj(state, action.name, mori.hashMap())
    } else if (typeof state === 'undefined') {
      return mori.hashMap()
    } else {
      return state
    }
  },
  actionCreators: {
    addMeeting(name){
      return {
        type: CREATE_MEETING,
        name,
      }
    },
  },
}
