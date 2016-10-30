import R from 'ramda'
import { put, call } from 'redux-saga/effects'
import { tinyActions } from 'redux-tiny-router'
import { sagaFactory } from './authSaga'
import { setPending, login } from '../ducks/user'
import { toUrl } from '../lib/navigation'
import { login as loginCommon } from '../ducks/commonActions'

describe('auth saga', () => {
  const db = {
    setConfig: () => {
    },
  }
  const response = {
    json: () => {},
  }
  const cont = R.assoc('value', R.__, { done: false })
  it('should authenticate user', () => {
    const testSaga = sagaFactory(db)
    const name = 'C3PO'
    const pass = 'Excuse me'
    const url = 'Deathstar'
    const action = loginCommon(url, name, pass, null)
    const saga = testSaga.login(action)
    expect(saga.next()).to.deep.equal(
      cont( // handles generator
        put( // effect
          setPending() // action
        )
      )
    )
    expect(saga.next()).to.deep.equal(cont(call(testSaga.fetchConfig, url, name, pass)))
    expect(saga.next(response)).to.deep.equal(cont(call([response, response.json])))
    expect(saga.next({
      couchUrl: 'localhost:5984',
      protocol: 'https',
      dataDB: 'p-data',
      role: 'Protocol droid',
    })).to.deep.equal(cont(call(db.setConfig, {
      couchUrl: 'localhost:5984',
      protocol: 'https',
      dataDB: 'p-data',
      name: 'C3PO',
      pass: 'Excuse me',
      role: 'Protocol droid',
    })))
    expect(saga.next()).to.deep.equal(cont(put(login('Protocol droid'))))
    expect(saga.next().done).to.be.true()
  })

  it('should forward after authenticating user', () => {
    const testSaga = sagaFactory(db)
    const forward = { title: 'test', type: 'test', id: '123' }
    const action = loginCommon('url', 'name', 'pass', forward)
    const saga = testSaga.login(action)
    saga.next() // pending
    saga.next() // fetch config-json
    saga.next({ json() {} }) // parse config
    saga.next({}) // set config
    saga.next() // store login

    // redux-tiny-router doesn't generates real actions, but intercepts its own.
    // This is a compromise to test _something_.
    expect(saga.next().value.PUT.type).to.equal('RTR_ACTION')
    expect(saga.next().done).to.be.true()
  })
})
