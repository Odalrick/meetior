const koa = require('koa')
const routerFactory = require('koa-router')
const auth = require('basic-auth')
const config = require('./config')

const router = routerFactory()
const server = koa()

const isProduction = process.env.NODE_ENV === 'production'
const port = isProduction ? process.env.PORT : 3000

if(!isProduction) {
  const bundle = require('./server/bundle')
  bundle()
}else {
  //todo: production!
}

//2. Api for find database for user
router.get('/lookup', function *(next) {
  yield next
  const credentials = auth(this.request)
  if(!credentials) {
    const res = this.response
    res.statusCode = 401
    res.setHeader('WWW-Authenticate', 'Basic realm="example"')
    res.end('Access denied')
  }
  else {
    const userConfig = Object.assign({}, config, credentials);
  }
});

server
  .use(router.routes())
  .use(router.allowedMethods())

server.listen(port);
