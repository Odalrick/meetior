import fetch from 'node-fetch'
import co from 'co'
import R from 'ramda'

import config from './config'
import courseFixtures from './db/fixtures/courses.json'

co(function *() {
  try {
    yield fetch(`${config.couchUrl}/${config.dataDB}`, { method: 'DELETE' })
    yield fetch(`${config.couchUrl}/${config.dataDB}`, { method: 'PUT' })
    yield R.map(course => fetch(`${config.couchUrl}/${config.dataDB}/${course._id}`, {
      method: 'PUT',
      body: JSON.stringify(course),
    }), courseFixtures)
  } catch (e) {
    console.log(e)
  }
})

