import I from 'immutable'
import R from 'ramda'

import reducer, { setList, setPending } from './list'

describe('list duck', () => {
  const buildState = R.reduce(reducer, undefined)

  it('should create initial state', function () {
    const newState = reducer(undefined, { type: 'unknown' })
    expect(newState).equal(I.Map())
  })

  it('should store new list', function () {
    const newState = buildState([setList('test', [])])

    expect(newState).equal(I.fromJS(
      {
        test: {
          entries: [],
          pending: false,
        },
      }
    ))
  })

  it('should set pending', function () {
    const newState = buildState([setPending('test')])

    expect(newState).equal(I.fromJS(
      {
        test: {
          entries: [],
          pending: true,
        },
      }
    ))
  })
  it('should clear pending', function () {
    const newState = buildState([
      setPending('test'),
      setList('test', [{ url: 'test', title: 'test2' }]),
    ])

    expect(newState).equal(I.fromJS(
      {
        test: {
          entries: [{ url: 'test', title: 'test2' }],
          pending: false,
        },
      }
    ))
  })
})
