import { put, call } from 'redux-saga/effects'
import R from 'ramda'
import { loadedDocument, setPending } from '../../ducks/docs'

const PREFIX = 'planck/document-saga'
const COMMIT_DOCUMENT = `${PREFIX}/COMMIT_DOCUMENT`

const setRev = R.assoc('_rev')

export function sagaFactory(db) {
  return ({
    *commitDocument(action) {
      yield put(setPending(action.payload))
      yield call(db.save, setRev(action.payload._rev, action.payload.draft))
      const updatedDoc = yield call(db.load, action.payload._id)
      yield put(loadedDocument(updatedDoc))
    },
    actionCreators: {
      commitDocument(doc) {
        return { type: COMMIT_DOCUMENT, payload: doc }
      },
    },
  })
}
