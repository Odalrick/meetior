import chai, {expect,} from 'chai'
import Immutable from 'immutable'
import chaiImmutable from 'chai-immutable'
import reducer, {addMeeting,} from './meetings'

chai.use(chaiImmutable)

describe('meetings duck', ()=> {

  it('should create initial state', () => {
    const newState = reducer(undefined, {type: 'bubbel blä',})
    expect(newState).equal(Immutable.List())
  })

  it('should add meeting to list', ()=> {
    const initialState = Immutable.List()

    const newState = reducer(initialState, addMeeting('test'))

    const expectedState = Immutable.fromJS([{'name': 'test',},])

    expect(newState).equal(expectedState)
  })

})
