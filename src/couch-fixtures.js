import fetch from 'node-fetch'
import co from 'co'


co( function *() {
  try {
    const res = yield fetch('http://localhost:5984/test-db', {method: 'PUT'})
    console.log(res.status)
  } catch (e) {
    console.log(e)
  }
})

