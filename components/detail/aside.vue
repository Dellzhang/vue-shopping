<template>
  <div class="detail-aside">
    <div class="list">
      <h4>猜你喜欢</h4>
      <div class="item" v-for="(itm,inx) of list" :key="inx">
        <img :src="itm.headIcon | cheapCale " alt="">
        <p class="txt">{{itm.name}}</p>
        <p class="desc">{{itm.address.substring(0,3)}}</p>
        <p class="price"><b>￥</b>{{itm.avgPrice}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import cheapCale from '../../assets/api/cheapCale'
export default {
  data () {
    return {
      list: []
    }
  },
  async mounted () {
    let result3 = await  axios.get('/api/meishi/api/poi/getNearPoiList?offset=1&limit=14&cityId=73&lat=34.769813&lng=113.651642')
    if( result3.data.status === 0){
      this.list = result3.data.data
    }
  }
}
</script>

<style lang="scss" scoped>
  .detail-aside{
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    background-color: #fff;
    padding: 16px 20px 0;
    margin-top: 73px;
    margin-left: 10px;
    height: 2976px;
    h4{
      font-size: 16px;
      color: #333;
      line-height: 20px;
    }
    .item{
      margin-bottom: 20px;
      img{
        width: 188px;
        height: 106px;
      }
      p{
        &.desc{
          font-size: 12px;
          color: #999;
          line-height: 17px;
        }
        &.price{
          font-size: 20px;
          color: #f60;
          line-height: 26px;
          b{
            font-size: 14px;
          }
        }
        &.txt{
          width: 188px;
        }
      }
    }
  }
</style>