
const axios = require('axios')

exports.index = (req,res,next) =>{
  axios.get('https://zz.meituan.com/ptapi/getScenesList',{
    params: {
      theme: 'quality',
      tab:req.params.kind,
      ci: 73,
      limit: 10
    }
  }).then( ({data})=>{
     res.json({
       error: 0,
       data
      
     })
   }).catch((err)=>{

   })
}

exports.cheap = (req,res,next)=>{
  axios.get('https://zz.meituan.com/ptapi/getScenesList',{
    params: {
      theme: 'cheap',
      tab:req.params.kind,
      ci: 73,
      limit: 20
    }
  }).then( ({data})=>{
     res.json({
       error: 0,
       data
      
     })
   }).catch((err)=>{

   })
}
