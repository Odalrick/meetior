import React from 'react'
import ReactDOM from 'react-dom'
import Immutable from 'immutable'
import createSagaMiddleware from 'redux-saga'
import Admin from './components/Admin.jsx'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import lesson from './ducks/lesson'
//import tagSagas from './sagas/addTagSaga'

import mockLessons from './db/fixtures/courses'

(() => {
  const reducer = combineReducers({lesson})
  const initialStateLesson = Immutable.fromJS(mockLessons[0])
  //const sagaMiddleware = createSagaMiddleware(tagSagas)

  //const store = createStore(reducer, {slides: initialStateSlides},
  //  compose(applyMiddleware(sagaMiddleware),
  //    window.devToolsExtension ? window.devToolsExtension() : f => f))

  const store = createStore(reducer, {lesson: initialStateLesson},
      window.devToolsExtension ? window.devToolsExtension() : f => f)
  const app = document.createElement('div')
  document.body.appendChild(app)
  ReactDOM.render(
    <Provider store={store}>
      <Admin />
    </Provider>,
    app
  )
})()
