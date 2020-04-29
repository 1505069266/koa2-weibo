const Koa = require('koa')
const app = new Koa()
const render = require('koa-art-template')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const path = require("path")
const session = require("koa-session")

const index = require('./routes/index')
const userViewRouter = require('./routes/views/user')
const ApiUserRouter = require("./routes/api/user")

// error handler
onerror(app)
app.keys = ['session_key']
// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(session({
  key: 'koa:sess',
  maxAge: 86400000,
  overwrite: true,
  httpOnly: true,
  signed: true,
  rolling: false,
  renew: false
},app))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

render(app, {
  root: path.resolve(__dirname, "./views"),
  extname: ".html"
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(userViewRouter.routes(), userViewRouter.allowedMethods())
app.use(ApiUserRouter.routes(), ApiUserRouter.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
