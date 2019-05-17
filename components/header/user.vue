<template>
    <div class="m-user">
        <template v-if="user">
          {{user}}
          <nuxt-link to="/exit" class="exit">退出</nuxt-link>
        </template>
        <template v-else>
            <nuxt-link to="/login">立即登录</nuxt-link>
             <nuxt-link to="/register">注册</nuxt-link>
        </template>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      user: ''
    }
  },
  mounted () {
    console.log(111)
    axios.get('/user/getUser').then( ({status,data})=>{
      if(status === 200){
        this.user = data.username
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  .m-user{
    height: 40px;
    box-sizing: border-box;
    padding: 12px 14px;
    color: #41B883;
    .exit{
      color: #999;
      &:hover{
        color: #41B883;
      }
    }
  }
</style>



