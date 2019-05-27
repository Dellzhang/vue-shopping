<template>
  <div class="m-slide">
    <el-row>
      <el-col :span="14">
        <div class="block">
          <el-carousel height="240px;width:550px">
            <el-carousel-item v-for="(item,index) of imgList" :key="index">
             <img :src="item" alt="" class="slide-img">
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
      <el-col :span="4" class="ktv">
        <div class="ktv-img-wrapper">
          <img src="http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg" alt="" class="ktv-img">
        </div>
      </el-col>
      <el-col :span="4">
        <div class="login-cotainer">
          <div class="default">
            <div class="userlogo">
              <img src="http://s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg" alt="">
            </div>
            <template v-if="!user">
              <p>Hi! 你好</p>
              <nuxt-link to="/login" class="login">登录</nuxt-link>
              <nuxt-link to="/register" class="login">注册</nuxt-link>
            </template>
            <h3>{{user}}</h3>
          </div>
        </div>
      </el-col>
    </el-row>
    <index-life></index-life>
  </div>
</template>

<script>
import IndexLife from './life'
import axios from 'axios'
export default {
  components: {
    IndexLife
  },
  data () {
    return {
      imgList:['http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg','http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg','http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg'],
      user: ''
    }
  },
  mounted () {
    axios.get('/user/getUser').then( ({status,data})=>{
      if(status === 200){
        this.user = data.username;
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  .m-slide{
    margin: 10px 0px;
    .block{
      overflow: hidden;
    }
    .block /deep/ .el-carousel{
      width: 550px;
      height: 240px;
      overflow: hidden;
    }
    .block /deep/ .slide-img{
      width: 550px;
      height: 240px;
      cursor: pointer;
    }
    .block /deep/ .el-carousel__arrow{
      background: #585756;
    }
    .ktv{
      margin-right: 10px;
      .ktv-img-wrapper{
        display: inline-block;
        margin: 0px 10px;
        .ktv-img{
          width: 150px;
          height: 240px;
          cursor: pointer;
        }   
      }
    }
    .login-cotainer{
      width: 230px;
      height: 240px;
      box-sizing: border-box;
      border: 1px solid #e5e5e5;
      background: #fff;
      .default{
        padding-top: 30px;
        .userlogo{
          text-align: center;
          img{
            width: 47px;
            height: 47px;
            border-radius: 50%;
            border: 4px solid #E5E5E5;
          }
        }
        p{
          text-align: center;
          color: #222;
          font-size: 16px;
          font-weight: 500;
        }
        .login{
          width: 118px;
          color: #333;
          font-size: 14px;
          background: #fff;
          border: 1px solid #e5e5e5;
          display: block;
          text-align: center;
          margin: 10px auto 15px;
          line-height: 38px;
          border-radius: 40px;
          transition: background-color 0.5s;
          &:hover{
            background: #F6F6F6;

          }
        }
        h3{
          text-align: center;
        }
      }
    }
    
  }
</style>


