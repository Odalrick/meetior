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
      console.log('document',document)
      const url = yield call(db.uploadAttachment, document.toJS(), file)
      console.log('url',url)
      yield put(setField(_id, field, url)) // TODO: Do more? Update revision?
    }
  })
}
