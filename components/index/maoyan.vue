<template>
    <div class="m-maoyan">
      <dl class="m-maoyan-dl">
        <dt>猫眼电影</dt>
        <!-- <dd v-for="(item,index) of maoyan" :class="kind=== item.type ? `active ${item.type}` : `${item.type}`" @mouseenter="MaoyanMouseEnter" :key="index">{{item.typeName}}</dd> -->
        <dd :class="kind=== 'being' ? `active being` : `being`"  @mouseenter="MaoyanMouseEnter">正在热映</dd>
        <dd  :class="kind=== 'jiang' ? `active jiang` : `jiang`"  @mouseenter="MaoyanMouseEnter">即将上映</dd>
        <dd class="right">全部<span class="arrow"></span></dd>
      </dl>
      <div class="m-maoyan-container">
        <div class="block">
          <el-carousel v-if=" kind === 'being'"  :autoplay="false" :loop="true">
            <el-carousel-item v-for="(item,index) in Hotlist" :key="index">
              <ul>
                <li v-for="maoyan of item" :key="maoyan.name">
                  <div class="maoyan-list">
                    <img :src="maoyan.img | maoImg" alt="">
                    <div class="maoyan-desc">
                      <p> <b>观众评</b> <span>{{maoyan.mk}}</span></p>
                      <p class="desc-p">{{maoyan.nm}}</p>
                      <span class="btn">购票</span>
                    </div>
                  </div>
                </li>
              </ul>
            </el-carousel-item>
          </el-carousel>
          <el-carousel v-else  :autoplay="false" :loop="true">
            <el-carousel-item v-for="(item,index) in Cominglist" :key="index">
              <ul>
                <li v-for="maoyan of item" :key="maoyan.name">
                  <div class="maoyan-list">
                    <img :src="maoyan.img | maoImg" alt="">
                    <div class="maoyan-desc">
                      <p><span>{{maoyan.wish}}</span><b>人想看</b></p>
                      <p class="desc-p">{{maoyan.nm}}</p>
                      <span class="btn">预购</span>
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
import {mapState} from 'vuex'
import maoImg from '@/assets/api/maoyan'
export default {
    data () {
      return {
        kind: 'being'
      }
    },
    computed: {
      ...mapState(['Hotlist','Cominglist'])
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
      position: relative;
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
        &.right{
          position:absolute;
          right: 15px;
        }
        .arrow {
          width: 6px;
          height: 6px;
          border-bottom: 1px solid #fff;
          border-right: 1px solid #fff;
          transform: rotate(-45deg);
          display: block;
          position: absolute;
          right: 13px;
          top: 0;
          bottom: 0;
          margin: auto;
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
              background-image: linear-gradient(-180deg,rgba(0,0,0,0) 0,rgba(29,45,55,.8) 99%);
              b{
                font-size: 12px;
                color: #666;
                color: #fff;
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


