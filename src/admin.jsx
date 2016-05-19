import React from 'react'
import ReactDOM from 'react-dom'
import createSagaMiddleware from 'redux-saga'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import {tinyMiddleware ,tinyReducer, reduxTinyRouter } from 'redux-tiny-router';

import config from './config'
import dbFactory from './db/couch'

import course from './ducks/course'
import lesson from './ducks/lesson'
import showLesson from './ducks/showLesson'
import showLessonSagas from './sagas/showLessonSagas'
//import saveLessonSagas from './sagas/saveLessonSaga'


(() => {

  const db = dbFactory(config)

  const reducer = combineReducers(Object.assign({},tinyReducer, {course, lesson, showLesson}))
  const sagaMiddleware = createSagaMiddleware(
    showLessonSagas /*, saveLessonSagas(db)*/)

  const store = createStore(reducer,{},
    compose(applyMiddleware(sagaMiddleware, tinyMiddleware ),
      window.devToolsExtension ? window.devToolsExtension() : f => f))
  
  reduxTinyRouter.init(store);
  
  const app = document.createElement('div')
  document.body.appendChild(app)
  ReactDOM.render(
    <Provider store={store}>        
		<div>asdf</div>    
    </Provider>,
    app
  )
})()
