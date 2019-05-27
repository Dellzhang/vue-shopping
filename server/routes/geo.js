
const axios = require('axios')

exports.index = (req,res,next) =>{
  console.log()
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
