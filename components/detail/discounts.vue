<template>
  <div>
    <div class="content" v-show="user">
      <h4>{{list.length}}张代金券</h4>
      <div class="item" v-for="(item,inx) of list" :key="inx">
        <div class="prive">
          <span class="top">{{item.price}}元</span>
          <p>
            <span>代</span>
            <span>{{item.old_price}}</span>
            <span>元代金券</span>
          </p>
        </div>
        <div class="desc">
          <p class="title">
            <span>{{item.price}}元代</span>
            <span>{{item.old_price}}</span>
            <span>元代金券</span>
          </p>
          <p class="num">已售{{item.num}}</p>
        </div>
        <a href="#">立即抢购</a>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      user:'',
      list: [
        {
          price: 39,
          num: 918,
          old_price: 50
        },
        {
          price: 85,
          num: 37678,
          old_price: 100
        }
      ]
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
  .content{
    padding: 20px;
    background: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    margin-top: 40px;
    h4{
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 15px;
      color: #222;
      font-weight: bold;
    }
    .item{
      display: flex;
      position: relative;
      margin-bottom: 20px;
      .prive{
        width: 140px;
        height: 89px;
        background-image: url(https://s0.meituan.net/bs/file/?f=meis/meishi.web:assets/74f33f3125908576.png@331a8a1);
        background-size: 100% 100%;
        text-align: center;
        padding: 10px 0px 10px 10px;
        margin-right: 10px;
        .top{
          display: block;
          font-size: 30px;
          color: #f60;
          border-bottom: 1px dashed #ccc;
          line-height: 36px;
          margin-bottom: 15px;
          padding-bottom: 8px;
        }
      }
      .desc{
        p{
          &.title{
            font-size: 16px;
            line-height: 22px;
          }
          &.num{
            font-size: 12px;
            line-height: 16px;
          }
        }
      }
      a{
        width: 120px;
        height: 40px;
        background: #f90;
        color: #fff;
        position: absolute;
        right: 0px;
        top: 40px;
        border-radius: 100px;
        line-height: 40px;
        text-align: center;
        font-size: 14px;
      }
    }
  }
</style>
