
const UserModel = require('../model/UserModel')
const ShopModel = require('../model/ShopModel')
exports.index = (req,res,next)=>{
  console.log(req.body)
  
  UserModel.findOne({username: req.body.user}).exec((err,users)=>{
    if( !err){
      if(users){
        ShopModel.findOne( {name: req.body.name,'user':req.cookies.user}).exec( (err,shop)=>{
          if(shop){
            shop.count+=1;
            shop.save()
            return res.json({
              error: 0,
              msg: '添加成功'
            })
          }else{
            let shop = new ShopModel({
              name: req.body.name,
              price: req.body.price,
              user: users._id,
              dealid: req.body.dealid,
              title: req.body.title
            })
            shop.save( (err)=>{
              if(!err){
                return res.json({
                  error: 0,
                  msg: '添加成功'
                })
              }
            })

          }
        })
      }
    }
    
  })
 
}

exports.getshop = (req,res,next)=>{
  UserModel.findOne({'_id':req.cookies.user}).exec( (err,user)=>{
    if(!err){
      ShopModel.findOne({'user':req.cookies.user,'dealid':req.params.dealid}).exec((err,shop)=>{
        if(!err){
          if(shop){
            return res.json({
              error: 0,
              data: shop
            })
          }
          res.json({
            error:1,
            msg: '商品不存在'
          })
        }
      })
    }
  })
}