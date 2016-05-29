import { put, call, select } from 'redux-saga/effects'
import { loadedDocument, setPending } from '../../ducks/docs'

const PREFIX = 'planck/document-saga'
const UPDATE_DOCUMENT = `${PREFIX}/UPDATE_DOCUMENT`

export default function sagaFactory(db, delay, documentGetter) {
  return ({
    *updateDocument(action) {
      const { _id } = action.payload
      yield put(setPending({ _id }))
      try {
        yield call(delay)
      } catch (e) {
        // dunno
        return
      }
      const document = yield select(documentGetter, _id)
      console.log('document', document)
      yield call(db.save, document.toJS())
      const updatedDoc = yield call(db.load, _id)
      yield put(loadedDocument(updatedDoc))
    },
    actionCreators: {
      updateDocument(doc) {
        return { type: UPDATE_DOCUMENT, payload: doc }
      },
    },
  })
}
