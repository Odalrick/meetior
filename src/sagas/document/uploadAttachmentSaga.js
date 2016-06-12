import { put, call, select } from 'redux-saga/effects'
import R from 'ramda'
import { setPending } from '../../ducks/docs'
import {setField} from '../../ducks/commonActions'

export default function sagaFactory(db, documentGetter, reloadDocument) {
  return ({
    *uploadAttachment(action) {
      const { file, field, _id } = action.payload
      yield put(setPending({_id}))
      const document = yield select(documentGetter, _id)
      const result = yield call(db.uploadAttachment, document.toJS(), file)
      yield call(reloadDocument, _id)
      yield put(setField(_id, field, result.url))
    }
  })
}
