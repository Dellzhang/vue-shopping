<template>
  <div class="m-gou">
    <el-row class="title">
      <el-col :span="11" class="detail">项目</el-col>
      <el-col :span="4">单价</el-col>
      <el-col :span="5">数量</el-col>
      <el-col :span="4">总价</el-col>
    </el-row>
    <el-row class="desc">
      <el-col :span="11" class="detail">{{data.title + '：' +data.name}}</el-col>
      <el-col :span="4">￥{{data.price}}</el-col>
      <el-col :span="5" class="iconWrapper">
        <div class="cont">
          <button :class="val === 1? 'dast' : ''" @click="jainClick">
            <i class="el-icon-minus"></i>
          </button>
          <span>{{val}}</span>
          <button @click = 'addClick'>
            <i class="el-icon-plus"></i>
          </button>
        </div>
      </el-col>
      <el-col :span="4" class="num">￥{{val*data.price}}</el-col>
    </el-row>
    <div class="he">
      <div class="sum">
        <span class="txt">应付金额：</span>
        <span>
          <b>￥</b>
         {{val*data.price}}
        </span>
      </div>
    </div>
    <el-row class="emai">
      <el-col :span="24" class="detail">将发送美团券密码至邮箱：{{email}}</el-col>
    </el-row>
    <div class="ti">
      <button>提交订单</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      val: '',
      email: '',
      data: {}
    }
  },
  methods: {
    addClick () {
      ++this.val;
    },
    jainClick () {
      if( this.val === 1){
        return 
      }
      --this.val
    }
  },
  mounted() {
    // 获取用户名
    axios.get('/user/getUser').then( ({status,data})=>{
      if(status === 200){
        this.email = data.email;
      }
    })
  // 获取数据
  axios.get(`/gou/getshop/${this.$route.path.split('/')[2]}`).then( (res)=>{
    if(res.status === 200 && res.data.error === 0){
      console.log(res.data.data)
      this.data = res.data.data
      this.val = res.data.data.count
    }
  }).catch( (err)=>{})

  }
}
</script>

<style lang="scss" scoped>
  .m-gou{
    margin-left: 30px;
    margin-top: 15px;
    .iconWrapper{
      .cont{
        width: 48%;
        margin: 0 auto;
        border: 1px solid #e5e5e5;
        display: flex;
        button{
          height: 34px;
          width: 34px;
          outline: none;
          border: none;
          background: #fff;
          cursor: pointer;
          color: #666;
          font-size: 20px;
          transition: color 0.5s;
          &.dast{
            color: #e2e2e2;
          }
        }
        span{
          display: block;
          height: 34px;
          width: 34px;
          border: 1px solid #e5e5e5;
          color: #222;
          border-bottom: none;
          border-top: none;
          text-align: center;
          line-height: 34px;
        }
      }
    }
    .he{
        width: 90%;
        overflow: hidden;
        margin-top: 20px;
        border-top: 1px solid #e5e5e5;
        border-bottom: 1px solid #e5e5e5;
        .sum{
          float: right;
          margin-right: 68px;
          font-size: 12px;
          color: #666;
          padding: 12px 0px;
          line-height: 28px;
          span{
            &.txt{
              font-size: 12px;
              color: #666;
              position: relative;
              font-weight: bold;
              left: 11px;
            }
            font-size: 20px;
            color: #f76120;
            b{
              position: relative;
              left: 10px;
            }
         }
       }
    }
    .ti{
      overflow: hidden;
      width: 90%;
      padding-bottom: 60px;
      border-bottom: 1px solid #e5e5e5;
      button{
        float: right;
        margin-right: 50px;
        padding: 5px 20px 4px;
        background-color: #2db3a6;
        background-image: linear-gradient(to bottom,#2ec3b4,#2db3a6);
        border: 1px solid #008177;
        border-radius: 2px;
        color: #fff;
        font-size: 20px;
        cursor: pointer;
      }
    }
  }
  .m-gou /deep/ .title{
    background: #f7f7f7;
    padding: 6px;
    color: #000;
    font-weight: 700;
  }
  .m-gou /deep/ .desc{
    padding: 16px 6px;
    color: #666;
    border-bottom: 1px solid #E5e5e5;
    line-height: 38px;
    font-size: 15px;
  }
  .m-gou /deep/ .emai{
    padding: 12px 0px;
    font-size: 12px;
  }
  .m-gou /deep/ .el-row{
    width: 90%;
  }
  .m-gou /deep/ .el-col{
    text-align: center;
    &.detail{
      text-align: left;
    }
    &.num{
      color: #f76120;
    }
  }
</style>