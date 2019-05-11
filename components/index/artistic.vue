<template>
  <div class="m-artistic">
    <dl class="m-artistic-dl">
      <dt>有格调</dt>
      <dd :class="kind === item.type ? `active ${item.type}`: `${item.type}` " v-for="(item,index) of artistic" :key="index" @mouseenter="ArtisticDdMouseEnter">{{item.name}}</dd>
    </dl>
    <div class="m-artistic-particulars" >
      <ul class="list">
        <li v-for="(item,index) of cur.child" :key="index">
          <el-card>
            <img :src="item.imgurl" alt="">
            <ul>
              <li class="title">{{item.title}}</li>
              <li class="desc">{{item.desc}}</li>
              <li class="price">{{item.price}}起</li>
            </ul>
          </el-card>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      kind:'all',
      artistic:[{
        type: 'all',
        name: '全部',
        child: [{
          imgurl: 'http://p0.meituan.net/bbia/8d17c941bcca10e753d1c4130bc48b85181594.jpg@368w_208h_1e_1c',
          title: '手拉手烘焙（鑫苑国际城市花园店）',
          desc: '红木马独角兽蛋糕1个，约8英寸，圆形',
          price: '138'
        },{
          imgurl: 'http://p0.meituan.net/poi/a8709b5682f6f866148990732c022b7a43008.jpg@368w_208h_1e_1c',
          title: '名派蛋糕（大石桥店）',
          desc: '精品蛋糕10寸1个，约10英寸，三环内免费配送',
          price: '88'
        },{
          imgurl: 'http://p1.meituan.net/msmerchant/2667f2efef61fb153e7faeda52fa716696641.jpg@368w_208h_1e_1c',
          title: '金祥福蛋糕·无糖蛋糕店（金沙国际店）',
          desc: '欧式蛋糕1个，约8英寸，圆形',
          price: '58'
        },{
          imgurl: 'http://p0.meituan.net/deal/12f0af02da4ab55b242e72da84bb253d230753.jpg@368w_208h_1e_1c',
          title: 'CGV影城(大卫城IMAX店)',
          desc: '免押金,可停车,儿童票,有WIFI,IMAX厅,RealD 6FL厅',
          price: '58'
        },{
          imgurl: 'http://p0.meituan.net/shopmainpic/1e7c0117e102c3f949409548885cf238141798.jpg@368w_208h_1e_1c',
          title: '摩時手作重起司蛋糕（大石桥店）',
          desc: '蛋糕6选1,约7英寸，圆形',
          price: '88'
        },{
          imgurl: 'http://p1.meituan.net/msmerchant/76b103610fc7444004929808501c7b49140516.jpg@368w_208h_1e_1c',
          title: 'T·D糖客烘焙',
          desc: '海盐芝士奶盖1个，约6英寸，圆',
          price: '68'
        }]
      },{
        type:'part',
        name: '约会聚会',
        child: [{
        imgurl: 'http://p0.meituan.net/msmerchant/df8ed3cc84b4de5321fff48c9c352b83789724.jpg@368w_208h_1e_1c',
        title: '必胜客（上海城店）',
        desc: '3份澳洲西冷牛排1份',
        price: '177'
        },{
        imgurl: 'http://p0.meituan.net/msmerchant/df8ed3cc84b4de5321fff48c9c352b83789724.jpg@368w_208h_1e_1c',
        title: '必胜客（上海城店）',
        desc: '3份澳洲西冷牛排1份',
        price: '177'
        },{
        imgurl: 'http://p0.meituan.net/msmerchant/df8ed3cc84b4de5321fff48c9c352b83789724.jpg@368w_208h_1e_1c',
        title: '必胜客（上海城店）',
        desc: '3份澳洲西冷牛排1份',
        price: '177'
        },{
        imgurl: 'http://p0.meituan.net/msmerchant/df8ed3cc84b4de5321fff48c9c352b83789724.jpg@368w_208h_1e_1c',
        title: '必胜客（上海城店）',
        desc: '3份澳洲西冷牛排1份',
        price: '177'
        },{
        imgurl: 'http://p0.meituan.net/msmerchant/df8ed3cc84b4de5321fff48c9c352b83789724.jpg@368w_208h_1e_1c',
        title: '必胜客（上海城店）',
        desc: '3份澳洲西冷牛排1份',
        price: '177'
        },{
        imgurl: 'http://p0.meituan.net/msmerchant/df8ed3cc84b4de5321fff48c9c352b83789724.jpg@368w_208h_1e_1c',
        title: '必胜客（上海城店）',
        desc: '3份澳洲西冷牛排1份',
        price: '177'
        }]
      },{
        type: 'spa',
        name:'丽人SPA',
        child: [{
        imgurl: 'http://p0.meituan.net/wedding/cea6672f89481f76fb97945e6b67396d535887.jpg@368w_208h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c',
        title: '鑫秀造型烫染沙龙（医学院店）',
        desc: '鑫秀造型烫染沙龙（医学院店）',
        price: '50'
        },{
        imgurl: 'http://p0.meituan.net/wedding/cea6672f89481f76fb97945e6b67396d535887.jpg@368w_208h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c',
        title: '鑫秀造型烫染沙龙（医学院店）',
        desc: '鑫秀造型烫染沙龙（医学院店）',
        price: '50'
        },{
        imgurl: 'http://p0.meituan.net/wedding/cea6672f89481f76fb97945e6b67396d535887.jpg@368w_208h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c',
        title: '鑫秀造型烫染沙龙（医学院店）',
        desc: '鑫秀造型烫染沙龙（医学院店）',
        price: '50'
        },{
        imgurl: 'http://p1.meituan.net/deal/73bd8bd86680ebdd9cd706f0693e616a125739.jpg@368w_208h_1e_1c_1l',
        title: '鑫秀造型烫染沙龙（医学院店）',
        desc: '鑫秀造型烫染沙龙（医学院店）',
        price: '50'
        }]
      },{
        type: 'movie',
        name: '电影演出',
        child: [{
        imgurl: 'http://p0.meituan.net/deal/12f0af02da4ab55b242e72da84bb253d230753.jpg@368w_208h_1e_1c',
        title: 'CGV影城(大卫城IMAX店)',
        desc: '免押金,可停车,儿童票,有WIFI,IMAX厅,RealD 6FL厅',
        price: '20'
        },{
        imgurl: 'http://p0.meituan.net/deal/12f0af02da4ab55b242e72da84bb253d230753.jpg@368w_208h_1e_1c',
        title: 'CGV影城(大卫城IMAX店)',
        desc: '免押金,可停车,儿童票,有WIFI,IMAX厅,RealD 6FL厅',
        price: '20'
        },{
        imgurl: 'http://p0.meituan.net/deal/12f0af02da4ab55b242e72da84bb253d230753.jpg@368w_208h_1e_1c',
        title: 'CGV影城(大卫城IMAX店)',
        desc: '免押金,可停车,儿童票,有WIFI,IMAX厅,RealD 6FL厅',
        price: '20'
        },{
        imgurl: 'http://p0.meituan.net/deal/12f0af02da4ab55b242e72da84bb253d230753.jpg@368w_208h_1e_1c',
        title: 'CGV影城(大卫城IMAX店)',
        desc: '免押金,可停车,儿童票,有WIFI,IMAX厅,RealD 6FL厅',
        price: '20'
        }]
      },{
        type: 'travel',
        name: '品质出游',
        child: [{
        imgurl: 'http://p0.meituan.net/tdchotel/54024f5eea9b4ffcd764eefde30d17b193393.jpg@368w_208h_1e_1c',
        title: '郑飞国际酒店',
        desc: '新客超值优惠',
        price: '370'
        },{
        imgurl: 'http://p0.meituan.net/tdchotel/54024f5eea9b4ffcd764eefde30d17b193393.jpg@368w_208h_1e_1c',
        title: '郑飞国际酒店',
        desc: '新客超值优惠',
        price: '370'
        },{
        imgurl: 'http://p0.meituan.net/tdchotel/54024f5eea9b4ffcd764eefde30d17b193393.jpg@368w_208h_1e_1c',
        title: '郑飞国际酒店',
        desc: '新客超值优惠',
        price: '370'
        },{
        imgurl: 'http://p0.meituan.net/tdchotel/54024f5eea9b4ffcd764eefde30d17b193393.jpg@368w_208h_1e_1c',
        title: '郑飞国际酒店',
        desc: '新客超值优惠',
        price: '370'
        }]
      }]
    }
  },
  computed: {
    cur () {
      return this.artistic.filter( (item) => item.type === this.kind)[0]
    }
  },
  methods: {
    ArtisticDdMouseEnter (e) {
      if(e.target.className.split(' ').length>1){
         this.kind = e.target.className.split(' ')[1];
      }else{
         this.kind = e.target.className.split(' ')[0];
      }
     
    }
  }
}
</script>

