<template>
  <div class="content">
    <div class="shop">
        <div class="shop-title">
          <h3>商家团购及优惠</h3>
        </div>
        <div class="content" v-if="user">
          <h4>5款堂食套餐</h4>
          <div v-for="(item,inx) of list" :key="inx" :class=" inx === list.length-1 ? 'item bom' : 'item'">
            <img :src="item.imgurl" alt="" @click="changeClick(inx)">
            <div class="item-price">
              <p @click="changeClick(inx)">
                {{item.title}}
                <img src="http://p1.meituan.net/codeman/31eac2c905f5be14ce80654d9508e720832.png" class="icon">
              </p>
              <p class="sale" @click="changeClick(inx)">已售{{item.num}}</p>
              <p class="price">
                <b>￥</b>
                <span @click="changeClick(inx)" class="now_price">{{item.now_price}}</span>
                <span @click="changeClick(inx)" class="old_price">门店价￥{{item.old_price}}</span>
              </p>
            </div>
            <a  @click.prevent="cunClick(item.title,item.now_price,item.dealid,item.shop)">立即抢购</a>
          </div>
        </div>
        <div v-else class="userWrapper">
          <img src="//p0.meituan.net/codeman/56a7d5abcb5ce3d90fc91195e5b5856911194.png" alt="">
          <span>请登录后查看详细团购优惠</span>
          <a href="/login">立即登录</a>
        </div>
      </div>
      <div class="tbg" v-if="bol"></div>
      <div class="detail" v-if="bol">
        <div class="cent">
          <div class="close" @click="closeClick"></div>
          <div class="total">
            <img :src="shop.data.imgUrl | cheapCale" alt="">
            <div class="desc">
              <p class="desc-title">{{shop.data.title}}</p>
              <p class="desc-price">
                <b>￥</b>
                {{shop.data.price}}
                <span>门市价{{shop.data.value}}</span>
              </p>
              <p class="btnWrapper">
                <a href="#">立即抢购</a>
                <a href="#" class="actv">查看详情</a>
              </p>
            </div>
          </div>
          <div class="cent-list">
            <h4>本单详情</h4>
            <div class="container">
              <div class="container-top">
                <span class="tao">套餐内容</span>
                <div class="tbody">
                  <span>单价</span>
                  <span>数量/规格</span>
                  <span>小计</span>
                </div>
              </div>
              <div class="container-center">
                <span class="all">全部</span>
                <div class="fr">
                  <p  v-for="(item,index) of shop.data.menu[0]" :key="index">
                    <span>{{item.content}}</span>
                    <span>{{ '￥'+item.price}}</span>
                    <span>{{item.specification}}</span>
                    <span>{{ '￥'+ item.total}}</span>
                  </p>
                </div>
              </div>
              <div class="ji">
                <span>美团价：<b>{{ '￥'+shop.data.price}}</b></span>
                <span>{{ '价值：' + '￥' + shop.data.value}}</span>
              </div>
            </div>
            <p class="remarks">{{'.'+ shop.data.desc.content}}</p>
            <p class="gou">购买须知</p>
            <div class="xu">
              <p v-for="(itm,ins) of shop.data.terms" :key="ins">
                <span class="title">{{itm.title}}</span>
                <span>{{itm.content[0]}}</span>
              </p>
            </div>
            <p class="pai">美图实拍</p>
            <div class="imgCont">
              <img :src="item | cheapCale" v-for="(item,ins) of shop.data.recommend" :key="ins" alt="">
            </div>
            <div class="aWrapper">
              <a href="#">查看{{shop.data.title}} 全部详情</a>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import $ from 'jquery'
