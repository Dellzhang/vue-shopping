<template>
  <div class="info">
    <div class="left">
      <el-row>
        <el-col :span="24">
          <h1>{{detail.name}}</h1>
          <div class="title">
            <i class="el-icon-star-on" :class=" Math.floor(detail.score) > inx ? 'icon-active': 'icon'" v-for="(icon,inx) of 5"  :key="inx"></i>
            <span>{{detail.score + '分'}}</span>
            <span>{{'人均￥'+detail.avgPrice}}</span>
          </div>
        </el-col>
        <el-col :span="24" class="desc">
          <p>
            <span>地址：</span>
            <span class="add">{{detail.address}}</span>
            <i class="el-icon-location loca" @click="shopMap"></i>
          </p>
          <p>
            <span>电话：</span>
            <span>{{detail.phone}}</span>
          </p>
          <p>
            <span>营业时间：</span>
            <span>{{detail.openTime}}</span>
          </p>
        </el-col>
        <el-col :span="24" class="iconWrapper">
          <div class="wifi">
            <i class="iconfont icon">&#xe634;</i>
            <p>提供wifi</p>
          </div>
          <div class="wifi">
              <i class="iconfont icon">&#xe664;</i>
            <p>停车位</p>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="right">
      <div class="imgWrapper">
        <img src=" https://img.meituan.net/msmerchant/f4021839c7e4f7e133e924adc6ca9e82209216.jpg" alt="">
      </div>
    </div>
    <div :class="bol? 'amap-wrapper' : 'amap-wrapper active' ">
      <div class="bg">
        <div class="close">
          <i class="el-icon-close icon-close" @click="closeClick"></i>
        </div>
        <baidu-map class="map" :scroll-wheel-zoom="true"  ak='64477a996d04fe75cc3252d164f86824' :center="center" :zoom="zoom">
          <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
          <bm-info-window :position="{lng: 113.665422, lat: 34.751291}" title="土大力拌饭名家（王府井店）" :show="infoWindow.show" @close="infoWindowClose" @open="infoWindowOpen">
            <p v-text="detail.address" class="p"></p>
          </bm-info-window>
        </baidu-map>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import BaiduMap from 'vue-baidu-map/components/Map/Map.vue'
import BmLabel from 'vue-baidu-map/components/overlays/Label.vue'
import BmNavigation from 'vue-baidu-map/components/controls/Navigation.vue'
import BmInfoWindow from 'vue-baidu-map/components/overlays/InfoWindow.vue'
export default {
  data () {
    return {
      detail: {},
      zoom: 16,
      center: {lng: 113.665422, lat: 34.751291},  //经纬度
      infoWindow: {
        show: true
      },
      bol: false
    }
  },
  components: {
    BaiduMap,
    BmLabel,
    BmNavigation,
    BmInfoWindow
  },
  methods: {
    infoWindowClose (e) {
      this.infoWindow.show = false
    },
    infoWindowOpen (e) {
      this.infoWindow.show = true
    },
    shopMap () {
      this.bol = true
    },
    closeClick () {
      this.bol = false
    }
  },
  async mounted (){
    let result1 = await  axios.get('/api/meishi/api/poi/getNearPoiList?offset=0&limit=1&cityId=73&lat=34.769813&lng=113.651642')
    this.detail = result1.data.data[0]
    console.log(this.detail)
  }
}
</script>

<style lang="scss" scoped>
  .info{
    display: flex;
    background: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    box-shadow: 0 5px 14px 0 rgba(0,0,0,.1);
    padding: 15px;
    .left{
      width: 70%;
      h1{
        font-size: 26px;
        line-height: 37px;
        margin-bottom: 5px;
      }
      span{
        color: #666;
      }
      .title{
        padding-bottom: 15px;
        .icon{
          color: #e3e3e3
        }
        .icon-active{
          color: #F90
        }
      }
      .desc{
        padding: 10px 0px;
        p{
          margin-top: 5px;
          color: #666;
          padding: 5px 0px;
          margin: 0px;
          font-size: 14px;
          .add{
            cursor: pointer;
            &:hover{
              color: #00c9b3;
            }
          }
          .loca{
            color: #00c9b3;
            font-size: 16px;
            margin-left: 5px;
            cursor: pointer;
          }
        }
      }
      .iconWrapper{
        display: flex;
        .wifi{
          margin: 18px 15px 0;
          text-align: center;
          color: #666;
          font-size: 12px;
          .icon{
            font-size: 30px !important;
          }
        }
      }
    }
    .right{
      .imgWrapper{
        width: 380px;
        height: 214px;
      }
      img{
        width: 100%;
        height: 100%;
      }
    }
    .amap-wrapper{
      &.active{
        display: none;
      }
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(0,0,0,.2);
      .bg{
        position: fixed;
        top: 100px;
        left: 30%;
        background: #222;
        border-radius: 4px;
        padding: 5px;
        .close{
          height: 40px;
          line-height: 40px;
          text-align: right;
          .icon-close{
            color: #fff;
            font-size: 24px;
            margin-right: 10px;
            cursor: pointer;
          }
        }
      }
      .map{
        width: 790px;
        height: 500px;
        .p{
          color: #999;
          font-size: 12px;
          margin-top: -5px;
        }
      }
    }
    .left /deep/ .el-col{
      border-bottom: 1px solid #e5e5e5;
    }
    .left /deep/ .iconWrapper{
      border: none;
      margin-bottom: 20px;
    }
    
  }
</style>