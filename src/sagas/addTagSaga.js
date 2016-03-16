import { takeEvery, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import duck from '../ducks/tags'
const ADD_TAG = 'meetingz/sagas/ADD_TAG'

function* addTagSaga(action) {
  yield put(duck.addTag(action.payload.name))
}

export default function* () {
  yield* takeEvery(ADD_TAG, addTagSaga)
}
