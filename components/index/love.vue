<template>
  <div class="m-artistic">
    <dl class="m-artistic-dl">
      <dt>猜你喜欢</dt>
      <dd class="active">为你甄选最合适的</dd>
    </dl>
    <div class="m-artistic-particulars" >
      <ul class="list">
        <li v-for="(itm,index) of Recommend " :key="index">
          <el-card>
            <div class="imgWrapper">
              <img :src="itm.imgUrl | recommCale" alt="" />
            </div>
            <ul>
              <li class="title">{{itm.title}}</li>
              <li class="desc">{{itm.areaName}}</li>
              <li>
                <i class="el-icon-star-on" :class=" Math.floor(itm.score) > index ? 'icon-active': 'icon'" v-for="(icon,index) of 5" :key="index"></i>
                <span class="pin">{{itm.commentNum}}个评价</span>
              </li>
              <li class="price">
                <span class="price-symbol">￥</span>
                <span>
                  {{itm.avgPrice}}
                </span>
                <small class="small">起</small>
                <span class="right">{{itm.bottomInfo}}</span>
              </li>
            </ul>
          </el-card>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import recommCale from '@/assets/api/recommCale'
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      kind:'all',
    }
  },
  computed: {
    ...mapState(['Recommend'])
  },
}
</script>

<style lang="scss" scoped>
  .m-artistic{
    margin-top: 40px;
    .m-artistic-dl{
      background: linear-gradient(to right, rgb(18, 210, 198) 2%, rgb(14, 190, 212) 97%) rgb(18, 210, 198);
      overflow: hidden;
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
      dd{
        float: left;
        width: 115px;
        height: 44px;
        line-height: 44px;
        text-align: center;
        color: #fff;
        font-size: 14px;
        padding: 0 5px;
        position: relative;
        cursor: pointer;
        &:after{
          position: absolute;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-bottom: 7px solid #fff;
          content: " ";
          display: block;
          width: 2px;
          height: 0;
          top: 37px;
          left: 0;
          right: 0;
          margin: auto;
          display: none;
        }
        &.active::after{
          display: block
        }
      }
      dt{
        float: left;
        width: 73px;
        height: 44px;
        font-size: 18px;
        margin-left: 10px;
        margin-right: 5px;
        text-align: center;
        color: #fff;
        padding: 0 5px;
        line-height: 44px;
      }
    }
    .m-artistic-particulars{
      box-sizing: border-box;
      border-left: 1px solid #e5e5e5;
      border-right: 1px solid #e5e5e5;
      border-bottom: 1px solid #e5e5e5;
      padding: 11px 0px 10px;
      background-color: #fff;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    } 
    .m-artistic-particulars ul{
      list-style: none;
    }
    
    .m-artistic-particulars > ul{
      display: flex;
      flex-wrap: wrap;
      
    }
    .list >li{
      cursor: pointer;
      background: #fff;
      transition: background-color 0.5s;
      width: 19.5%;
      &:hover{
        background: #f4f4f4;
      }
      
    }
    .list > li:nth-child(1){
      margin-left: 12px;
    }
    .list > li:nth-child(6){
      margin-left: 12px;
    }
    .list > li:nth-child(11){
      margin-left: 12px;
    }
    .m-artistic-particulars /deep/ .el-card__body{
      padding: 10px;
    }
    .m-artistic-particulars /deep/ .el-card{
      border: none;
      background: none;
      li{
        padding: 4px 0px;
        width: 100%;
        box-sizing: border-box;
        padding-right: 5px;
        margin-bottom: 5px;
        &.title{
          font-size: 16px;
          color: #222;
          font-weight: 500;
          height: 22px;
          line-height: 22px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        &.desc{
          font-size: 12px;
          color: #999;
          height: 18px;
          line-height: 18px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .icon-active{
          color: #FF9900;
        }
        .icon{
          color: #C3C3C3;
        }
      }
      img{
        border-radius: 4px;
        width: 214px;
        height: 120px;
      }
    }
    .m-artistic-particulars /deep/ .is-always-shadow{
      box-shadow: none;
    }
    .list{
      .price{
        font-size: 20px;
        color: #BE9E4D;
        margin-right: 6px;
        cursor: pointer;
      }
      .price-symbol{
        font-size: 14px;
        color: #BE9E4D;
        font-weight: 500;
        margin-right: -8px;
      }
      .pin{
        font-size: 12px;
        color: #999;
        margin-left: 5px;
      }
    }

  }
  
</style>