import { put, call, select } from 'redux-saga/effects'
import R from 'ramda'
import { setPending } from '../../ducks/docs'
import {setField} from '../../ducks/commonActions'

export default function sagaFactory(db, documentGetter) {
  return ({
    *uploadAttachment(action) {
      const { file, field, _id } = action.payload
      yield put(setPending({_id}))
      const document = yield select(documentGetter, _id)
      //yield call(db.save, setRev(action.payload._rev, action.payload.draft))
      //const updatedDoc = yield call(db.load, action.payload._id)
      //yield put(loadedDocument(updatedDoc))
    }
  })
}
