import co from 'co'
import R from 'ramda'

import config from './config'
import DBfactory from './db/couch'
import lessonFixtures from './db/fixtures/lessons.json'
import lessonDesign from './db/fixtures/lesson.design'
import docsDesign from './db/fixtures/docs.design'

const log = req => {
  console.log(`status ${req.status} ${req.url}`)
  if (req.status >= 400) {
    req.json().then(console.log)
  }

  return req
}

co(function *() {
  const db = DBfactory(config)
  try {
    log(yield db.deleteDb())
    log(yield db.createDb())
    log(yield db.save(lessonDesign))
    log(yield db.save(docsDesign))
    R.forEach(log)(yield R.map(db.save, lessonFixtures))
  } catch (e) {
    console.log(e)
  }
})

