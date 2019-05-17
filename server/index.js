const express = require('express')
// import  express from 'express'
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')

const db = require('./model/db');

const router = require('./routes');
const setting = require('./setting');
const user = require('./conn/user')

//解析post请求
const bodyParser = require('body-parser');

//导入cookie-parser模块，nodejs中解析cookie的模块
const cookieParser = require('cookie-parser');

//session 是服务器端进行用户数据登录验证的模块
const session = require('express-session');

//将session数据通过connect-mongo 模块存储到mongodb数据库中
const  MongoStore = require('connect-mongo')(session)

const app = express()


app.use(bodyParser.json());
app.use( bodyParser.urlencoded({extended:false}) )
app.use(cookieParser('mt'))

//生成session数据
app.use(session({
  secret: 'mt',
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({
    url: 'mongodb://localhost/mt'
  })
}))

app.use( user.createSession);

app.use(function(req,res,next){
  
  res.locals.user = req.session.user;
  next()
})

app.use(router);



// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
