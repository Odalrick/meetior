import React from 'react'
import ReactDOM from 'react-dom'
import createSagaMiddleware from 'redux-saga'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { tinyMiddleware, tinyReducer, reduxTinyRouter } from 'redux-tiny-router'

import { take, fork } from 'redux-saga/effects'

import config from './config'
import dbFactory from './db/couch'
import Index from './components/Index.jsx'

import course from './ducks/course'
import lesson from './ducks/lesson'
import docFac from './ducks/docs'

import sagaFactory from './sagas/document/loadDocumentSaga'

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
  const saga = sagaFactory(db)
  const sagaMiddleware = createSagaMiddleware(
    function *() {
      while (true) {
        const action = yield take('ROUTER_NAVIGATION')
        if (action.router.params.id) {
          yield fork(saga.loadDocument,
            saga.actionCreators.loadDocument({
              _id: action.router.params.id,
            })
          )
        }
      }
    }
  )

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
      <Index />
    </Provider>,
    app
  )
})()