import axios from 'axios'
import shop from '../../assets/api/detailApi/first.json'
import  two from '../../assets/api/detailApi/two.json'
import  three from '../../assets/api/detailApi/three.json'
import  four from '../../assets/api/detailApi/four.json'
import  five from '../../assets/api/detailApi/five.json'
import cheapCale from '../../assets/api/cheapCale'
export default {
  data () {
    return {
      shop:  shop,
      bol: false,
      user: '',
      list: [
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
  methods: {
    changeClick (ins) {
      switch(ins){
        case 0:
          this.shop = shop;
          break;
        case 1:
          this.shop = two;
          break;
        case 2:
          this.shop = three;
          break;
        case 3:
          this.shop = four;
          break;
        default :
          this.shop = five;

      }
      this.bol = true;
      var top = $(document).scrollTop();
        $(document).on('scroll.unable',function (e) {
          $(document).scrollTop(top);
      })
    },
    closeClick () {
      this.bol = false;
      $(document).unbind("scroll.unable");
    },
    async cunClick (val,price,dealid,title) {
      let res = await  axios.post('/gou/shop',{ 
        name:val,
        price,
        user: this.user,
        dealid,
        title,
      }) 
     if( res.status === 200 && res.data.error ===0){
       location.href= '/gou/' + dealid
     }
    }
  },
  mounted (){
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
    .shop{
      background: #fff;
      margin-top: 40px;
      .shop-title{
        margin-bottom: 8px;
        h3{
          font-size: 16px;
          color: #222;
          font-weight: 700;
          font-size: 20px;
        }
      }
      .content{
        padding: 15px;
        border: 1px solid #e5e5e5;
        border-radius: 4px;
        position: relative;
        h4{
          color: #222;
          font-size: 16px;
          line-height: 26px;
          font-weight: bold;
        }
        .item{
          display: flex;
          border-bottom: 1px solid #e5e5e5;
          padding: 20px 0px;
          position: relative;
          &.bom{
            border: none;
          }
          img{
            border-radius: 4px;
            margin-right: 20px;
          }
          .item-price{
            img{
              width: 16px;
              height: 16px;
              position: relative;
              top: 2px;
              left: 10px;
            }
            p{
              font-size: 16px;
              line-height: 20px;
              cursor: pointer;
              &.sale{
                font-size: 12px;
                color: #666;
              }
              &.price{
                margin-top: 32px;
                b{
                  font-size: 14px;
                  color: #f60;
                  margin-right: -5px;
                }
                span{
                  &.now_price{
                    font-size: 30px;
                    color: #f60;
                  }
                  &.old_price{
                    color: #999;
                    font-size: 12px;
                    margin-left: 8px;
                  }
                }
              }
            }
          }
          a{
            width: 120px;
            height: 40px;
            background: #f90;
            color: #fff;
            position: absolute;
            right: 20px;
            top: 50px;
            border-radius: 100px;
            line-height: 40px;
            text-align: center;
            font-size: 14px;
            cursor: pointer;
          }
        }
      }
      .userWrapper{
        text-align: center;
        border: 1px solid #E5E5E5;
        padding-bottom: 25px;
        img{
          width: 160px;
          height: 120px;
        }
        span{
          display: block;
          color: #666;
          font-size: 16px;
          line-height: 26px;
          margin: 10px 0 14px;
        }
        a{
          display: block;
          width: 120px;
          height: 40px;
          background: #13D1BE;
          color: #fff;
          border-radius: 100px;
          line-height: 40px;
          text-align: center;
          font-size: 14px;
          margin: 0 auto;
        }
      }
    }
    .tbg{
      position: fixed;
      background: rgba(0,0,0,.2);
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 2
    }
    .detail{
      width: 100%;
      overflow: hidden;
      background: rgba(0,0,0,0);
      position: fixed;
      z-index: 50;
      top: 0px;
      margin-top: 80px;
      .cent{
        background: #fff;
        border: 1px solid #e5e5e5;
        overflow-y: scroll;
        // height: 840px;
        height: 500px;
        overflow: scroll;
        width: 61%;
        margin-left: 100px;
        padding: 0px 50px;
        box-sizing: border-box;
        border-radius: 10px;
        color: #666;
        position: relative;
        .close{
          background-image: url(https://s0.meituan.net/bs/file/?f=meis/meishi.web:assets/23e53a0f610d8f35.png@331a8a1);
          background-size: 100% 100%;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          position: absolute;
          right: 20px;
          top: 30px;
          cursor: pointer;

        }
        .total{
          padding-top: 60px;
          display: flex;
          img{
            width: 150px;
            height: 150px;
          }
          .desc{
            flex: 1;
            margin-left: 30px;
            .desc-title{
              font-size: 26px;
              line-height: 37px;
              color: #222;
            }
            .desc-price{
              font-size: 24px;
              color: #31bbac;
              line-height: 29px;
              b{
                font-size: 14px;
                position: relative;
                left: 8px;
              }
              span{
                color: #666;
                font-size: 12px;
                margin-left: 5px;
              }
            }
            .btnWrapper{
              position: relative;
              margin-top: 38px;
              a{
                width: 120px;
                height: 40px;
                background: #f90;
                color: #fff;
                position: absolute;
                border-radius: 100px;
                line-height: 40px;
                text-align: center;
                font-size: 14px;
                box-sizing: border-box;
                &.actv{
                  left: 160px;
                  background: #fff;
                  color: #666;
                  border: 1px solid #e5e5e5;
                }
              }
            }
          }
        }
        .cent-list{
          margin-top: 40px;
          h4{
            color: #666;
            font-size: 16px;
            font-weight: bold
          }
          .container{
            border: 1px solid #e5e5e5;
            padding: 0px 20px;
            box-sizing: border-box;
            border-radius: 4px;
            .container-top{
              overflow: hidden;
              height: 40px;
              font-size: 14px;
              border-bottom: 1px solid #e5e5e5;
              .tao{
                display: block;
                float: left;
                height: 40px;
                line-height: 40px;
              }
              .tbody{
                float: right;
                span{
                  width: 110px;
                  text-align: center;
                  display: inline-block;
                  height: 40px;
                  line-height: 40px;
                }
              }
            }
            .container-center{
              overflow: hidden;
              border-bottom: 1px solid #e5e5e5;
              .all{
                display: block;
                float: left;
              }
              .fr{
                float: right;
                span{
                  width: 110px;
                  text-align: center;
                  display: inline-block;
                  height: 40px;
                  line-height: 40px;
                }
              }
            }
            .ji{
              height: 40px;
              padding-right: 26px;
              box-sizing: border-box;
              span{
                display: block;
                float: right;
                width: 110px;
                text-align: center;
                height: 40px;
                line-height: 40px;
                font-size: 14px;
                b{
                  font-weight: 400;
                  color: #f60;
                }
              }
            }
          }
          .remarks{
            font-size: 12px;
            line-height: 20px;
            margin: 15px 0px 30px 0px;
          }
          .gou{
            font-size: 16px;
            font-weight: bold;
            color: #666;
          }
          .xu{
            border: 1px solid #e5e5e5;
            padding: 0px 20px;
            box-sizing: border-box;
            border-radius: 4px;
            p{
              margin-top: 10px;
              span{
                display: block;
                font-size: 12px;
                &.title{
                  color: #222;
                  font-size: 14px;
                }
              }
            }
          }
          .pai{
            margin-top: 40px;
            font-size: 16px;
            font-weight: bold;
            color: #666;
          }
          .imgCont{
            overflow: hidden;
            height: 130px;
            img{
              width: 210px;
              height: 129px;
              margin-right: 9px;
              border-radius: 4px;
            }
          }
          .aWrapper{
            margin-top: 35px;
            padding: 30px 0px;
            border-top: 1px solid #e5e5e5;
            a{
              display: block;
              width: 300px;
              margin: 0 auto;
              height: 40px;
              color: #222;
              border-radius: 100px;
              line-height: 40px;
              text-align: center;
              font-size: 14px;
              border: 1px solid #e5e5e5;
            }
          }
        }
      }
    }
  }
</style>
