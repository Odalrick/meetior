import { put, call } from 'redux-saga/effects'
import R from 'ramda'
import { setPending } from '../../ducks/docs'

export default function sagaFactory(db) {
  return ({
    *uploadAttachment(action) {
      const {file, field, _id} = action.payload
      yield put(setPending({_id}))
      //yield call(db.save, setRev(action.payload._rev, action.payload.draft))
      //const updatedDoc = yield call(db.load, action.payload._id)
      //yield put(loadedDocument(updatedDoc))
    }
  })
}
