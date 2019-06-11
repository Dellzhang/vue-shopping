import Vue from 'vue'

export default Vue.filter('comTime',(val)=>{
  let t = parseInt(val)
  let time = new Date(t).toLocaleDateString().split('/')
  return `${time[0]}年${time[1]}月${time[2]}日` 
})