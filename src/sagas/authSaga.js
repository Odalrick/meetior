import { put, call } from 'redux-saga/effects'
import { tinyActions } from 'redux-tiny-router'
import { login, setPending } from '../ducks/user'
import fetch from 'isomorphic-fetch'
import { toUrl } from '../lib/navigation'

export function sagaFactory(db) {

  const fetchConfig = (url, name, pass) => {
    const headers = new Headers()
    headers.append('Authorization', 'Basic ' + (new Buffer(`${name}:${pass}`).toString('base64')))

    return fetch(url, { headers })
  }

  return ({
    *login(action) {
      const { url, name, pass } = action.payload
      yield put(setPending())
      const response = yield call(fetchConfig, url, name, pass)
      const config = yield call([response, response.json])
      console.log(config)
      yield call(db.setConfig, Object.assign(config, { name, pass }))
      yield put(login(config.role))
      if (action.payload.forward) {
        yield put(tinyActions.navigateTo(toUrl(action.payload.forward)))
      }
    },
    fetchConfig,
  })
}
