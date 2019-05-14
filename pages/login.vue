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
          <el-input type="text" placeholder="邮箱"></el-input>
          <el-input type="password" placeholder="密码"></el-input>
          <div class="btnWrapper">
            <el-button type="primary">登录</el-button>
          </div>
          <p>还没有账号? <nuxt-link to="/register">免费注册</nuxt-link></p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  layout:'blonk'
}
</script>

<style lang="scss" scoped>
  .top{
    width: 55%;
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
    width: 55%;
    margin: 0 auto;
    margin-top: 50px;
    overflow: hidden;
    img{
      width: 480px;
      height: 370px;
      float: left;
    }
    .right{
      float: right;
      margin-right: 30px;
      p{
        margin-top: 8px;
        color: #666;
      }
    }
    .right /deep/ .el-input{
        width: 72%;
        margin-bottom: 20px;
        border-radius: 2px;
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


