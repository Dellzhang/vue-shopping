<template>
  <div>
      <div class="top">
        <div class="logoWrapper">
          <a href="/" class="login-logo"></a>
        </div>
      </div>
      <div class="container">
        <img src="http://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" alt="">
        <div class="right">
          <el-input type="text" placeholder="用户名" v-model="username"></el-input>
          <el-input type="password" placeholder="密码"  show-password v-model="pwd" class="pwd"></el-input>
          <a href="/forget" class="forget">忘记密码 ?</a>
          <div class="btnWrapper">
            <el-button type="primary" @click="btnLogin">登录</el-button>
          </div>
          <p>还没有账号? <nuxt-link to="/register">免费注册</nuxt-link></p>
          <p class="err"> {{error}}</p>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import CryptoJS from 'crypto-js'
export default {
  layout:'blonk',
  data () {
    return {
      username: '',
      pwd: '',
      error: ''
    }
  },
  methods: {
    btnLogin () {
      axios.post('/user/login',{
        username: this.username,
        pwd: CryptoJS.MD5(this.pwd).toString(),
      }).then( (res) =>{
        if(res.data.error === 0){
          location.href = '/'
        }else{
          this.error = res.data.msg
          setInterval( ()=>{
            this.error = ''
          },1500)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .top{
    width: 50%;
    margin: 0 auto;
    height: 96px;
    .logoWrapper{
       padding: 30px 0px;
    }
    .login-logo{
      background-image: url(https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png);
      width: 82px;
      height: 54px;
      background-position: -188px -808px;
      display: block;
      padding: 10px 0px;
      float: left;
    } 
  }
  .container{
    width: 60%;
    margin: 0 auto;
    margin-top: 50px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    img{
      width: 480px;
      height: 370px;
      margin-right: 50px;
    }
    .right{
      margin-right: 30px;
      p{
        margin-top: 8px;
        color: #666;
        &.err{
          color: red;
        }
      }
      .forget{
        width: 72%;
        color: #2eb7aa;
        text-align: right;
        margin: 10px 0px;
        display: block;
      }
    }
    .right /deep/ .el-input{
        width: 72%;
        margin-bottom: 20px;
        border-radius: 2px;
    }
    .right /deep/ .pwd{
      margin: 0px;
    }
    .btnWrapper{
      width: 72%;
    }
    .btnWrapper /deep/ .el-button{
      color: #fff;
      background-color: #2eb7aa;
      border-color: #008177;
      width: 100%;
      border-radius: 2px;
    }
  }
</style>


