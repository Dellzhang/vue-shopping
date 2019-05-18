
const UserModel = require('../model/UserModel');
const users = require('../conn/user');
const CodeModel = require('../model/CodeModel')
exports.index = (req,res,next)=>{
  CodeModel.remove().exec(function(err){
    if(err){
      console.log(err)
    }
  })
  UserModel.findOne({'username': req.body.username}).then( (user)=>{
    if(user){
      if(user.pwd == req.body.pwd){
        res.cookie('user',user._id)
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