import React from 'react'
import ReactDOM from 'react-dom'
import createSagaMiddleware from 'redux-saga'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { tinyMiddleware, tinyReducer, reduxTinyRouter } from 'redux-tiny-router';

import config from './config'
import dbFactory from './db/couch'
import Admin from './components/Admin.jsx'

import course from './ducks/course'
import lesson from './ducks/lesson'
import docFac from './ducks/docs'

(() => {
  const documents = docFac({
    lesson,
    course,
  })
  const reducer = combineReducers(
    {
      ...tinyReducer,
      documents,
    }
  )

  const db = dbFactory(config)
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    reducer,
    {},
    compose(
      applyMiddleware(sagaMiddleware, tinyMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f)
  )

  reduxTinyRouter.init(store)

  const app = document.createElement('div')
  document.body.appendChild(app)
  ReactDOM.render(
    <Provider store={store}>
      <Admin />
    </Provider>,
    app
  )
})()
