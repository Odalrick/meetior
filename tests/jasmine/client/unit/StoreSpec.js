describe('meeting store', ()=> {
  it('should create empty structure', ()=> {

    const newState = Store.reduceMeetings(undefined, {type: Symbol(),})

    expect(newState).toEqual(mori.vector())
  })

  it('should add meeting to list',()=>{
    const initialState = mori.vector()

    const newState = Store.reduceMeetings(initialState,
      Store.actionCreators.addMeeting('test')
    )

    const expectedState = mori.vector(mori.hashMap('name', 'test'))

    expect(mori.toJs(newState)).toEqual(mori.toJs(expectedState))
  })

})
