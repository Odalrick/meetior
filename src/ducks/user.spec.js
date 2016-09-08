import reducer from './user'
import I from 'immutable'
import {login, setPending, error} from './user'

describe('user duck', () => {

  it('should create initial state', () => {
    const newState = reducer(undefined, {role:''})
    expect(newState).equal(I.fromJS({role:''}))
  })

  it('should set pending to true when logging in', () => {
    const newState = reducer(undefined, setPending())
    expect(newState).equal(I.fromJS({role:'', pending: true}))
  })

  it('should clear pending when logged in', () => {
    const pendingState = reducer(undefined, setPending())
    const newState = reducer(pendingState, login('Chewbacca'))
    expect(newState).equal(I.fromJS({role:'Chewbacca'}))
  })

  it('should set error message', () => {
    const message = "A foreseen error has occured"
    const newState = reducer(undefined, error(message))
    expect(newState).equal(I.fromJS({ role:'', error: message}))
  })

  it('should leave role alone if an error occurs', () => {
    const message = "A foreseen error has occured"
    const newState = reducer(I.fromJS({role:'Han Solo'}), error(message))
    expect(newState).equal(I.fromJS({ role:'Han Solo', error: message}))
  })

})

