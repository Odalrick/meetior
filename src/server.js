const koa = require('koa')
const routerFactory = require('koa-router')
const auth = require('basic-auth')
const R = require('ramda')
const fetch = require('isomorphic-fetch')

const config = require('./config')

const router = routerFactory()
const server = koa()

const isProduction = process.env.NODE_ENV === 'production'
const port = isProduction ? process.env.PORT : 3000

if (!isProduction) {
  const bundle = require('./server/bundle')
  bundle()
} else {
  // todo: production!
}

// 2. Api for find database for user
router.get('/login', function *(next) {
  yield next
  const credentials = auth(this.request)
  console.log(credentials)
  if (!credentials) {
    const res = this.response
    res.status = 401
  } else {
    const userConfig = R.compose(
      R.assoc('name')(credentials.name),
      R.assoc('pass')(credentials.pass)
    )(config)

    const protocol = userConfig.protocolSecure ? 'https' : 'http'
    // TODO: Add escaping to pass and name
    const url = `${protocol}://${userConfig.name}:${userConfig.pass}@${userConfig.couchUrl}/_users/org.couchdb.user:${userConfig.name}`
    console.log(url)
    const res = yield fetch(url, { method: 'GET' })
    const user = yield res.json()
    this.response.body = JSON.stringify(user, null, 2)
  }
})

server
  .use(router.routes())
  .use(router.allowedMethods())

server.listen(port)
