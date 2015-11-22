describe('meeting store', ()=> {
  it('should create empty structure', ()=> {
    const initialState = mori.hashMap()
    const newState = Store.reduceMeetings(initialState, Store.actionCreators.addMeeting('test meeting'))
    const expectedState = mori.hashMap('test meeting', mori.hashMap())
    expect(newState).toEqual(expectedState)
  })
})
