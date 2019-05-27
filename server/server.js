
const express = require('express')
const data = require('../assets/api/menu.json')
const axios = require('axios')
const app = express()

//获取首页menu数据
app.get('/get/menu',(req,res)=>{
  res.json({
    error: 0,
    msg: data
  })
})




app.listen(4000,()=>{
  console.log('服务器已经启动了')
})

