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
            <el-button type="primary" @click="btnLogin" v-if="loading">登录</el-button>
            <el-button type="primary" class="load" disabled v-else>登录中...</el-button>
          </div>
          <p>还没有账号? <nuxt-link to="/register">免费注册</nuxt-link></p>
          <h3>
            <span> 用合作网站账号登录</span>
          </h3>
          <p class="icon">
            <i class="iconfont qq">&#xe64d;</i>
            <i class="iconfont bo">&#xe658;</i>
          </p>
          <p class="err"> {{error}}</p>
        </div>
      </div>
    <div class="footer">
      <ul>
        <li class="first">关于美团</li>
        <li>加入我们</li>
        <li>商家注册</li>
        <li>帮助中心</li>
        <li class="last">美团手机版</li>
      </ul>
    </div>
    <p class="bom">
      <span>©2019</span>
      <a href="#">美团网团购</a>
      <span>京ICP证070791号</span>
      <a href="#">京公网安备11010502025545号</a>
    </p>
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
      error: '',
      loading: true
    }
  },
  methods: {
    btnLogin () {
      axios.post('/user/login',{
        username: this.username,
        pwd: CryptoJS.MD5(this.pwd).toString(),
      }).then( (res) =>{
        if(res.data.error === 0){
          this.loading = false
          setTimeout( ()=>{
            location.href = '/'
          },1500)
        }else{
          this.error = res.data.msg
          setInterval( ()=>{
            this.error = ''
          },500)
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
      width: 380px;
      height: 370px;
      margin-right: 50px;
    }
    .right{
      margin-right: 30px;
      p{
        margin-top: 8px;
        color: #666;
        width: 72%;
        &.err{
          color: red;
        }
      }
      h3{
        border-bottom: 1px solid #CCC;
        position: relative;
        width: 71%;
        margin: 20px 0px;
        span{
          position: absolute;
          top: -10px;
          left: 19%;
          font-size: 14px;
          font-weight: 400;
          color: #666;
          background: #fff;
          padding: 0px 10px;
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
        width: 70%;
        margin-bottom: 20px;
        border-radius: 2px;
    }
    .right /deep/ .pwd{
      margin: 0px;
    }
    .btnWrapper{
      width: 70%;
    }
    .btnWrapper /deep/ .el-button{
      color: #fff;
      background-color: #2eb7aa;
      border-color: #008177;
      width: 100%;
      border-radius: 2px;
      &.load{
        background: #e5e5e5;
        border-color: #e5e5e5;
      }
    }
  }
  .footer{
    width: 60%;
    margin: 30px auto 0px;
    padding: 12px 0px;
    border-top: 1px solid #E5E5E5;
    border-bottom: 1px solid #E5E5E5;
    ul{
      overflow: hidden;
      list-style: none;
      li{
        float: left;
        color: #999;
        font-size: 12px;
        margin: 5px 0px;
        padding: 0px 16px;
        border-right: 1px solid #E5E5E5;
        cursor: pointer;
        &.first{
          padding-left: 0px;
        }
        &.last{
          border: none;
        }
      }
    }
  }
  .bom{
    width: 60%;
    margin: 15px auto 20px;
    color: #999;
    a{
      color: #999;
      text-decoration-color: #999;
      margin-left: 3px;
    }
  }
  .icon{
    text-align: center;
    margin-top: 20px;
    .qq{
      color: #74BBE8;
      margin-right: 10px;
    }
    .bo{
      color: #FF978C;
    }
  }
</style>


