import { takeEvery } from 'redux-saga'
import { put, call } from 'redux-saga/effects'
import R from 'ramda'

const PREFIX = 'planck/SAVE_LESSON_SAGA'
const SAVE_LESSON = `${PREFIX}/SAVE_LESSON`

export const sagas = (db) => ({
  *saveLesson(action) {

  },
  actionCreators: {
    saveLesson(newLesson) {
      return {type: SAVE_LESSON, payload: {newLesson}}
    },
  },
})

export default (db) => {
  return function* saveLessonSagas() {
    yield* takeEvery(SAVE_LESSON, sagas(db).saveLesson)
  }
}
