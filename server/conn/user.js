const UserModel = require('../model/UserModel')
const user = {
  //设置ckooie
  // createCookie: function(user,res,next){
  //   res.cookie('user',user._id + '$$$',{
  //     signed: true, //加密cookie数据
  //     maxAge: 1000*60*60*24*30 //存在时间
  //   })
  // },
  createSession: function(req,res,next){

    if(req.session.user){
      next()
    }else{
      // let cookieId = req.signedCookies['user']
      let cookieid = req.cookies.user
      if(!cookieid){
        return next()
      }
      // console.log(req.session.user,req.signedCookies['user'])
      // let userId = cookieId.split('$$$')[0];
      
      UserModel.findOne({'_id':cookieid}).then( (user)=>{
        req.session.user = user;
        next()
      })

    }
  }

}
module.exports = user