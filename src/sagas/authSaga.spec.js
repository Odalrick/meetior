import R from 'ramda'
import {put, call} from 'redux-saga/effects'
import {sagaFactory} from './authSaga'
import {setPending, login} from '../ducks/user'

describe('auth saga', () => {
  const db = {
    setConfig: () => {
    },
  }
  const cont = R.assoc('value', R.__, {done: false})
  it('should authenticate user', () => {
    const testSaga = sagaFactory(db)
    const name = 'C3PO'
    const pass = 'Excuse me'
    const url = 'Deathstar'
    const action = testSaga.actionCreators.login(url, name, pass)
    const saga = testSaga.login(action)
    expect(saga.next()).to.deep.equal(
      cont( // handles generator
        put( // effect
          setPending() // action
        )
      )
    )
    expect(saga.next()).to.deep.equal(cont(call(testSaga.fetchConfig, url, name, pass)))
    expect(saga.next({
      couchUrl: 'localhost:5984',
      protocol: 'https',
      dataDB: 'p-data',
      role: 'Protocol droid'
    })).to.deep.equal(cont(call(db.setConfig, {
      couchUrl: 'localhost:5984',
      protocol: 'https',
      dataDB: 'p-data',
      name: 'C3PO',
      pass: 'Excuse me',
      role: 'Protocol droid'
    })))
    expect(saga.next()).to.deep.equal(cont(put(login('Protocol droid'))))
    expect(saga.next().done).to.be.true()
  })


})
