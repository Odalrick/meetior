import co from 'co'
import R from 'ramda'

import config from './config'
import DBfactory from './db/couch'
import courseFixtures from './db/fixtures/courses.json'
import lessonFixtures from './db/fixtures/lessons.json'
import docsDesign from './db/fixtures/docs.design'
//import docsFTI from './db/fixtures/fti.design'

const log = req => {
  console.log(`status ${req.status} ${req.url}`)
  if (req.status >= 400) {
    req.json().then(console.log)
  }

  return req
}

co(function *() {
  const db = DBfactory(process.argv.length > 2 ? R.assoc('couchUrl', process.argv[2], config) : config)
  try {
    //log(yield db.deleteDb())
    //log(yield db.createDb())
    log(yield db.save(docsDesign))
    //log(yield db.save(ftiDesign))
    //R.forEach(log)(yield R.map(db.save, courseFixtures))
    //R.forEach(log)(yield R.map(db.save, lessonFixtures))
  } catch (e) {
    console.log(e)
  }
})

