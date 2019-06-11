import Vue from 'vue'

export default  Vue.filter('imgCale',(val)=>{
  let v = val.substring(0,5)
  let v1 = val.substring(27,val.length)
  let v2 = val.substring(25,val.length)
  if(v === 'https'){
    return '//p1.meituan.net' + v1 + '@368w_208h_1e_1c'
  }else{
    return '//p1.meituan.net' + v2 + '@368w_208h_1e_1c'
  }

  //http://p0.meituan.net/w.h/dpmerchantalbum/e7c28801bc0caf33880e3b7ff1417d37342197.jpg
  //http://p0.meituan.net/w.h/deal/9f436e699a22440c88f9ef91d76450ab19478.jpg@0_16_746_452a%7C388h_640w_2e_90Q
  //http://p0.meituan.net/w.h/deal/9f436e699a22440c88f9ef91d76450ab19478.jpg@0_16_746_452a%7C388h_640w_2e_90Q
  // http://p0.meituan.net/w.h/wedding/fc8768b8a6435d2ceb92d0b0177dc069310061.jpg
  //http://p1.meituan.net/deal/201208/22/1_0822151022.jpg
  //http://p0.meituan.net/w.h/dpmerchantalbum/e7c28801bc0caf33880e3b7ff1417d37342197.jpg
})