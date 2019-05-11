<template>
    <div class="m-maoyan">
      <dl class="m-maoyan-dl">
        <dt>猫眼电影</dt>
        <dd v-for="(item,index) of maoyan" :class="kind=== item.type ? `active ${item.type}` : `${item.type}`" @mouseenter="MaoyanMouseEnter" :key="index">{{item.typeName}}</dd>
        <!-- <dd class="active">正在上映</dd>
        <dd>即将上映</dd> -->
      </dl>
      <div class="m-maoyan-container">
        <div class="block">
          <el-carousel :autoplay="false" :loop="true">
            <el-carousel-item v-for="(item,index) in MaoyanList.maoyanlist" :key="index">
              <ul>
                <li v-for="maoyan of item" :key="maoyan.name">
                  <div class="maoyan-list">
                    <img :src="maoyan.imgurl" alt="">
                    <div class="maoyan-desc">
                      <p> <b>观众评</b> <span>{{maoyan.ping}}</span></p>
                      <p class="desc-p">{{maoyan.name}}</p>
                      <span class="btn">购票</span>
                    </div>
                  </div>
                </li>
                
              </ul>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    data () {
      return {
        kind: 'being',
        maoyan:[{
          type: 'being',
          typeName: '正在上映',
          maoyanlist:[
          [{
            imgurl: 'http://p1.meituan.net/movie/f29c0f9ff0340d00085f4bc1a395ecf02603950.jpg@214w_297h_1e_1c',
            ping: '8.6',
            name:'大侦探皮卡丘',
            btn: '购票'
          },{
            imgurl: 'http://p0.meituan.net/moviemachine/f7d2ad70eb79d6d9b8a197713db9b8c41711752.jpg@214w_297h_1e_1c',
            ping: '9.1',
            name:'复仇者联盟4',
            btn: '购票'
          },{
            imgurl: '//p1.meituan.net/movie/d28b729ffe72353a72d1e7ef8a9b90591544978.jpg@214w_297h_1e_1c',
            ping: '9.4',
            name:'何以为家',
            btn: '购票'
          },{
            imgurl: '//p1.meituan.net/movie/d5bb2989f36ecd73543a095f62f878eb883035.jpg@214w_297h_1e_1c',
            ping: '9.3',
            name:'一个母亲的复仇',
            btn: '购票'
          },{
            imgurl: '//p1.meituan.net/movie/b76f37b5e3484b6837f75ef7b5bf46452066459.jpg@214w_297h_1e_1c',
            ping: '6.8',
            name:'一条狗的使命2',
            btn: '购票'
          }],
          [{
            imgurl: '//p1.meituan.net/moviemachine/07e846797e2c886084d4377822036e1a1464615.jpg@214w_297h_1e_1c',
            ping: '8.0',
            name:'双生',
            btn: '预售'
          },{
            imgurl: '//p0.meituan.net/movie/71fba05fbe4912cb70d27b87c3c856393364925.jpg@214w_297h_1e_1c',
            ping: '9.6',
            name:'哥斯拉2：怪兽之王',
            btn: '预售'
          },{
            imgurl: '//p1.meituan.net/moviemachine/409aca94fa1695a6bdb5206735189c11495127.jpg@214w_297h_1e_1c',
            ping: '4.3',
            name:'下一任：前任',
             btn: '购票'
          },{
            imgurl: '//p0.meituan.net/movie/35cd439c836bf2281bbd1e8eaeb8fdea3999459.jpg@214w_297h_1e_1c',
            ping: '9.6',
            name:'进京城',
             btn: '购票'
          },{
            imgurl: '//p1.meituan.net/movie/add2ab162d018ceb1351e6e8e465d92f650170.jpg@214w_297h_1e_1c',
            ping: '9.6',
            name:'龙珠超：布罗利',
             btn: '预售'
          }]
        ]

        },{
          type:'coming',
          typeName: '即将上映',
          maoyanlist:[
            [{
              imgurl: '//p0.meituan.net/movie/f540050eee0371a5720f86da572d0d136138553.jpg@214w_297h_1e_1c',
              ping: '8.6',
              name:'周恩来回延安',
              btn: '预售'
            },{
              imgurl: '//p1.meituan.net/movie/f2a32a5369a76ee11ee37947a0003254629750.jpg@214w_297h_1e_1c',
              ping: '9.1',
              name:'海蒂和爷爷',
              btn: '预售'
            },{
              imgurl: '//p1.meituan.net/movie/b76f37b5e3484b6837f75ef7b5bf46452066459.jpg@214w_297h_1e_1c',
              ping: '9.4',
              name:'何以为家',
              btn: '预售'
            },{
              imgurl: '//p1.meituan.net/movie/d5bb2989f36ecd73543a095f62f878eb883035.jpg@214w_297h_1e_1c',
              ping: '9.3',
              name:'一条狗的使命2',
              btn: '预售'
            },{
              imgurl: '//p1.meituan.net/movie/47e4fec55c1a31733026e5c138a3132a502726.jpg@214w_297h_1e_1c',
              ping: '6.8',
              name:'企鹅公路',
              btn: '预售'
            }],
            [{
              imgurl: '//p1.meituan.net/moviemachine/07e846797e2c886084d4377822036e1a1464615.jpg@214w_297h_1e_1c',
              ping: '8.0',
              name:'双生',
              btn: '预售'
            },{
              imgurl: '//p0.meituan.net/movie/71fba05fbe4912cb70d27b87c3c856393364925.jpg@214w_297h_1e_1c',
              ping: '9.6',
              name:'哥斯拉2：怪兽之王',
              btn: '预售'
            },{
              imgurl: '//p1.meituan.net/movie/324cf409a83a43bd2f598d42fbde817c11773561.jpg@214w_297h_1e_1c',
              ping: '4.3',
              name:'致命梦魇',
              btn: '预售'
            },{
              imgurl: '//p0.meituan.net/movie/35cd439c836bf2281bbd1e8eaeb8fdea3999459.jpg@214w_297h_1e_1c',
              ping: '9.6',
              name:'进京城',
             btn: '预售'
            },{
              imgurl: '//p1.meituan.net/movie/add2ab162d018ceb1351e6e8e465d92f650170.jpg@214w_297h_1e_1c',
              ping: '9.6',
              name:'龙珠超：布罗利',
             btn: '预售'
            }]
          ]
        }]
        
      }
    },
    computed: {
      MaoyanList () {
         return this.maoyan.filter( (item) => item.type === this.kind)[0]
      }
    },
    methods: {
      MaoyanMouseEnter (e) {
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
  .m-maoyan{
    margin-top: 40px;
    .m-maoyan-dl{
      overflow: hidden;
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
      background: linear-gradient(to right, rgb(250, 60, 104) 2%, rgb(254, 70, 77) 97%) rgb(250, 60, 104);
      display: flex;
      dd{
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
        width: 82px;
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
    .m-maoyan-container{
      box-sizing: border-box;
      border-left: 1px solid #e5e5e5;
      border-right: 1px solid #e5e5e5;
      border-bottom: 1px solid #e5e5e5;
      padding: 11px 10px 10px;
      background-color: #fff;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      .block /deep/ .el-carousel__arrow{
        background: #333;
        opacity: 0.8;
      }
      ul{
        display: flex;
        list-style: none;
        li{
          width: 214px;
          height: 297px;
          margin-right: 18px;
          &:nth-child(1){
            margin-left: 10px;
          }
          .maoyan-list{
             position: relative;
             img{
              border-radius: 4px;
              filter: blur(0.3px); 
              
             }
            .maoyan-desc{
              position: absolute;
              bottom: 10px;
              margin-left: 15px;
              z-index: 22;
              b{
                font-size: 12px;
                color: #666;
              }
              p{
                line-height: 18px;
                overflow: hidden;
                text-overflow: ellipsis;
                font-weight: 500;
                white-space: nowrap;
                width: 6em;
              }
              p>span{
                font-size: 16px;
                color: #FD9827;
                font-weight: 500;
              }
              .desc-p{
                display: inline-block;
                font-size: 16px;
                color: #fff;
                font-weight: 500;
              }
              .btn{
                display: inline-block;
                position: relative;
                left: 40px;
                padding: 2px 12px;
                background: #FF4949;
                color: #fff;
                border-radius: 100px;
                line-height: 20px;
                text-align: center;
                cursor: pointer;
              }
              
            }
          }
        }
      }
    }
    

  }
</style>


