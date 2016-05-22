import R from 'ramda'
import { put, call } from 'redux-saga/effects'
import { sagaFactory } from './commitDocumentSaga'
import { loadedDocument, setPending } from '../../ducks/docs'

describe('commit document saga', function () {
  const db = {
    save: () => {},
    load: () => {},
  }
  const testSaga = sagaFactory(db)
  const setRev = R.assoc('_rev')
  const cont = R.assoc('value', R.__, { done: false })

  it('should commit a document', () => {
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
    const action = testSaga.actionCreators.commitDocument(lesson)
    const saga = testSaga.commitDocument(action)
    expect(saga.next()).to.deep.equal(
      cont( // handles generator
        put( // effect
          setPending(lesson) // action
        )
      )
    )
    expect(saga.next()).to.deep.equal(cont(call(db.save, setRev(lesson._rev, lesson.draft))))
    expect(saga.next()).to.deep.equal(cont(call(db.load, _id)))
    const updatedDoc = setRev('beta', lesson.draft)
    expect(saga.next(updatedDoc)).to.deep.equal(cont(put(loadedDocument(updatedDoc))))
    expect(saga.next().done).to.be.true()
  })
})
