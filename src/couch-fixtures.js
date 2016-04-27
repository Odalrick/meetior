import fetch from 'node-fetch'
import co from 'co'
import R from 'ramda'

import config from './config'
import lessonFixtures from './db/fixtures/lessons.json'
import lessonDesign from './db/fixtures/lesson.design.js'

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

co(function *() {
  try {
    log(yield fetch(`${config.couchUrl}/${config.dataDB}`, {method: 'DELETE'}))
    log(yield fetch(`${config.couchUrl}/${config.dataDB}`, {method: 'PUT'}))
    log(yield fetch(`${config.couchUrl}/${config.dataDB}/_design/lesson`, {
      method: 'PUT',
      body: serialise(lessonDesign),
    }))
    yield R.map(course => fetch(`${config.couchUrl}/${config.dataDB}/${course._id}`, {
      method: 'PUT',
      body: serialise(course),
    }), lessonFixtures)
  } catch (e) {
    console.log(e)
  }
})

