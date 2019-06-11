<template>
  <div class="m-artistic">
    <dl class="m-artistic-dl">
      <dt>狠优惠</dt>
      <dd :kind="item.tab" :class="kind === item.tab ? `active ${item.tab}`: `${item.tab}` " v-for="(item,index) of Cheap.tabs" :key="index" @mouseenter="ArtisticDdMouseEnter">{{item.text}}</dd>
    </dl>
    <div class="m-artistic-particulars" >
      <ul class="list">
        <li v-for="(itm,index) of Cheap.data" :key="index">
          <el-card>
            <div class="imgWrapper">
              <img :src="itm.imgUrl |  cheapCale" alt=""/>
            </div>
            <ul>
              <li class="title">{{itm.title}}</li>
              <li class="desc">{{itm.subTitle}}</li>
              <li class="price">
                <span class="price-symbol" >￥</span>
                <span>
                  {{itm.currentPrice}}
                </span>
                <s class="small">{{itm.oldPrice}}</s>
                <span class="right">{{itm.bottomInfo}}</span>
              </li>
            </ul>
          </el-card>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import cheapCale from '@/assets/api/cheapCale'
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      kind:'all',
    }
  },
  computed: {
    ...mapState(['Cheap'])
  },
  methods: {
    async ArtisticDdMouseEnter (e) {
      if(e.target.className.split(' ').length>1){
         this.kind = e.target.className.split(' ')[1];
      }else{
         this.kind = e.target.className.split(' ')[0];
      }
      let kind = e.target.getAttribute('kind')
      let result = await axios.get('/get/cheap/'+ kind)
      this.$store.dispatch('setCheap',result.data.data)
    },
  },
}
</script>

<style lang="scss" scoped>
  .m-artistic{
    margin-top: 40px;
    .m-artistic-dl{
      background-image: linear-gradient(to right, rgb(255, 113, 74) 2%, rgb(252, 66, 66) 97%);
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
      padding: 11px 0px 10px;
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
      width: 19%;
      height: 270px;
      margin-left: 5px;
      &:hover{
        background: #f4f4f4;
      }
    }
    .list > li:nth-child(1){
      margin-left: 15px;
    }
    .list > li:nth-child(6){
      margin-left: 15px;
    }
    .m-artistic-particulars /deep/ .el-card__body{
      padding: 10px;
    }
    .m-artistic-particulars /deep/ .el-card{
      border: none;
      background: none;
      li{
        padding: 4px 0px;
        width: 100%;
        box-sizing: border-box;
        padding-right: 5px;
        margin-bottom: 5px;
        &.title{
          font-size: 16px;
          color: #222;
          font-weight: 500;
          height: 22px;
          line-height: 22px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        &.desc{
          font-size: 12px;
          color: #999;
          height: 18px;
          line-height: 18px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      img{
        border-radius: 4px;
        width: 213px;
        height: 120px;
      }
    }
    .m-artistic-particulars /deep/ .is-always-shadow{
      box-shadow: none;
    }
    .list{
      .price{
        font-size: 20px;
        color: #FE6648;
        margin-right: 6px;
        margin-top: 30px;
        cursor: pointer;
        .small{
          font-size: 12px;
          color: #999;
        }
      }
      .right{
        float: right;
        font-size: 12px;
        color: #999;
        margin-top: 4px;
      }
      .price-symbol{
        font-size: 14px;
        color: #FE6648;
        font-weight: 500;
        margin-right: -8px;
      }
    }

  }
  
</style>