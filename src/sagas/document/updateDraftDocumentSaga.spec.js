import R from 'ramda'
import I from 'immutable'
import { put, call, select } from 'redux-saga/effects'
import sagaFactory from './updateDraftDocumentSaga'
import { loadedDocument, setPending } from '../../ducks/docs'

describe('update document saga', function () {
  const db = {
    save: () => {},
    load: () => {},
  }
  const delay = () => {}
  const documentGetter = () => {}

  const testSaga = sagaFactory(db, delay, documentGetter)
  const setRev = R.assoc('_rev')
  const cont = R.assoc('value', R.__, { done: false })

  it('should update a document after some time', () => {
    const _id = 'test123'
    const document = {
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
    const action = { type: 'whatever', payload: { _id, only: '_id is relevant' } }
    const saga = testSaga.updateDocument(action)
    expect(saga.next()).to.deep.equal(
      cont( // handles generator
        put( // effect
          setPending(document) // action
        )
      )
    )
    expect(saga.next()).to.deep.equal(cont(call(delay)))
    expect(saga.next()).to.deep.equal(cont(select(documentGetter, _id)))
    expect(saga.next(I.fromJS(document))).to.deep.equal(cont(call(db.save, document)))
    expect(saga.next()).to.deep.equal(cont(call(db.load, _id)))
    const updatedDoc = setRev('beta', document)
    expect(saga.next(updatedDoc)).to.deep.equal(cont(put(loadedDocument(updatedDoc))))
    expect(saga.next().done).to.be.true()
  })

  it('should do something relevant when cancelled')
})
