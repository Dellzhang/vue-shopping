<template>
  <div class="m-searchbar">
    <el-row :gutter="40">
      <el-col :span="6" class="left" style="padding: 0px">
        <a href="/" class="m-logo">
          <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="">
        </a>
        <span v-if="!isPath" class="txt">美食</span>
        <div v-if="!isPath" class="down" @mouseenter="EnterClick">
          <span>全部分类 <i class="el-icon-arrow-down"></i></span>
          <ul :class="bol ? '' : 'active'" @mouseleave="leaveClick">
            <li v-for="(item,ins) of menu" :key="ins">{{item.name}}</li>
          </ul>
        </div>
      </el-col>
      <el-col :span="14" class="center">
        <div class="wrapper">
          <div class="input-wrapper">
            <input type="text" v-model="inputValue" @blur="SearchInputBlur" @focus="SearchInputFocus"  placeholder="请输入商家或地点" class="input">
            <button class="el-button el-button-primary btn-search" style="background:#13D1BEq "><i class="el-icon-search i-search"></i></button>
          </div>
          <div class="host-search">
            <div class="host-search-top" v-if="isTop">
              <h1 class="host-search-title">热门搜索</h1>
              <div class="a-wrapper">
                <a href="https://www.meituan.com/s/%E9%83%91%E5%B7%9E%E6%B5%B7%E6%B4%8B%E9%A6%86" v-for="(item,index) of hostList" :key="index">{{item}}</a>
              </div>
            </div>
            <div class="host-search-bottom" v-if="isBottom">
              <dl>
                <dd>
                  <nuxt-link to="/search" v-for="(item,index) of searchList" :key="index">{{item}}</nuxt-link>
                </dd>
              </dl>
            </div>
          </div>
          <div class="desc">
            <a href="https://www.meituan.com/s/%E9%83%91%E5%B7%9E%E6%B5%B7%E6%B4%8B%E9%A6%86" v-for="(item,index) of descList" :key="index">{{item}}</a>
          </div>
          <div class="desc-nav" v-if="isPath" >
            <nuxt-link to="/app" class="first waimai-link">美团外卖</nuxt-link>
            <nuxt-link to="/app" class="maoyan-link">猫眼电影</nuxt-link>
            <nuxt-link to="/app" class="meituan-link">美团酒店</nuxt-link>
            <nuxt-link to="/app" class="homestay-link">民宿／公寓</nuxt-link>
            <nuxt-link to="/app" class="merchant-link">商家入驻</nuxt-link>
            <nuxt-link to="/app" class="gongyi-link">美团公益</nuxt-link>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import menu from '../../assets/api/menu.json'
export default {
  data () {
    return {
      isFocus: false,
      inputValue: '',
      hostList: ['郑州市动物园','郑州海洋馆','郑州方特欢乐世界','失恋博物馆','郑州园博园'],
      searchList: ['土大力拌饭名家（王府井店）','汉堡','炸鸡','烤鸭','火锅','火锅','火锅'],
      descList: ['郑州市动物园','郑州海洋馆','郑州方特欢乐世界','失恋博物馆','郑州园博园','郑州方特梦幻王国'],
      menu: menu.menu,
      bol: false
    }
  },
  methods: {
    SearchInputFocus () {
      this.isFocus = true;
    },
    SearchInputBlur () {
      setTimeout( ()=>{
        this.isFocus = false
      },200)
    },
    EnterClick () {
      this.bol = true
    },
    leaveClick () {
       this.bol = false
    }

  },
  computed: {
    isTop () {
      return this.isFocus && !this.inputValue
    },
    isBottom () {
      return this.isFocus && this.inputValue
    },
    isPath(){
      console.log(this.$route.path === '/' || this.$route.path === '/ChangeCity')
      return this.$route.path === '/' || this.$route.path === '/ChangeCity'
    }
  }
}
</script>

<style lang="scss" scoped>
  .m-searchbar{
    background:#fff;
    margin-left: 40px;
    .left{
      display: flex;
      align-items: center;
    }
    .m-logo img{
      width: 126px;
      height: 46px;
    }
    .txt{
      margin-left: 12px;
      color: #222;
      font-size: 16px;
    }
     .down{
      height: 20px;
      margin-left: 20px;
      border: 1px solid #e5e5e5;
      color: #999;
      padding: 3px 2px 3px 4px;
      cursor: pointer;
      border-radius: 4px;
      font-size: 12px;
      display: inline-block;
      position: relative;
      ul{
        list-style: none;
        position: absolute;
        border: 1px solid #e5e5e5;
        top:22px;
        left: 0px;
        background: #fff;
        box-shadow: 0 3px 5px 0 rgba(0,0,0,.1);
        z-index: 40;
        border-bottom-left-radius: 2px;
        border-bottom-right-radius: 2px;
        padding: 15px 40px 12px 10px;
        width: 184px;
        box-sizing: border-box;
        &.active{
          display: none;
        }
        li{
          line-height: 24px;
          &:hover{
            color: #13D1BE;
          }
        }

      }
     }
    .center{
      position: relative;
      .input-wrapper{
      width: 552px;
      position: relative;
      font-size: 14px;
      display: inline-block;
      border: 1px solid #13D1BE;
      border-radius: 4px;
      background-color: #FFF;
      box-sizing: border-box;
      .input{
        background-color: #FFF;
        background-image: none;
        border-radius: 4px;
        box-sizing: border-box;
        color: #606266;
        float: left;
        font-size: inherit;
        height: 40px;
        line-height: 40px;
        outline: 0;
        padding: 0 15px;
        border: none;
        transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        width: 85%;
        &::placeholder{
          color: #c4c4d6;
        }
      }
    }
      .desc a{
        font-size: 12px;
        display: inline-block;
        padding:10px 5px;
        color: #999;
        &:hover{
          color: #41B883;
        }
      }
      .desc-nav{
        margin-top: 16px;
        margin-bottom: 16px;
        a{
          font-size: 16px;
          color: #222;
          font-weight: bold;
          margin: 0px 20px;
          &.first{
            margin-left: 0px;
          }
          &.waimai-link:hover,&.homestay-link:hover{
            color: #FBC700;
          }
          &.maoyan-link:hover, &.meituan-link:hover,&.gongyi-link:hover{
            color: #ED1E24;
          }
          &.merchant-link:hover{
            color: #41B883;
          }
        }
      }
      .host-search{
        width: 64%;
        background:#fff;
        position: absolute;
        z-index: 88;
        // border:1px solid #e5e5e5;
        box-sizing: border-box;
        box-shadow: 0px 3px 5px 0px rgba(0,0,0,.1);
        border-top: none;
        &.hide{
          display: none;
        }
        .host-search-top{
          padding: 5px;
          &.hide{
            display: none;
          }
          box-sizing: border-box;
          .host-search-title{
            font-size: 14px;
            color: #999;
            margin: 6px 5px;
          }
          .a-wrapper{
            margin-bottom: 16px;
            a{
              color: #999;
              padding: 15px 6px;
              &:hover{
              color: #41B883;
              }
            }
          }
        }
        .host-search-bottom{
          width: 100%;
          background:#fff;
          position: absolute;
          box-shadow: 0px 3px 5px 0px rgba(0,0,0,.1);
          z-index: 80;
          top:-3px;
          &.hide{
            display: none;
          }
          dd{
             a{
               color: #333;
               display: block;
               padding: 5px 5px;
               box-sizing: border-box;
               &:hover{
                 background: #f8f8f8;
                 color: #41B883;
               }
             }
           }
        }
      }
    }
  }
  
</style>


