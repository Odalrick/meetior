import { put, call } from 'redux-saga/effects'
import { loadedDocument, setPending } from '../../ducks/docs'

const PREFIX = 'planck/document-saga'
const LOAD_DOCUMENT = `${PREFIX}/LOAD_DOCUMENT`

export default function sagaFactory(db) {
  return ({
    *loadDocument(action) {
      yield put(setPending(action.payload))
      const doc = yield call(db.load, action.payload._id)
      yield put(loadedDocument(doc))
    },
    actionCreators: {
      loadDocument({ _id }) {
        return { type: LOAD_DOCUMENT, payload: { _id } }
      },
    },
  })
}
