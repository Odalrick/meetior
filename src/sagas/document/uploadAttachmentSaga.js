import { put, call } from 'redux-saga/effects'
import R from 'ramda'
import { setPending } from '../../ducks/docs'
import { setField } from '../../ducks/commonActions'

export default function sagaFactory(db) {
  return ({
    *uploadAttachment(action) {
      const {file, preview, field, _id} = action.payload
      yield put(setPending({_id}))
      if (preview) {
        yield put(setField(_id, field, preview))
      }
      //yield call(db.save, setRev(action.payload._rev, action.payload.draft))
      //const updatedDoc = yield call(db.load, action.payload._id)
      //yield put(loadedDocument(updatedDoc))
    }
  })
}
