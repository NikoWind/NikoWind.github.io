var express = require('express')
var compression = require('compression')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var nunjucks = require('nunjucks')
var routes = require('./routes')

var app = express()

var env = app.get('env')

console.log('node env :', env)

if (env === 'development') {
  app.disable('etag')
  app.use(require('connect-livereload')())
} else {
  app.use(compression())
}

nunjucks.configure('views', {
  autoescape: true,
  express: app
})

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'nunjucks')

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', routes)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error.html')
})

module.exports = app
