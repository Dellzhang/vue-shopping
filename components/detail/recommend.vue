<template>
  <div class="m-recommend">
    <h3>推荐菜</h3>
    <div class="content">
      <div class="top">
        <ul>
          <li v-for="(item,inx) of list" :key="inx">
            <div class="imgWrapper">
              <img :src="item.imgUrl" alt="">
              <div class="desc">
                <span>{{item.title}}</span>
                <b>￥{{item.price}}</b>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="bom">
        <span v-for="(itm,ins) of txt" :key="ins">{{itm}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          imgUrl:'http://p0.meituan.net/bbia/ace98e51a60d931aada40502df57bd1791626.jpg@130w_130h_1e_1c',
          title: '海鲜绢豆腐汤',
          price: 39
        },
        {
          imgUrl:'http://p1.meituan.net/dealwatera/96027d155fc6f91bbaa8394d9e8a5aff62583.jpg@130w_130h_1e_1c',
          title: '玉米芝士',
          price: 32
        },
        {
          imgUrl:'http://p1.meituan.net/dealwatera/ca8e2ba620a186574709826e3bda069463128.jpg@130w_130h_1e_1c',
          title: '经典石锅拌饭',
          price: 30
        },
        {
          imgUrl:'http://p1.meituan.net/dealwatera/4886a683a1b9e151137919ee5dd5bbc639406.jpeg@130w_130h_1e_1c',
          title: '金针菇卷',
          price: 5
        },
        {
          imgUrl:'http://p1.meituan.net/bbia/2ec42d91202f037e0203096f274afd33116920.jpg@130w_130h_1e_1c',
          title: '韩味辣炒糕条',
          price: 35
        },
        {
          imgUrl:'http://p1.meituan.net/dealwatera/b5f29d168450835b537ec994a39199fd70360.jpg@130w_130h_1e_1c',
          title: '冷面',
          price: 25
        }
      ],
      txt: ['大酱汤','烤肉','辣炒年糕','鸡肉咖喱焗饭','烤串精选','辣五花肉套餐','薯蓉芝士','爱果士水果沙拉','土豆串','芝士海鲜糕',
      '章鱼拌饭','牛肉砂锅','鸡脆骨串','鸡肉芝士','鱼籽串','番茄牛肉芝士焗饭','炸酱面','棒虾仔','酸辣乌冬面','牛肉铁板拌饭','炸鸡蔬菜沙拉'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .m-recommend{
    margin-top: 40px;
    h3{
      font-size: 20px;
      line-height: 26px;
      margin-bottom: 8px;
      color: #222;
      font-weight: 700;
    }
    .content{
      border: 1px solid #e5e5e5;
      border-radius: 4px;
      padding: 20px;
      box-sizing: border-box;
      .top{
        ul{
          list-style: none;
          overflow: hidden;
          li{
            float: left;
            margin-right: 15px;
            .imgWrapper{
              position: relative;
              img{
                 border-radius: 4px;
              }
              .desc{
                position: absolute;
                padding: 8px 0px;
                text-align: center;
                left: 0;
                right: 0;
                z-index: 20;
                bottom: 2px;
                color: #fff;
                font-size: 14px;
                background: rgba(0,0,0,.3);
                display: flex;
                align-items: center;
                span{
                  white-space:nowrap;
                  overflow:hidden;
                  text-overflow:ellipsis;
                  max-width: 60%;
                  display: inline-block;
                  margin-left: 8px;
                }
              }
            }
          }
        }
      }
      .bom{
        margin-top: 20px;
        overflow: hidden;
        span{
          margin: 0px 20px 19px 0px;
          display: block;
          float: left;
          font-size: 16px;
          color: #333;
          line-height: 20px;
        }
      }
    }

  }
</style>