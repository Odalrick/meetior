import fetch from 'node-fetch'
import co from 'co'
import R from 'ramda'

import config from './config'
import courseFixtures from './db/fixtures/courses.json'
import courseDesign from './db/fixtures/course.design'

const serialise = data => JSON.stringify(data,
  (key, value) => (typeof value === 'function') ? value.toString() : value
)

const log = req => {
  console.log(`status ${req.status} ${req.url}`)
  if (req.status >= 400) {
    req.json().then(console.log)
  }

  return req
}

console.log(serialise(courseDesign))

co(function *() {
  try {
    log(yield fetch(`${config.couchUrl}/${config.dataDB}`, {method: 'DELETE'}))
    log(yield fetch(`${config.couchUrl}/${config.dataDB}`, {method: 'PUT'}))
    log(yield fetch(`${config.couchUrl}/${config.dataDB}/_design/course`, {
      method: 'PUT',
      body: serialise(courseDesign),
    }))
    yield R.map(course => fetch(`${config.couchUrl}/${config.dataDB}/${course._id}`, {
      method: 'PUT',
      body: serialise(course),
    }), courseFixtures)
  } catch (e) {
    console.log(e)
  }
})

