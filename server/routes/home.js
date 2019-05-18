
const CodeModel = require('../model/CodeModel')
const UserModel = require('../model/UserModel')
exports.index = (req,res,next)=>{
  if( req.cookies.user){
    return res.json({
      username: req.session.user.username,
      email: req.session.user.email,
    })
  }

  res.json({
    username: '',
    email: '',
  })
}

//退出
exports.exit = (req,res,next)=>{
  res.clearCookie('user')
  req.session.user = null;
  res.json({
    error:0
  })
}

exports.forget = (req,res,next)=>{
  UserModel.findOne({'email':req.body.email}).exec(function(err,user){
    if(!err){
      if(!user){
        return res.json({
          error:1,
          msg: '用户不存在,请注册'
        })
      }
      if(user){
        CodeModel.findOne({'coded': req.body.coded}).exec().then( (code)=>{
          console.log(code)
          if(code && code.coded == req.body.coded){
            if(code.time_age() > 60){
              return res.json({
                error: 1,
                msg: '验证码已过期'
              })
            }else{
              return res.json({
                error: 0,
                meg: '验证通过'
              })
            }
          }
           res.json({
            error:1,
            msg:'验证失败，验证码错误'
          })

        })
      }
    }
  })
  
}

exports.update = (req,res,next)=>{
  UserModel.findOne({'email':req.body.email}).exec().then( (user)=>{
    if(user){
      UserModel.updateOne({'email':req.body.email},{'pwd':req.body.pwd}).exec(function(err){
        if(!err){
          return res.json({
            error: 0,
            msg: '修改成功'
          })
        }
        res.json({
          error:1,
          msg:'修改失败'
        })
      })
    }
  })
}