import { put, call, select } from 'redux-saga/effects'
import { setPending } from '../../ducks/docs'
import { setField, setFieldIn } from '../../ducks/commonActions'

export default function sagaFactory(db, documentGetter, reloadDocument) {
  return ({
    *uploadAttachment(action) {
      const { file, field, path, _id } = action.payload
      yield put(setPending({ _id }))
      const document = yield select(documentGetter, _id)
      const result = yield call(db.uploadAttachment, document.toJS(), file)
      yield call(reloadDocument, _id)
      if (field) {
        yield put(setField(_id, field, result.url))
      } else if (path) {
        yield put(setFieldIn(_id, path, result.url))
      }
    },
  })
}
