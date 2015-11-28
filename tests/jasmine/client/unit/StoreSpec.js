describe('meeting store', ()=> {

  beforeEach(function() {
    jasmine.addMatchers(immutableMatchers);
  });

  it('should create empty structure', ()=> {

    const newState = Store.reduceMeetings(undefined, {type: 'bubbel blä',})

    expect(newState).toEqual(Immutable.List())
  })

  it('should add meeting to list',()=>{
    const initialState = Immutable.List()

    const newState = Store.reduceMeetings(initialState,
      Store.actionCreators.addMeeting('test')
    )

    const expectedState = Immutable.fromJS([{'name': 'test'}])

    expect(newState).toEqualImmutable(expectedState);
  })

})
