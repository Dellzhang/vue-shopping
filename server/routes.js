const express = require('express')
const axios =require('axios')
const router = express.Router();
const register = require('./routes/register')
const login = require('./routes/login')
const home = require('./routes/home')
const geo = require('./routes/geo')
const shop = require('./routes/shop')
//发送验证码

router.post('/user/verify',register.verify);

//注册
router.post('/user/register',register.index)


//主页获取用户名
router.get('/user/getUser',home.index)

//退出
router.get('/user/exit',home.exit)

//登录
router.post('/user/login',login.index)
module.exports = router


//忘记密码
router.post('/user/forget',home.forget)

//修改密码
router.post('/user/update',home.update)



//有格调列表
router.get('/get/type/:kind',geo.index)


// 狠优惠类别
router.get('/get/cheap/:kind',geo.cheap)

// 存储商品
router.post('/gou/shop',shop.index)

// 主页显示商品
router.get('/gou/getshop/:dealid',shop.getshop)