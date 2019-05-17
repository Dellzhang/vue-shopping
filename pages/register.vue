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
    <div class="form-content">
      <div class="myform">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="昵称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
             <el-input v-model="ruleForm.email"></el-input>
             <el-button size="mini" round @click="sendMsg">发送验证码</el-button>
              <span class="status">{{statusMsg}}</span>
            </el-form-item>
            <el-form-item label="验证码" prop="code">
              <el-input v-model="ruleForm.code" maxlength="6"/>
            </el-form-item>
            <el-form-item label="密码" prop="pwd">
               <el-input type="password" v-model="ruleForm.pwd"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="cpwd" >
               <el-input type="password" v-model="ruleForm.cpwd"></el-input>
            </el-form-item>
            <el-form-item class="formbtn">
            <el-button type="primary" @click="register">同意以下协议并注册</el-button>
              <div class="error">{{ error }}</div>
            </el-form-item>
              <el-form-item>
              <a class="f1" href="http://www.meituan.com/about/terms" target="_blank">《美团网用户协议》</a>
            </el-form-item>
          </el-form>
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
      statusMsg: '',
      error: '',
      ruleForm: {
        name: '',
        email: '',
        pwd: '',
        cpwd: '',
        code: ''
      },
      rules:{
        name: [{
          required: true,
          type: 'string',
          message: '请输入昵称',
          trigger: 'blur'
        }],
        email: [{
          required: true,
          type: 'email',
          message: '请输入邮箱',
          triger: 'blur'
        }],
        pwd: [{
          required: true,
          message: '创建密码',
          trigger: 'blur'
        }],
        code: [{
          required: true,
          message: '输入验证码',
          trigger: 'blur'
        }],
        cpwd: [{
          required: true,
          message: '确认密码',
          validator: (rule,value,cb)=>{
            if(value === ''){
              cb(new Error('请再次确认密码'))
            }else if( value !== this.ruleForm.pwd){
              cb(new Error('两次密码不一致'))
            }else{
              cb()
            }
          }
        }]
      }
    }
  },
  methods: {
    sendMsg () {
      let namePass
      let emailPass

      if (this.timer) {
        return false
      }
      this.$refs['ruleForm'].validateField('name', (valid) => {
        namePass = valid
      })
      if(namePass){
        return false
      }
      this.$refs['ruleForm'].validateField('email', (valid) => {
        emailPass = valid
      })
       const self = this;
      if(!namePass && !emailPass){
        axios.post('/user/verify',{
           email: this.ruleForm.email,
           name: this.ruleForm.name
        }).then( (res)=>{
          // console.log(res.data)
          if( res.data.error ===0){
            let count = 60
            self.statusMsg = `验证码已发送,剩余${count--}秒`
            self.timer = setInterval( ()=>{
              self.statusMsg = `验证码已发送,剩余${count--}秒`
              //  console.log(self.statusMsg,self.timer);
               if(count === -1){
                  clearInterval(self.timer)
                }
            },1000)
            
          }else{
            self.statusMsg = res.msg
          }
        }).catch((error)=>{

        })
      }
    },
    register () {
      this.$refs['ruleForm'].validate( (vaild)=>{
        if(vaild){
          axios.post('/user/register',{
            username: this.ruleForm.name,
            email: this.ruleForm.email,
            pwd: CryptoJS.MD5(this.ruleForm.pwd).toString(),
            coded: this.ruleForm.code,
          }).then( (res) =>{
            if(res.data.error == 0){
              alert(res.data.msg);
              location.href = '/login'
            }else{
              this.error = res.data.msg;
              setTimeout( ()=>{
                this.error = ''
              },1500)
            }
          })
        }
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
    height: 55px;
    .register-container{
      width: 55%;
      margin: 0 auto;
      .top{
        height: 55px;
        overflow: hidden;
      }
      .register-logo{
        background-image: url(https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png);
        width: 54px;
        height: 36px;
        background-position: -669px -739px;
        display: block;
        padding: 10px 0px;
        float: left;
      }
      .desc{
        float: right;
        line-height: 36px;
        padding-top: 10px;
        box-sizing: border-box;
        .login /deep/ .el-button{
          background: #2DB8AA;
          border-color: #2DB8AA;
          margin-left: 5px;
        }
      }
    }
  }
  .form-content{
    width: 55%;
    margin: 0 auto;
    .myform{
      width: 392px;
      margin-top: 30px;
    }
    .myform /deep/ .el-input__inner{
      height: 36px;
      line-height: 36px;
      border-radius: 2px;
    }
    .myform /deep/ .el-form-item__content {
      .status{
        font-size: 12px;
        margin-left: 20px;
        color: #e6a23c;
      }
      .error{
        color: red;
      }
    }
    .myform /deep/ .is-round{
      padding: 3px 40px;
      border-radius: 0px;
      color: #333;
      background-color: #dedede;
      border: 1px solid #e3e3e3;
      border-bottom: 1px solid #aaa;
      background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiP…dpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==);
      background-size: 100%; 
      background-image: linear-gradient(to bottom,#f7f7f7,#dedede);
    }
    .formbtn /deep/ .el-button{
      background: #2DB8AA;
      border-color: #2DB8AA;
    }
    
  }
  
</style>


