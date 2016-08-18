import reducer from './user'
import I from 'immutable'

describe('user duck', () => {
  it('should create initial state', () => {
    const newState = reducer(undefined, {jwt:''})
    expect(newState).equal(I.fromJS({jwt:'',payload:{}}))
  })
})

