import I from 'immutable'
import R from 'ramda'

import reducer, { setList, setPending } from './lists'

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
          entries: [{ url: 'test', title: 'test2', key: '_link:0' }],
          pending: false,
        },
      }
    ))
  })

  it('should add key property based on index for list entries missing key', function () {
    const newState = buildState([setList('test', [
      { title: 'En kurs!', type: 'course', id: 'ebdc3518' },
      { title: 'En kurs!', type: 'course', id: 'ebdc3518' },
      { title: 'En kurs!', type: 'course', id: 'ebdc3518' },
    ])])

    expect(newState).equal(I.fromJS(
      {
        test: {
          entries: [
            { title: 'En kurs!', type: 'course', id: 'ebdc3518', key: '_link:0' },
            { title: 'En kurs!', type: 'course', id: 'ebdc3518', key: '_link:1' },
            { title: 'En kurs!', type: 'course', id: 'ebdc3518', key: '_link:2' },
          ],
          pending: false,
        },
      }
    ))
  })

  it('should not change existing keys', function () {
    const newState = buildState([setList('test', [
      { title: 'En kurs!', type: 'course', id: 'ebdc3518' },
      { title: 'En kurs!', type: 'course', id: 'ebdc3518', key: 'keep this key' },
      { title: 'En kurs!', type: 'course', id: 'ebdc3518' },
    ])])

    expect(newState).equal(I.fromJS(
      {
        test: {
          entries: [
            { title: 'En kurs!', type: 'course', id: 'ebdc3518', key: '_link:0' },
            { title: 'En kurs!', type: 'course', id: 'ebdc3518', key: 'keep this key' },
            { title: 'En kurs!', type: 'course', id: 'ebdc3518', key: '_link:2' },
          ],
          pending: false,
        },
      }
    ))
  })
})
