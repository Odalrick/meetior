import reducer from './user'
import I from 'immutable'
import {login, logout, error} from './user'

describe('user duck', () => {
  const jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ'

  it('should create initial state', () => {
    const newState = reducer(undefined, {jwt:''})
    expect(newState).equal(I.fromJS({jwt:'',payload:{}}))
  })

  it('should extract payload from jwt', () => {
    const newState = reducer(undefined, login(jwt))
    expect(newState).equal(I.fromJS({ jwt, payload: {
      "sub": "1234567890",
      "name": "John Doe",
      "admin": true
    }}));
  })

  it('should remove jwt and payload', () => {
    const newState = reducer(undefined, logout())
    expect(newState).equal(I.fromJS({ jwt: '', payload: {}}));
  })

  it('should set error message', () => {
    const message = "A foreseen error has occured"
    const newState = reducer(undefined, error(message))
    expect(newState).equal(I.fromJS({ jwt:'', payload:{}, error: message}))
  })

  it('should leave jwt alone if an error occurs', () => {
    const message = "A foreseen error has occured"
    const newState = reducer(I.fromJS({jwt:'1.2.3', payload:{}}), error(message))
    expect(newState).equal(I.fromJS({ jwt:'1.2.3', payload:{}, error: message}))
  })

})

