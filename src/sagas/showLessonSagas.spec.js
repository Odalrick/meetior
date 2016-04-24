import Immutable from 'immutable'
import R from 'ramda'
import nano from 'co-nano'
import {put, select, call} from 'redux-saga/effects'
import reducer, {addLesson, showLesson, showSlide} from '../ducks/showLesson'
import {sagas, actionCreators} from './showLessonSagas'

describe('showLessons duck', ()=> {
  const buildState = R.reduce(reducer, undefined)
  const lessonJsNulliPotentus = {
    title: 'Nulli potentus',
    slides: [
      {
        text: '<h1>Neutrum vero, inquit ille.</h1>&hellip;',
      },
      {
        text: '<h1>Apparet statim, quae sint officia, quae actiones.</h1>&hellip;',
      },
      {
        text: '<h1>Non est ista, inquam, Piso, magna dissensio.</h1>&hellip;',
      },
    ],
    _id: '123',
  }

  it.skip('should populate viewable lessons', ()=> {
    const saga = sagas.loadViewableLessons(actionCreators.loadViewableLessons())
    // TODO: set loading state
    expect(saga.next()).to.deep.equal(
    )
  })
})
