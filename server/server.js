
const express = require('express')
const data = require('../assets/api/menu.json')
const nav = require('../assets/api/meituan.json')
const axios = require('axios')
const app = express()

//获取首页menu数据
app.get('/get/menu',(req,res)=>{
  res.json({
    error: 0,
    msg: data
  })
})

//获取首页nav数据
app.get('/get/navlist',(req,res)=>{
  res.json({
    error: 0,
    msg: nav
  })
})




app.listen(4000,()=>{
  console.log('服务器已经启动了')
})

