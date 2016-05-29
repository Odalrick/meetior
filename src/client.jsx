import React from 'react'
import ReactDOM from 'react-dom'
import createSagaMiddleware, { takeLatest } from 'redux-saga'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { tinyMiddleware, tinyReducer, reduxTinyRouter } from 'redux-tiny-router'

import { take, fork } from 'redux-saga/effects'

import config from './config'
import dbFactory from './db/couch'
import Index from './components/Index.jsx'

import course from './ducks/course'
import lesson from './ducks/lesson'
import docFac, { helpers } from './ducks/docs'

import { SET_FIELD, SET_FIELD_IN } from './ducks/commonActions'
import sagaFactory from './sagas/document/loadDocumentSaga'
import sagaFactory2 from './sagas/document/updateDraftDocumentSaga'

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

  const delay = () => new Promise((accept) => setTimeout(accept, 3000))

  const db = dbFactory(config)
  const saga = sagaFactory(db)
  const saga2 = sagaFactory2(db, delay, (state, id) => helpers.getCurrentDocument(state.documents, id))
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
        if (action.router.params.id2) {
          yield fork(saga.loadDocument,
            saga.actionCreators.loadDocument({
              _id: action.router.params.id2,
            })
          )
        }
      }
    },
    function *() {
      yield* takeLatest(SET_FIELD, saga2.updateDocument)
    },
    function *() {
      yield* takeLatest(SET_FIELD_IN, saga2.updateDocument)
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