<style lang="scss" scoped>
  .m-artistic{
    .m-artistic-dl{
      background-color: rgb(190, 164, 116); 
      background-image: linear-gradient(to right, rgb(194, 176, 142) 3%, rgb(190, 164, 116) 100%);
      overflow: hidden;
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
      dd{
        float: left;
        width: 56px;
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
        width: 55px;
        height: 44px;
        font-size: 18px;
        margin-left: 10px;
        margin-right: 5px;
        text-align: center;
        color: #fff;
        padding: 0 5px;
          line-height: 44px;
          font-family: MFShangHei-Regular!important;
      }
    }
    .m-artistic-particulars{
      box-sizing: border-box;
      border-left: 1px solid #e5e5e5;
      border-right: 1px solid #e5e5e5;
      border-bottom: 1px solid #e5e5e5;
      padding: 11px 10px 10px;
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
      &:nth-child(1),&:nth-child(4){
        margin-left: -9px;
      }
      &:hover{
        background: #f4f4f4;
      }
    }
    .m-artistic-particulars /deep/ .el-card__body{
      padding: 12px;
    }
    .m-artistic-particulars /deep/ .el-card{
      border: none;
      background: none;
      li{
        padding: 4px 0px;
        &.title{
          font-size: 16px;
          color: #222;
          font-weight: 500;
          height: 22px;
          line-height: 22px;
        }
        &.desc{
          font-size: 12px;
          color: #999;
          height: 18px;
          line-height: 18px;
        }
      }
      img{
        border-radius: 4px;
      }
    }
    .m-artistic-particulars /deep/ .is-always-shadow{
      box-shadow: none;
    }

  }
  
</style>


