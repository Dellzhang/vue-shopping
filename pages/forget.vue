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
        <li :class=" num ===0 ? 'active': '' ">1.确认账号</li>
        <li :class=" num ===1 ? 'active': '' ">2.安全校验</li>
        <li :class=" num ===2 ? 'active': '' ">3.设置密码</li>
        <li :class=" num ===3 ? 'active': '' ">4.完成</li>
      </ul>
      <div class="foot">
          <div :class="num ===0 ? 'step-1 divactive': 'step-1'">
            <p>请填写你要找回的美团账号</p>
            <input type="email" placeholder="用户名/邮箱" v-model="email">
            <el-button v-if="email" type="primary" class="next" @click="stepOne"  v-loading.fullscreen.lock="OneLoading" :element-loading-text="Onemessage">下一步</el-button>
            <el-button v-else type="primary" disabled>下一步</el-button>
          </div>
          <div :class="num ===1 ? 'step-2 divactive': 'step-2'">
            <input type="email" placeholder="邮箱" v-model="email">
            <input type="text" placeholder="请输入验证码" v-model="coded" maxlength="6">
            <div class="sendWrapper">
              <el-button class="send" type="primary" @click="sendCode">发送验证码</el-button>
              <span>{{statusMsg}}</span>
            </div>
            <el-button v-if="coded" type="primary" class="btn-two next" @click="stepTwo" v-loading.fullscreen.lock="TwoLoading" :element-loading-text="Twomessage">下一步</el-button>
            <el-button v-else type="primary" class="btn-two" disabled>下一步</el-button>
            <p class="error">{{error}}</p>
          </div>
          <div :class="num ===2 ? 'step-3 divactive': 'step-3'">
              <p>为你的账户<strong>{{email}}</strong>设置新密码</p>
              <input type="password" placeholder="新密码" v-model="pwd">
              <el-button v-if="pwd" type="primary" class="next" @click="stepThree"  v-loading.fullscreen.lock="ThreeLoading" :element-loading-text="Threemessage">下一步</el-button>
              <el-button v-else type="primary" disabled>保存密码</el-button>
          </div>
           <div :class="num ===3 ? 'step-4 divactive': 'step-4'">
              <p class="title">恭喜你成功修改了登录密码</p>
              <p class="ps">您的登录密码已经重新设置，请妥善保管</p>
               <el-button type="primary" @click="stepFour">立即登录</el-button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import CryptoJS from 'crypto-js'
  export default {
    layout: 'blonk',
    data () {
      return {
        email: '',
        num: 0,
        coded:'',
        statusMsg: '',
        cont: '',
        OneLoading: false,
        Onemessage: '验证中',
        TwoLoading: false,
        Twomessage: '验证中',
        ThreeLoading: false,
        Threemessage: '保存中',
        error: '',
        pwd: ''
      }
    },
    methods: {
      stepOne (e){
        this.OneLoading = true;
       setTimeout( ()=>{
          this.Onemessage = '验证通过'
        },3000)
        setTimeout( ()=>{
          this.OneLoading = false;
          let num = e.target.parentNode.className.split('-')[1];
          this.num = 1;
        },4000)
      
      },
      stepTwo (){
        this.TwoLoading = true;
        axios.post('/user/forget',{
          email: this.email,
          coded: this.coded
        }).then( (res)=>{
          if(res.data.error === 0){
            setTimeout( ()=>{
              this.TwoLoading = false;
              this.Twomessage = '验证通过'
              this.num = 2;
            },3000)
          }else{
            setTimeout( ()=>{
              this.TwoLoading = false;
              this.Twomessage = '验证没有通过'
              this.error = res.data.msg
            },3000)
           
            setTimeout( ()=>{
              this.error = '';
              this.Twomessage = '验证中'
            },7000)
          }
        })
      },

      stepThree (){
        this.ThreeLoading = true;
        axios.post('/user/update',{
          email: this.email,
          pwd: CryptoJS.MD5(this.pwd).toString()
        }).then( (res)=>{
         if(res.data.error === 0){
           setTimeout( ()=>{
              this.ThreeLoading = false;
              this.Threemessage = '修改成功'
              this.num = 3
           },4000)
         }else{
            setTimeout( ()=>{
              this.ThreeLoading = false;
              this.Threemessage = '修改失败'
           },4000)
         }
         setTimeout( ()=>{
              this.Threemessage = '验证中'
           },8000)
        })
      },

      stepFour(){
        location.href = '/login'
      },

      sendCode(){
        if (this.timer) {
          return false
        }
        axios.post('/user/verify',{
           email: this.email
        }).then( (res)=>{
          if( res.data.error ===0){
            let count = 60
            this.statusMsg = `验证码已发送,剩余${count--}秒`
            this.timer = setInterval( ()=>{
              this.statusMsg = `验证码已发送,剩余${count--}秒`
               if(count === -1){
                  clearInterval(this.timer)
                }
            },1000)
            
          }else{
            this.statusMsg = res.msg
          }
        }).catch((error)=>{

        })
      }
    }

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
      height: 360px;
      width: 100%;
      padding: 80px 0px 20px 0px;
      box-sizing: border-box;
      text-align: center;
      .step-1{
        display: none;
        &.divactive{
          display: block;
        }
        p{
          text-align: center;
          color: #333;
          font-size: 16px;
          margin-bottom: 40px;
        }
        input{
          width: 250px;
          height: 20px;
          border: none;
          outline: none;
          border-bottom: 1px solid #DDD;
          font-size: 16px;
          display: block;
          margin: 0 auto;
        }
        button{
          width: 250px;
          border: 1px solid #e5e5e5;
          background-color: #e5e5e5;
          height: 36px;
          line-height: 12px;
          border-radius: 8px;
          margin-top: 30px;
          color: #999;
          font-size: 16px;
          &.next{
            background: #06C1AE;
            color: #fff;
          }
        }
      }
      .step-2{
        display: none;
        &.divactive{
          display: block;
        }
        .error{
          color: red;
          margin-top: 5px;
        }
        input{
          display: block;
          width: 250px;
          height: 30px;
          margin: 0 auto;
          margin-bottom: 20px;
        }
        .btn-two{
          width: 250px;
          border: 1px solid #e5e5e5;
          background-color: #e5e5e5;
          height: 36px;
          line-height: 12px;
          border-radius: 8px;
          margin-top: 30px;
          color: #999;
          font-size: 16px;
          &.next{
            background: #06C1AE;
            color: #fff;
          }
        }
        span{
          color: #e6a23c;
          font-size: 14px;
        }
        .sendWrapper{
          width: 280px;
          margin: 0 auto;
          height: 40px;
          span{
            float: left;
            padding: 10px 0px;
            margin-left: 10px;
          }
        }
        .sendWrapper /deep/ .send{
          float: left;
          margin-left: 12px
        }
      }
      .step-3{
        display: none;
        &.divactive{
          display: block;
        }
        p{
          font-size: 16px;
          margin-bottom: 40px;
        }
        input{
          width: 250px;
          height: 20px;
          border: none;
          outline: none;
          border-bottom: 1px solid #DDD;
          font-size: 16px;
          display: block;
          margin: 0 auto;
        }
         button{
          width: 250px;
          border: 1px solid #e5e5e5;
          background-color: #e5e5e5;
          height: 36px;
          line-height: 12px;
          border-radius: 8px;
          margin-top: 30px;
          color: #999;
          font-size: 16px;
          &.next{
            background: #06C1AE;
            color: #fff;
          }
        }
      }
      .step-4{
        display: none;
        &.divactive{
          display: block;
        }
        p{
          font-size: 16px;
          &.title{
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 30px;
          }
        }
        button{
          width: 250px;
          border: 1px solid #e5e5e5;
          background-color: #e5e5e5;
          height: 36px;
          line-height: 12px;
          border-radius: 8px;
          margin-top: 30px;
          font-size: 16px;
          background: #06C1AE;
          color: #fff;
          
        }
      }
    }

  }
</style>
