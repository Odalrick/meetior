import I from 'immutable'
import R from 'ramda'
import factory, { loadedDocument, setPending, helpers } from './docs'

describe('documents duck', function () {
  const fakeReducer = state => state
  const hopper = state => state.update('hopper', 0, R.add(1))
  const red = factory({
    test: fakeReducer,
    hopper,
  })
  const buildState = R.reduce(red, undefined)

  it('should initialise state', function () {
    expect(red()).to.deep.equal(I.Map())
  })

  it('should handle load of document', function () {
    const actual = buildState([
      loadedDocument({ _id: 'test123', title: 'Title', type: 'test' }),
    ])

    expect(actual).to.deep.equal(I.fromJS({
      test123: {
        current: { _id: 'test123', title: 'Title', type: 'test' },
        draft: { _id: 'test123', title: 'Title', type: 'test' },
      },
    }))
  })

  it('should set pending for unloaded documents', function () {
    const actual = buildState([
      setPending({ _id: 'test123' }),
    ])

    expect(actual).to.deep.equal(I.fromJS({
      test123: {
        current: {},
        draft: {},
        pending: true,
      },
    }))
  })
  it('should set pending for loaded documents', function () {
    const actual = buildState([
      loadedDocument({ _id: 'test123', title: 'Title', type: 'test' }),
      setPending({ _id: 'test123' }),
    ])

    expect(actual).to.deep.equal(I.fromJS({
      test123: {
        current: { _id: 'test123', title: 'Title', type: 'test' },
        draft: { _id: 'test123', title: 'Title', type: 'test' },
        pending: true,
      },
    }))
  })
  it('should clear pending when document is loaded', function () {
    const actual = buildState([
      setPending({ _id: 'test123' }),
      loadedDocument({ _id: 'test123', title: 'Title', type: 'test' }),
    ])

    expect(actual).to.deep.equal(I.fromJS({
      test123: {
        current: { _id: 'test123', title: 'Title', type: 'test' },
        draft: { _id: 'test123', title: 'Title', type: 'test' },
      },
    }))
  })

  it('should extract draft', function () {
    const actual = buildState([
      loadedDocument({
        _id: 'test123',
        title: 'Title',
        type: 'test',
        draft: { _id: 'test123', title: 'Draft title', type: 'test' },
      }),
    ])

    expect(actual).to.deep.equal(I.fromJS({
      test123: {
        current: {
          _id: 'test123',
          title: 'Title',
          type: 'test',
          draft: { _id: 'test123', title: 'Draft title', type: 'test' },
        },
        draft: { _id: 'test123', title: 'Draft title', type: 'test' },
      },
    }))
  })

  it('should direct actions to correct document', function () {
    const actual = buildState([
      loadedDocument({ _id: 'test123', title: 'Title', type: 'hopper' }),
      loadedDocument({ _id: 'test321', title: 'Title', type: 'hopper' }),
      {
        type: 'whatever',
        payload: { _id: 'test123' },
      },
    ])
    expect(actual).to.deep.equal(I.fromJS({
      test123: {
        current: { _id: 'test123', title: 'Title', type: 'hopper' },
        draft: { _id: 'test123', title: 'Title', type: 'hopper', hopper: 1 },
      },
      test321: {
        current: { _id: 'test321', title: 'Title', type: 'hopper' },
        draft: { _id: 'test321', title: 'Title', type: 'hopper' },
      },
    }))
  })

  const helperState = I.fromJS({
    test123: {
      current: { _id: 'test123', title: 'Title', type: 'hopper' },
      draft: { _id: 'test123', title: 'Title', type: 'hopper', hopper: 1 },
    },
    test321: {
      current: {
        _id: 'test321',
        title: 'Title',
        type: 'hopper',
        draft: { _id: 'test321', title: 'Title', type: 'hopper' },
      },
      draft: { _id: 'test321', title: 'Title', type: 'hopper' },
    },
  })

  it('should get current state of document by id', function () {
    const actual = helpers.getCurrentDocument(helperState, 'test321')

    expect(actual).to.deep.equal(I.fromJS({
      _id: 'test321',
      title: 'Title',
      type: 'hopper',
      draft: { _id: 'test321', title: 'Title', type: 'hopper' },
    }))
  })

  it('should merge draft into current state of document', function () {
    const actual = helpers.getCurrentDocument(helperState, 'test123')

    expect(actual).to.deep.equal(I.fromJS({
      _id: 'test123',
      title: 'Title',
      type: 'hopper',
      draft: { _id: 'test123', title: 'Title', type: 'hopper', hopper: 1 },
    }))
  })

})
