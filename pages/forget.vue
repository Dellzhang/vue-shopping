<template>
  <div>
     <div class="m-register">
      <div class="register-container">
        <div class="top">
          <a href="/" class="register-logo"></a>
          <div class="desc">
            <span>已有美团账号?</span>
            <a href="/login" class="login">
              <el-button type="primary" size="mini">登录</el-button>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="desc">
        <span>找回登录密码</span>
      </div>
      <ul>
        <li class="active">1.确认账号</li>
        <li>2.安全校验</li>
        <li>3.设置密码</li>
        <li>4.完成</li>
      </ul>
      <div class="foot">

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'blonk'
  }
</script>

<style lang="scss" scoped>
  .m-register{
    width: 100%;
    min-width: 980px;
    border-bottom: 2px solid #2DB8AA;
    height: 80px;
    .register-container{
      width: 55%;
      margin: 0 auto;
      .top{
        height: 80px;
        overflow: hidden;
      }
      .register-logo{
        background-image: url(https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png);
        width: 54px;
        height: 36px;
        background-position: -669px -727px;
        display: block;
        padding: 10px 0px;
        float: left;
      }
      .desc{
        float: right;
        line-height: 36px;
        padding: 21px 0px;
        box-sizing: border-box;
        .login /deep/ .el-button{
          background: #2DB8AA;
          border-color: #2DB8AA;
          margin-left: 5px;
        }
      }
    }
  }
  .content{
    width: 58%;
    margin: 0 auto;
    margin-top: 50px;
    .desc{
      border-bottom: 2px solid #DDD;
      height: 46px;
      box-sizing: border-box;
      span{
        padding: 10px;
        font-size: 18px;
        color: #333;
        border-bottom: 2px solid #333;
        box-sizing: border-box;
        display: inline-block;
      }
    }
    ul{
      list-style: none;
      display: flex;
      margin-top: 20px;
      margin-bottom: 20px;
      li{
        flex: 1;
        text-align: center;
        margin: 0px 3px;
        font-size: 14px;
        line-height: 30px;
        background: #DEDEDE;
        color: #666;
        &.active{
          background: #06C1AE;
          color: #fff;
        }
      }
    }
    .foot{
      border: 1px solid  #DDD;
      height: 300px;
      width: 100%;
      padding: 50px;
      box-sizing: border-box;
    }

  }
</style>
