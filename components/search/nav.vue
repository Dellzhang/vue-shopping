<template>
  <div class="search-nav">
    <div class="meituan">
      <span>美团导航</span>
    </div>
    <div class="nav-contant">
      <div class="nav-item">
          <span>热门城市</span>
          <div>
            <ul>
              <li v-for="(itm,ins) of city" :key="ins">{{itm}}</li>
            </ul>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      city:["温州","上海","济南","厦门","郑州","西安","常州","佛山","石家庄","成都","长春","南京","宁波","合肥","重庆","深圳","东莞","贵阳","北京","无锡"],
    }
  }
}
</script>

<style lang="scss" scoped>
  .search-nav{
    margin-top: 30px;
    .meituan{
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
      height: 44px;
      background-color: #0ECAC7;
      background-image: linear-gradient(-90deg,#0ECAC7 0,#06C1AE 100%);
      span{
        height: 44px;
        line-height: 44px;
        color: #fff;
        margin-left: 10px;
        font-size: 16px;
      }
    }
    .nav-contant{
      box-sizing: border-box;
      border-left: 1px solid #e5e5e5;
      border-right: 1px solid #e5e5e5;
      border-bottom: 1px solid #e5e5e5;
      padding: 11px 10px 10px;
      background-color: #fff;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      .nav-item{
        display: flex;
        span{
          display: block;
          width: 120px;
          font-size: 14px;
          font-weight: 500;
          color: #222;
          text-align: center;
          margin-right: 10px;
        }
        ul{
          list-style: none;
          overflow: hidden;
        }
        li{
          float: left;
          width: 100px;
          height: 17px;
          font-size: 12px;
          margin-bottom: 16px;
          color: #666;
          cursor: pointer;
          &:hover{
            color: #0ECAC7;
          }
          .hot{
            width: 30px;
            font-size: 12px;
            color: #fff;
            background: #FF4848;
            font-weight: 400;
            border-radius: 10px;
            padding: 0 6px;
            margin: 0 5px;
            position: relative;
            top: -15px;
            left: 20px;
          }
        }
      }
    }
  }
</style>