const koa = require('koa')
const routerFactory = require('koa-router')
const auth = require('basic-auth')
const R = require('ramda')
const fetch = require('isomorphic-fetch')

const configFactoryFactory = require('./server/configFactoryFactory')
const configFactory = configFactoryFactory(require('./server/configDev'))
const serverConfig = configFactory.get('server', 'server', 'server')

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
  if (!credentials) {
    const res = this.response
    res.status = 401
  } else {
    // TODO: Add escaping to pass and name
    const url = `${serverConfig.protocol}://${credentials.name}:${credentials.pass}@${serverConfig.couchUrl}/_users/org.couchdb.user:${credentials.name}`
    const res = yield fetch(url, { method: 'GET' })
    const user = yield res.json()
    console.log(user)
    const userConfig = configFactory.get(user.roles[0], credentials.name, credentials.pass)
    this.response.body = JSON.stringify(userConfig)
  }
})

server
  .use(router.routes())
  .use(router.allowedMethods())

server.listen(port)
