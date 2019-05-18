
const mail = require('../conn/email')
const UserModel = require('../model/UserModel');
const CodeModel = require('../model/CodeModel');

exports.verify = (req,res,next)=>{
  mail.sendMails(req.body,function(err){
    console.log(err)
  })

  return res.json({
    error:0,
    msg: '成功'
  })
}

exports.index = (req,res,next)=>{
  UserModel.findOne({"$or":[{username:req.body.username},{email:req.body.email}]}).exec( (err,user)=>{
    if(user){
       res.json({
        error: 1,
        msg: '用户已经存在，请登录'
      })
    }else{
      CodeModel.findOne({name:req.body.username}).exec( (err,codeUser)=>{
        if(codeUser){
          if(codeUser.coded == req.body.coded){
            
             if(codeUser.time_age() > 60){
               res.json({
                 error: 1,
                 msg: '验证码已过期'
               })
               
             } else {
              let users = new UserModel(req.body);
              users.save((err)=>{
                if(!err){
                  return res.json({
                    error: 0,
                    msg:'注册成功'
                  })
                }
              })
             }

          }else{
            res.json({
              error: 1,
              msg: '验证码输入错误'
            })
          }
        }
      })
    }
  })
}