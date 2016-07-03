import reducer from './search'
import I from 'immutable'

describe('search duck', () => {
  it('should create initial state', () => {
    const newState = reducer(undefined, { searchText: '', queryLink: {} })
    expect(newState).equal(I.fromJS({ searchText: '', queryLink: {} }))
  })

  it('should set search text')
  it('should parse search text to query link')

})
