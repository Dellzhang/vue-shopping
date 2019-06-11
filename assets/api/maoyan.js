import Vue from 'vue'

export default  Vue.filter('maoImg',(val)=>{
  let v2 = val.substring(25,val.length)
  return '//p1.meituan.net' + v2 + '@214w_297h_1e_1c'
})