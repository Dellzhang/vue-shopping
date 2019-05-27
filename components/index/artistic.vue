<template>
  <div class="m-artistic">
    <dl class="m-artistic-dl">
      <dt>有格调</dt>
      <dd :kind="item.tab" :class="kind === item.tab ? `active ${item.tab}`: `${item.tab}` " v-for="(item,index) of all.tabs" :key="index" @mouseenter="ArtisticDdMouseEnter">{{item.text}}</dd>
    </dl>
    <div class="m-artistic-particulars" >
      <ul class="list">
        <li v-for="(itm,index) of all.data" :key="index">
          <el-card>
            <img :src="itm.imgUrl | imgCale" alt="" v-if=" (kind !== 'spa' || kind !== 'show')"/>
            <img :src="itm.imgUrl | SpaCale" alt="" v-if=" kind === 'spa'" />
             <img :src="itm.imgUrl | ShowCale" alt="" v-if=" kind === 'show'" />
            <ul>
              <li class="title">{{itm.title}}</li>
              <li class="desc" v-if="itm.subTitle">{{itm.subTitle}}</li>
              <li v-if="itm.tags" class="tags">
                <span class="tag" v-for="(tag,ins) of itm.tags" :key="ins">{{tag.tag}}</span>
              </li>
              <li :class=" kind === 'spa' ? '' : 'price' ">
                <span class="price-symbol" v-if="kind !== 'spa'">￥</span>
                <span v-if="itm.currentPrice && kind !== 'spa'">
                  {{itm.currentPrice}}
                  <small v-if="kind === 'show' || kind=== 'journey'">{{'/'+itm.priceType}}</small>
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
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      kind:'all',
      list: this.all
    }
  },
  computed: {
    cur () {
      return this.artistic.filter( (item) => item.type === this.kind)[0]
    },
    ...mapState(['all'])
  },
  methods: {
    async ArtisticDdMouseEnter (e) {
      if(e.target.className.split(' ').length>1){
         this.kind = e.target.className.split(' ')[1];
      }else{
         this.kind = e.target.className.split(' ')[0];
      }
      let kind = e.target.getAttribute('kind')
      let result = await axios.get('/get/type/'+ kind)
      console.log(result.data)
      this.$store.dispatch('setShow',result.data.data)
      
    },
   
  },
  mounted(){
    console.log(this.all)
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
        width: 100%;
        box-sizing: border-box;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        padding-right: 5px;
        margin-bottom: 5px;
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
        width: 368px;
        height: 268px;
        background: url(//p0.meituan.net/codeman/ae846a35c5f42565206c3c7b47be3a5310601.png) 50% 50%;
        background-size: cover;
        max-width: 100%;
        height: 208px;
      }
    }
    .m-artistic-particulars /deep/ .is-always-shadow{
      box-shadow: none;
    }
    .list{
      .price{
        font-size: 20px;
        color: #BE9E4D;
        margin-right: 6px;
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
        margin-right: 25px;
      }
      .price-symbol{
        font-size: 14px;
        color: #BE9E4D;
        font-weight: 500;
        margin-right: -8px;
      }
      li{
        &.tags{
          height: 21px;
          padding-right: 40px;
          box-sizing: border-box;
        }
      }
      .tag{
        text-align: center;
        border: 1px solid #d8d8d8;
        border-radius: 2px;
        margin-right: 10px;
        margin-bottom: 5px;
        padding: 0 3px;
        font-size: 12px;
        color: #999;
      }
      small{
        margin-left: -3px;
      }
    }

  }
  
</style>


