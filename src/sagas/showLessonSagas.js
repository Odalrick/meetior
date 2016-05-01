import { takeEvery } from 'redux-saga'
import { put, call } from 'redux-saga/effects'
import R from 'ramda'

import config from '../config'
import { addLesson } from '../ducks/showLesson'
import db from '../db/couch'

const PREFIX = 'planck/SHOW_LESSON_SAGA'
const LOAD_VIEWABLE_LESSONS = `${PREFIX}/LOAD_VIEWABLE_LESSONS`

const loadLessons = db(config).loadLessons

export const sagas = {
  *loadViewableLessons(action) {
    const lessons = yield call(loadLessons)
    yield R.map(
      R.compose(
        put,
        addLesson,
        row => row.value
      )
    )(lessons.rows)
  },
}

export default function *showLessonSagas() {
  yield* takeEvery(LOAD_VIEWABLE_LESSONS, sagas.loadViewableLessons)
}

export const actionCreators = {
  loadViewableLessons() {
    return { type: LOAD_VIEWABLE_LESSONS, payload: {} }
  },
}
