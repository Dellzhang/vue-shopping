<template>
  <el-row class="m-left">
    <el-col :span="7" class="jiudian">
      <img src="http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png" alt="">
    </el-col>
    <el-col :span="7" class="jiudian two">
      <img src="http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg" alt="">
    </el-col>
    <el-col :span="4" class="shop">
      <img src="http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg" alt="">
    </el-col>
    <el-col :span="4">
      <div class="download-app">
        <div class="qrcode-box">
            <img src="http://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="">
        </div>
        <p class="desc-top">美团APP手机版</p>
        <p class="desc-bottom">
          <span class="desc-bottom-left">1元起</span>
          <span class="desc-bottom-right">吃喝玩乐</span>
        </p>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
  .m-left{
    margin-top: 6px;
    img{
      cursor: pointer;
    }
    .jiudian{
      img{
        width: 270px;
        height: 165px;
      }
      &.two{
        margin-right: 10px;
        img{
          width: 275px;
        }
      }
    }
    .shop{
      img{
        width: 150px;
        height: 165px;
      }
    }
    .download-app{
      width:230px;
      height: 167px;
      box-sizing: border-box;
      border: 1px solid #e5e5e5;
      background: #fff;
      .qrcode-box{
        margin-top: 10px;
        text-align: center;
        img{
          width: 95px;
          height: 95px;
        }
      }
      .desc-top{
        font-size: 16px;
        color: #222;
        font-weight: 500;
        text-align: center;
      }
      .desc-bottom{
         font-weight: 500;
         text-align: center;
         font-size: 12px;
        .desc-bottom-left{
          color: #EC5330;
          margin-right: 5px;
        }
        .desc-bottom-right{
          color: #3f3f3f;
        }
      }

    }
  }
</style>


