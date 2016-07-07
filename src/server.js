const koa = require('koa')
const server = koa()

const isProduction = process.env.NODE_ENV === 'production'
const port = isProduction ? process.env.PORT : 3000

if(!isProduction) {
  const bundle = require('./server/bundle')
  bundle()
}

//2. Api for find database for user




server.use(function *(){
  this.body = 'Hello World';
});

server.listen(port);
