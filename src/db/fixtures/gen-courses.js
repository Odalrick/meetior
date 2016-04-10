import co from 'co'
import fetch from 'node-fetch'
import R from 'ramda'

const fetchSlide = () => {
  return fetch('http://loripsum.net/api/3/short/headers/ul', {
    method: 'GET',
  }).then(res => {
    if (res.status >= 400) {
      throw new Error(`status ${test.status}`)
    } else {
      return res.text()
    }
  })
}

const fetchId = () => fetch('http://localhost:5984/_uuids', {
  method: 'GET',
}).then(res => {
  if (res.status >= 400) {
    throw new Error(`status ${test.status}`)
  } else {
    return res.json()
  }
}).then((data) => data.uuids[0])

const createCourse = () => ({
  slides: R.map(fetchSlide, R.range(0,3)),
  _id: fetchId(),
})

co(function *() {
  try {
    const test = yield R.map(createCourse, R.range(0, 5))

    console.log(JSON.stringify(test, null, 2))
  } catch (e) {
    console.error(e)
  }
})
