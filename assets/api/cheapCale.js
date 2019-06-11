import Vue from 'vue'

export default  Vue.filter('cheapCale',(val)=>{
  let v = val.split('/w.h/')
  if( v.length >1){
    return v[0] + '/' + v[1]
  }else{
    return v[0]
  }
})