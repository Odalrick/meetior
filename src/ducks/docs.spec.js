import I from 'immutable'
import factory, { loadDocument } from './docs'

describe('documents duck', function () {
  it('should initialise state', function () {
    const red = factory({})
    expect(red()).to.deep.equal(I.Map())
  })

  it('should handle load of document', function () {
    const fakeReducer = state => state

    const red = factory({
      test: fakeReducer,
    })

    const loadAction = loadDocument({ _id: 'test123', title: 'Title', type: 'test' })
    const actual = red(red(), loadAction)

    expect(actual).to.deep.equal(I.fromJS({
      test123: {
        current: { _id: 'test123', title: 'Title', type: 'test' },
        draft: { _id: 'test123', title: 'Title', type: 'test' },
      },
    }))
  })
  it('should set pending')
  it('should direct actions to correct document')
})
