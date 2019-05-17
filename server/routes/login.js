
const UserModel = require('../model/UserModel');
const users = require('../conn/user')
exports.index = (req,res,next)=>{
  // console.log(req.body);
  UserModel.findOne({'username': req.body.username}).then( (user)=>{
    if(user){
      if(user.pwd == req.body.pwd){
        // users.createCookie(user,res,next)
        res.cookie('user',user._id,{
          maxAge: 1000*60*60*24*30
        })
          return res.json({
              error: 0,
              msg: '登录成功'
          })
      }else{
          return res.json({
              error: 1,
              msg: '密码输入错误，请重新输入'
          })
      }

    }
    res.json({
        error: 1,
        msg: '用户不存在，请注册'
    })
  })
}