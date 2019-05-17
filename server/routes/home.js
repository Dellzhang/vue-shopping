
exports.index = (req,res,next)=>{
  if(req.cookies.user){
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

exports.exit = (req,res,next)=>{
  res.clearCookie('user')
  req.session.user = null;
  res.json({
    error:0
  })
}