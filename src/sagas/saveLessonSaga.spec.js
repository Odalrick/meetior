import Immutable from 'immutable'
import R from 'ramda'

import { put, select, call } from 'redux-saga/effects'
import { sagas, actionCreators } from './saveLessonSaga'

describe('saveLesson saga', ()=> {

  it('should save a lesson', () => {
    const db = {save:()=>{}}
    const saveLessonSagas = sagas(db)
    const lesson = {
      _id: '123597dgfdvd',
      title: 'lesson'
    }
    const action = saveLessonSagas.actionCreators.saveLesson(lesson)
    const saga = saveLessonSagas.saveLesson(action);
    expect(saga.next()).to.deep.equal(call(db.save,lesson))
  })

})
