import fetch from 'node-fetch'
import co from 'co'
import R from 'ramda'

import courseFixtures from './db/fixtures/courses'

co(function *() {
  try {
    yield fetch('http://localhost:5984/test-db', {method: 'DELETE'})
    yield fetch('http://localhost:5984/test-db', {method: 'PUT'})
    yield R.map(course => fetch(`http://localhost:5984/test-db/${course._id}`, {
      method: 'PUT',
      body: JSON.stringify(course),
    }), courseFixtures)
  } catch (e) {
    console.log(e)
  }
})

