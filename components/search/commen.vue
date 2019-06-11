<template>
  <div class="m-commen">
    <div class="sort-option">
      <div class="tag-group-sort">
        <span :class=" index ===ins  ? 'active' : ''" v-for="(item,index) of sort" :key="index" @click="spanClick(index)">
          {{item}}
          <i v-if=" index === 2" class="el-icon-d-caret"></i>
        </span>
      </div>
      <div class="common-list-main">
        <div class="content">
          <img src="https://img.meituan.net/msmerchant/f4021839c7e4f7e133e924adc6ca9e82209216.jpg" alt="">
          <div class="right">
            <div class="desc">
              <a href="/meishi/4500050">土大力拌饭名家（王府井店）</a>
              <p class="pin">
                <i v-for="(item,ins) of 5" :key="ins" class="el-icon-star-on"></i>
                <span>很好</span>
                <span>5分</span>
                <span class="sort">12065评论</span>
              </p>
              <p class="adr">
                <span>韩国菜|锦艺城</span>
                <span>中原区棉纺西路4号王府井百货负一楼</span>
                <span class="local" @click="shopMap">
                  <i class="el-icon-location loca"></i>
                  查看地图
                </span>
              </p>
              <p class="adr di">人均51</p>
            </div>
            <div class="common-deal-container">
              <div class="deal-wrapper">
                <div class="deal-item" v-for="(item,ins) of newList" :key="ins">
                  <p class="deal-title">{{item.title}}</p>
                  <p class="deal-price">
                    <span class="price">{{'￥'+ item. now_price}}</span>
                    <span>{{'门市价￥'+ item.old_price}}</span>
                    <span>{{'已售'+ item.num}}</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="iconWrapper" @click="showClick">
              <span>更多5个优惠<i :class="num === 2 ? 'el-icon-arrow-down' : 'el-icon-arrow-up'  "></i></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page">
      <a href="#">1</a>
    </div>
    <div :class="bol? 'amap-wrapper' : 'amap-wrapper active' ">
      <div class="bg">
        <div class="close">
          <i class="el-icon-close icon-close" @click="closeClick"></i>
        </div>
        <baidu-map class="map" :scroll-wheel-zoom="true"  ak='64477a996d04fe75cc3252d164f86824' :center="center" :zoom="zoom">
          <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
          <bm-info-window :position="{lng: 113.665422, lat: 34.751291}" title="土大力拌饭名家（王府井店）" :show="infoWindow.show" @close="infoWindowClose" @open="infoWindowOpen">
            <p class="p">中原区棉纺西路4号王府井百货负一楼</p>
          </bm-info-window>
        </baidu-map>
      </div>
    </div>
  </div>
</template>

<script>
import BaiduMap from 'vue-baidu-map/components/Map/Map.vue'
import BmLabel from 'vue-baidu-map/components/overlays/Label.vue'
import BmNavigation from 'vue-baidu-map/components/controls/Navigation.vue'
import BmInfoWindow from 'vue-baidu-map/components/overlays/InfoWindow.vue'
import {mapState} from 'vuex'
export default {
  data () {
    return {
      ins: 0,
      num: 2,
      zoom: 16,
      center: {lng: 113.665422, lat: 34.751291},  //经纬度
      infoWindow: {
        show: true
      },
      sort: ['智能排序','价格排序','人气最高','评价最高'],
      list: [
        {
          shop: '土大力拌饭名家',
          dealid: 55293950,
          imgurl: 'http://p0.meituan.net/208.126/deal/0403a20196c4d7c300b16f694463d8ee72456.jpg@100w_100h_1e_1c',
          title: '100元代金券1张，可叠加',
          num: 40703,
          now_price: 85,
          old_price: 100
        },
        {
          shop: '土大力拌饭名家',
          dealid: 55293950,
          imgurl: 'http://p0.meituan.net/208.126/deal/0403a20196c4d7c300b16f694463d8ee72456.jpg@100w_100h_1e_1c',
          title: '双人火锅套餐，提供免费WiFi',
          num: 299,
          now_price: 178,
          old_price: 212
        },
        {
          shop:'土大力拌饭名家',
          dealid: 55293757,
          imgurl: 'http://p0.meituan.net/208.126/deal/63a4cea537ed44a8746a9a35694848c971675.jpg@100w_100h_1e_1c',
          title: '双人餐B，提供免费WiFi',
          num: 5640,
          now_price: 128,
          old_price: 161
        },
        {
          shop: '土大力拌饭名家',
          dealid: 55293950,
          imgurl: 'http://p0.meituan.net/208.126/deal/0403a20196c4d7c300b16f694463d8ee72456.jpg@100w_100h_1e_1c',
          title: '50元代金券1张，全场通用',
          num: 1199,
          now_price: 39,
          old_price: 50
        },
        {
          shop:'土大力拌饭名家',
          dealid: 55293299,
          imgurl: 'http://p1.meituan.net/208.126/deal/279ccbe7eaf6381ecc223ae9c1131d81417726.png@100w_100h_1e_1c',
          title: '双人餐A，提供免费WiFi',
          num: 3305,
          now_price: 128,
          old_price: 156
        },
        {
          shop:'土大力拌饭名家',
          dealid: 55293808,
          imgurl: 'http://p0.meituan.net/208.126/deal/2b793e5966c98c00d1942a6354f9c15f72848.jpg@100w_100h_1e_1c',
          title: '双人餐C，提供免费WiFi',
          num: 3305,
          now_price: 148,
          old_price: 182
        },
        {
          shop:'土大力拌饭名家',
          dealid: 55293877,
          imgurl: 'http://p0.meituan.net/208.126/deal/ae728288d1e4d8225c9e7a9c842e408b73764.jpg@100w_100h_1e_1c',
          title: '双人餐D，提供免费WiFi',
          num: 207,
          now_price: 168,
          old_price: 200
        }
      ]
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
      this.$store.commit('showMap',true)
    },
    closeClick () {
      this.$store.commit('closeMap',false)
    },
    // 下拉
    showClick () {
      if(this.num === 2){
        this.num = 7;
      }else{
        this.num = 2
      }
    },
    spanClick(index){
      this.ins = index
    }
  },
  computed: {
    newList () {
      return this.list.slice(0,this.num)
    },
    ...mapState(['bol'])
  }
}
</script>

