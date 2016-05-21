import R from 'ramda'
import { put, call } from 'redux-saga/effects'
import sagaFactory from './loadDocumentSaga'
import { loadedDocument, setPending } from '../../ducks/docs'

describe('load document saga', function () {
  const db = {
    load: () => {},
  }
  const testSaga = sagaFactory(db)
  const cont = R.assoc('value', R.__, { done: false })

  it('should load a document', () => {
    const _id = 'test123'
    const lesson = {
      _id,
      _rev: 'alpha',
      title: 'Test lesson',
      type: 'lesson',
      draft: {
        _id,
        title: 'Committed lesson',
        type: 'lesson',
      },
    }
    const action = testSaga.actionCreators.loadDocument({ _id })
    const saga = testSaga.loadDocument(action)
    expect(saga.next()).to.deep.equal(
      cont( // handles generator
        put( // effect
          setPending({ _id }) // action
        )
      )
    )
    expect(saga.next()).to.deep.equal(cont(call(db.load, _id)))
    expect(saga.next(lesson)).to.deep.equal(cont(put(loadedDocument(lesson))))
    expect(saga.next().done).to.be.true()
  })
})
