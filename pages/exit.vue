<template>
    <div></div>
</template>

<script>
import axios from 'axios'
export default {
  layout:'blonk',
  middleware: async ()=>{
    let {status,data}= await axios.get('/user/exit')
    if(status===200&&data&&data.error===0){
      location.href = '/'
    }
  }
}
</script>

<style>

</style>

