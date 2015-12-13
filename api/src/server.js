var koa = require('koa')

var app = koa()

app.use(function *(){
  this.body = 'Hello from the underworld!'
})

app.listen(3000)
