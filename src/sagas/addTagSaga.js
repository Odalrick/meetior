import { takeEvery, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import {addTag} from '../ducks/tags'
const ADD_TAG = 'meetingz/sagas/ADD_TAG'

export const sagas = {
  *addTagSaga(action) {
    yield put(addTag(action.payload.name))
  }
}

export default function* () {
  yield* takeEvery(ADD_TAG, sagas.addTagSaga)
}

export const actionCreators = {
  addTag(name) {
    return {type: ADD_TAG, payload: {name}}
  }
}
