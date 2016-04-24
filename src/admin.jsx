import React from 'react'
import ReactDOM from 'react-dom'
import createSagaMiddleware from 'redux-saga'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

import Admin from './components/Admin.jsx'
import lesson from './ducks/lesson'
import showLesson from './ducks/showLesson'
import showLessonSagas from './sagas/showLessonSagas'

(() => {
  const reducer = combineReducers({lesson, showLesson})
  const sagaMiddleware = createSagaMiddleware(showLessonSagas)

  const store = createStore(reducer,{},
    compose(applyMiddleware(sagaMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f))

  const app = document.createElement('div')
  document.body.appendChild(app)
  ReactDOM.render(
    <Provider store={store}>
      <Admin />
    </Provider>,
    app
  )
})()