<style lang="scss" scoped>
  .m-commen{
    margin-top: 30px;
    .sort-option{
      border: 1px solid #e5e5e5;
      .tag-group-sort{
        display: flex;
        padding: 15px 20px 0px 20px;
        width: 70%;
        span{
          display: block;
          padding: 0 10px;
          font-weight: 400;
          color: #666;
          cursor: pointer;
          &.active{
            color: #31BBAC;
          }
        }
      }
      .common-list-main{
        padding: 11px 20px;
        .content{
          border-top:  1px solid #e5e5e5;
          display: flex;
          padding: 18px 0px;
          img{
            width: 220px;
            height: 125px;
          }
          .right{
            flex: 1;
            .desc{
              border-bottom: 1px dashed #E5E5E5;
              a{
                font-weight: 500;
                font-size: 16px;
                color: #333;
              }
              .pin{
                margin-top: 6px;
                font-size: 12px;
                color: #666;
                i{
                  color: #F90;
                }
                .sort{
                  color: #F90;
                }
                span{
                  margin-right: 10px;
                }
              }
              .adr{
                margin-top: 6px;
                font-size: 12px;
                color: #666;
                &.di{
                  margin-bottom: 8px;
                }
                span{
                  margin-right: 10px;
                  &.local{
                    cursor: pointer;
                    color:#31BBAC;
                  }
                }
              }
            }
          }
          .common-deal-container{
            margin-top: 10px;
            .deal-wrapper{
              .deal-item{
                border-radius: 4px;
                padding: 5px 0px 5px 8px;
                cursor: pointer;
                &:hover{
                  background: #f8f8f8;
                  .deal-title{
                    color: #31BBAC;
                  }
                }
                font-size: 12px;
                color: #666;
                .deal-title{
                  height: 20px;
                  line-height: 20px;
                  font-size: 14px;
                }
                .deal-price{
                  margin-top: 2px;
                  font-size: 12px;
                  color: #999;
                  span{
                    margin-right: 10px;
                    &.price{
                      color: #f60;
                      font-size: 15px;
                    }
                  }
                }
              }
            }
          }
          .iconWrapper{
            margin-top: 5px;
            font-size: 12px;
            color: #666;
            padding-left: 8px;
            cursor: pointer;
            &:hover{
              color: #31BBAC;
            }
          }
        }
      }
    }
    .page{
      text-align: center;
      margin-top: 40px;
      a{
        display: inline-block;
        width: 40px;
        height: 40px;
        color: #fff;
        background: #31BBAC;
        border-radius: 50%;
        line-height: 40px;
        text-align: center;
        font-size: 16px;
      }
    }
    .amap-wrapper{
      &.active{
        display: none;
      }
      z-index: 30;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: rgba(8,8,8,.8);
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
        width: 1000px;
        height: 700px;
        .p{
          color: #999;
          font-size: 12px;
          margin-top: -5px;
        }
      }
    }
  }
</style>