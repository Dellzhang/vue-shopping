import Vue from 'vue'

export default  Vue.filter('recommCale',(val)=>{
  let v = val.substring(0,5)
  let v1 = val.substring(27,val.length)
  let v2 = val.substring(25,val.length)
  if(v === 'https'){
    return '//p1.meituan.net' + v1 + '@214w_120h_1e_1c'
  }else{
    return '//p1.meituan.net' + v2 + '@214w_120h_1e_1c'
  }
})