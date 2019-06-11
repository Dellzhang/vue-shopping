<template>
  <div class="detail-bottm">
    <h3>附近商家</h3>
    <div class="imgWrapper">
      <div class="item" v-for="(item,ins) of list" :key="ins">
        <img :src="item.headIcon | cheapCale " alt="">
        <p class="name">{{item.name}}</p>
        <p class="score">
          <span class="fen">{{item.score}}分</span>
          <span>{{item.brandId}}人消费</span>
        </p>
        <p class="price">
          <b class="yuan">￥</b>
          {{item.avgPrice}}
          <b>起</b>
        </p>
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
    let result3 = await  axios.get('/api/meishi/api/poi/getNearPoiList?offset=16&limit=10&cityId=73&lat=34.769813&lng=113.651642')
    if( result3.data.status === 0){
      this.list = result3.data.data
    }
  }
    
}
</script>

<style lang="scss" scoped>
  .detail-bottm{
    margin-top: 40px;
    h3{
      color: #333;
      font-size: 20px;
      line-height: 26px;
      font-weight: 500;
    }
    .imgWrapper{
      padding: 20px 32px 0px 32px;
      overflow: hidden;
      border: 1px solid #e5e5e5;
      .item{
        float: left;
        margin-right: 22px;
        width: 18%;
        box-sizing: border-box;
        margin-bottom: 10px;
        img{
          width: 204px;
          height: 120px;
          border-radius: 4px;
        }
        .name{
          font-size: 16px;
          line-height: 22px;
          color: #222;
          white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
        }
        .score{
          color: #999;
          font-size: 12px;
          .fen{
            margin-right: 20px;
          }
        }
        .price{
          margin-top: 25px;
          color:#f60;
          font-size: 20px;
          b{
            font-size: 14px;
            position: relative;
            left: -4px;
            &.yuan{
              left: 5px;
            }
          }
        }
      }
    }
  }
</style>