const express = require('express')

const router = express.Router();
const register = require('./routes/register')
const login = require('./routes/login')
const home = require('./routes/home')
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