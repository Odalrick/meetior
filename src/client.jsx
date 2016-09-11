import React from 'react'
import ReactDOM from 'react-dom'
import createSagaMiddleware, { takeLatest, takeEvery } from 'redux-saga'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { tinyMiddleware, tinyReducer, reduxTinyRouter } from 'redux-tiny-router'

import { take, fork } from 'redux-saga/effects'

import dbFactory from './db/couch'
import Index from './components/Index.jsx'

import course from './ducks/course'
import lesson from './ducks/lesson'
import user from './ducks/user'
import docFac, { helpers } from './ducks/docs'
import lists, { setList } from './ducks/lists'

import { SET_FIELD, SET_FIELD_IN, SET_ATTACHMENT, SET_ATTACHMENT_IN } from './ducks/commonActions'
import sagaFactory from './sagas/document/loadDocumentSaga'
import sagaFactory2 from './sagas/document/updateDraftDocumentSaga'
import sagaFactory3 from './sagas/document/uploadAttachmentSaga'
import { sagaFactory as authSagaFactory, LOGIN } from './sagas/authSaga'

(() => {
  const documents = docFac({
    lesson,
    course,
  })
  const reducer = combineReducers(
    {
      ...tinyReducer,
      documents,
      lists,
      user,
    }
  )

  const delay = () => new Promise((accept) => setTimeout(accept, 3000))

  const db = dbFactory({})
  const saga = sagaFactory(db)
  const documentGetter = (state, id) => helpers.getCurrentDocument(state.documents, id)
  const saga2 = sagaFactory2(db, delay, documentGetter)
  const reloadDocument = (id) => saga.loadDocument(
    saga.actionCreators.loadDocument({
      _id: id,
    }))
  const saga3 = sagaFactory3(db, documentGetter, reloadDocument)
  const authSaga = authSagaFactory(db)
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
    },
    function* () {
      yield* takeEvery(SET_ATTACHMENT, saga3.uploadAttachment)
    },
    function* () {
      yield* takeEvery(SET_ATTACHMENT_IN, saga3.uploadAttachment)
    },
    function* () {
      yield* takeEvery(LOGIN, authSaga.login)
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

  const url = `${window.location.protocol}//${window.location.host}/login`
  store.dispatch(authSaga.actionCreators.login(url, 'anonymous', 'anonymous'))
  store.dispatch(setList('sidebar', [
    { title: 'En kurs!', type: 'course', id: 'eecf0a39454b4b2244ebdc3518899605' },
    { title: '404', type: 'XXX', id: 'XXX' },
  ]))

  const app = document.createElement('div')
  document.body.appendChild(app)
  ReactDOM.render(
    <Provider store={store} >
      <Index />
    </Provider>,
    app
  )
})()
