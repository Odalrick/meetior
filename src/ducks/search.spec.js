import reducer, { setSearchText } from './search'
import I from 'immutable'
import R from 'ramda'

import { makeSearchLink } from '../lib/navigation'

describe('search duck', () => {
  const buildState = R.reduce(reducer, undefined)

  it('should create initial state', () => {
    const newState = reducer(undefined, { searchText: '', queryLink: {} })
    expect(newState).equal(I.fromJS({ searchText: '', queryLink: {} }))
  })

  it('should set search text', function () {
    const state = buildState([setSearchText('search me')])
    expect(state.get('searchText')).equal('search me')
  })

  it('should parse search text to query link', function () {
    const state = buildState([setSearchText('search me')])
    expect(state.get('queryLink')).equal(makeSearchLink('search me'))
  })
})
