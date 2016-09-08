import { put, call } from 'redux-saga/effects'
import { login, setPending } from '../ducks/user'
import fetch from 'isomorphic-fetch'

const PREFIX = 'planck/auth-saga'
const LOGIN = `${PREFIX}/LOGIN`

export function sagaFactory(db) {

  const fetchConfig = (url, name, pass) => {
    var headers = new Headers();
    headers.append("Authorization", "Basic " + base64.encode(`${name}:${pass}`));
    return fetch(url, {headers})
  }

  return ({
    *login(action) {
      const {url, name, pass} = action.payload
      yield put(setPending())
      const config = yield call(fetchConfig, url, name, pass)
      yield call(db.setConfig, Object.assign(config, {name, pass}))
      yield put(login(config.role))
    },
    fetchConfig,
    actionCreators: {
      login(url, name, pass) {
        return { type: LOGIN, payload: {url, name, pass} }
      },
    },
  })
}
