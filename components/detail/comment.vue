<template>
  <div class="comment">
    <div class="total">
      <span class="dian">{{ count}}条网友点评</span>
      <div class="sort">
        <span :class=" act === 0 ? 'on' : ''" @click="hotClick" >质量排序</span>
        <span :class=" act === 1 ? 'on' : ''" @click="TimeClick">时间排序</span>
      </div>
    </div>
    <div class="com-con">
      <div class="list">
        <ul>
          <li  :class=" index === ins ? 'active' : ''" v-for="(item,ins) of commentList.tags" :key="ins" @click="liClick($event,ins,item.tag)">{{item.tag + '(' + item.count + ')'}}</li>
        </ul>
      </div>
      <div class="pin">
        <div class="pin-item" v-for="(item,inx) of hui" :key="inx">
          <div class="imgwrapper" v-if="!item.userUrl"></div>
          <div class="img" v-else>
            <img :src="item.userUrl" alt=""/>
          </div>
          <div class="desc">
            <p class="name">{{item.userName}}</p>
            <div class="start">
              <p>
                <i class="el-icon-star-on" v-for="(item,index) of 5" :key="index"></i>
              </p>
              <span>{{item.commentTime | comTime }}</span>
            </div>
            <p class="title">{{item.comment}}</p>
            <div class="reply" v-if="item.merchantComment">
              商家回复：{{item.merchantComment}}
            </div>
            <div class="pinImg">
              <img v-for="(itm,ins) of item.picUrls" :src="itm.url" :key="ins" alt="">
            </div>
            <p class="zan">
              <span :class=" num === inx ? 'like on' : 'like' " @click="like(inx)">
                <i class="iconfont">&#xe64f;</i>
                点赞
              </span>
            </p>
          </div>
        </div>
      </div>
      <div class="page">
        <el-pagination
          background
          layout="prev, pager, next"
          class="cont"
          :total="pages"
          @current-change="btnClick($event)">
        </el-pagination>
      </div>
    </div>
    
  </div>
</template>

<script>
import comTime from '../../assets/api/commentTime'
import axios from 'axios'
export default {
  data () {
    return {
      commentList: {},
      // tags列表
      index: 0,
      hui: [],
      // 点赞
      num: '',
      // 排序参数
      type: 1,
      // 页数参数
      offset: 0,
      tag: '分量足',
      // 排序
      act: 0

    }
  },
  async mounted(){
    let result2 = await axios.get('/api/meishi/api/poi/getMerchantComment?uuid=fa9baa37a8c94b3c984e.1559611305.2.0.0&platform=1&partner=126&originUrl=https%3A%2F%2Fwww.meituan.com%2Fmeishi%2F2183814%2F&riskLevel=1&optimusCode=1&id=2183814&userId=793948412&offset=0&pageSize=10&sortType=1')
    let result1 = await axios.get('/api/meishi/api/poi/getMerchantComment?uuid=fa9baa37a8c94b3c984e.1559611305.2.0.0&platform=1&partner=126&originUrl=https%3A%2F%2Fwww.meituan.com%2Fmeishi%2F2183814%2F&riskLevel=1&optimusCode=1&id=2183814&userId=793948412&offset=0&pageSize=10&sortType=1&tag=%E5%88%86%E9%87%8F%E8%B6%B3')
    if( result2.data.status === 0){
      this.commentList = result2.data.data
    }
    this.hui = result1.data.data.comments
    console.log( this.hui)

  },
  methods: {
    liClick (e,inx,tag) {
      if( inx ==0 || inx){
        this.offset = 0;
        this.tag = tag
        this.index = inx
      }
      var tag = this.tag;
     if(tag ==='回头客'){
       axios.get(`/api/meishi/api/poi/getMerchantComment?uuid=fa9baa37a8c94b3c984e.1559611305.2.0.0&platform=1&partner=12&originUrl=https%3A%2F%2Fwww.meituan.com%2Fmeishi%2F2183814%2F&riskLevel=1&optimusCode=1&id=2183814&userId=793948412&offset=${this.offset}&pageSize=10&sortType=${this.type}&tag=%E5%9B%9E%E5%A4%B4%E5%AE%A2`).then( (res)=>{
          this.hui = res.data.data.comments
       }).catch( (err)=>{
       })
     }else if(tag=== '上菜快'){
        axios.get(`/api/meishi/api/poi/getMerchantComment?uuid=fa9baa37a8c94b3c984e.1559611305.2.0.0&platform=1&partner=126&originUrl=https%3A%2F%2Fwww.meituan.com%2Fmeishi%2F2183814%2F&riskLevel=1&optimusCode=1&id=2183814&userId=793948412&offset=${this.offset}&pageSize=10&sortType=${this.type}&tag=%E4%B8%8A%E8%8F%9C%E5%BF%AB`
        ).then( (res)=>{
          this.hui = res.data.data.comments
        }).catch( (err)=>{})
     }else if(tag === '海鲜棒'){
       axios.get(`/api/meishi/api/poi/getMerchantComment?uuid=fa9baa37a8c94b3c984e.1559611305.2.0.0&platform=1&partner=126&originUrl=https%3A%2F%2Fwww.meituan.com%2Fmeishi%2F2183814%2F&riskLevel=1&optimusCode=1&id=2183814&userId=793948412&offset=${this.offset}&pageSize=10&sortType=${this.type}&tag=%E6%B5%B7%E9%B2%9C%E6%A3%92`).then( (res)=>{
          this.hui = res.data.data.comments
        }).catch( (err)=>{})
     }else if(tag === '冬天吃的过瘾'){
       axios.get(`/api/meishi/api/poi/getMerchantComment?uuid=fa9baa37a8c94b3c984e.1559611305.2.0.0&platform=1&partner=126&originUrl=https%3A%2F%2Fwww.meituan.com%2Fmeishi%2F2183814%2F&riskLevel=1&optimusCode=1&id=2183814&userId=793948412&offset=${this.offset}&pageSize=10&sortType=${this.type}&tag=%E5%86%AC%E5%A4%A9%E5%90%83%E8%BF%87%E7%98%BE`).then( (res)=>{
          this.hui = res.data.data.comments
        }).catch( (err)=>{})
     }else if(tag === '朋友聚餐'){
       axios.get(`/api/meishi/api/poi/getMerchantComment?uuid=fa9baa37a8c94b3c984e.1559611305.2.0.0&platform=1&partner=126&originUrl=https%3A%2F%2Fwww.meituan.com%2Fmeishi%2F2183814%2F&riskLevel=1&optimusCode=1&id=2183814&userId=793948412&offset=${this.offset}&pageSize=10&sortType=${this.type}&tag=%E6%9C%8B%E5%8F%8B%E8%81%9A%E9%A4%90`).then( (res)=>{
          this.hui = res.data.data.comments
        }).catch( (err)=>{})
     }else if(tag === '闺蜜聚会'){
       axios.get(`/api/meishi/api/poi/getMerchantComment?uuid=fa9baa37a8c94b3c984e.1559611305.2.0.0&platform=1&partner=126&originUrl=https%3A%2F%2Fwww.meituan.com%2Fmeishi%2F2183814%2F&riskLevel=1&optimusCode=1&id=2183814&userId=793948412&offset=${this.offset}&pageSize=10&sortType=${this.type}&tag=%E9%97%BA%E8%9C%9C%E8%81%9A%E4%BC%9A`).then( (res)=>{
          this.hui = res.data.data.comments
        }).catch( (err)=>{})
     }else if(tag === '家庭聚餐'){
       axios.get(`/api/meishi/api/poi/getMerchantComment?uuid=fa9baa37a8c94b3c984e.1559611305.2.0.0&platform=1&partner=126&originUrl=https%3A%2F%2Fwww.meituan.com%2Fmeishi%2F2183814%2F&riskLevel=1&optimusCode=1&id=2183814&userId=793948412&offset=${this.offset}&pageSize=10&sortType=${this.type}&tag=%E5%AE%B6%E5%BA%AD%E8%81%9A%E9%A4%90`).then( (res)=>{
          this.hui = res.data.data.comments
        }).catch( (err)=>{})
     }else if(tag === '请客'){
       axios.get(`/api/meishi/api/poi/getMerchantComment?uuid=fa9baa37a8c94b3c984e.1559611305.2.0.0&platform=1&partner=126&originUrl=https%3A%2F%2Fwww.meituan.com%2Fmeishi%2F2183814%2F&riskLevel=1&optimusCode=1&id=2183814&userId=793948412&offset=${this.offset}&pageSize=10&sortType=${this.type}&tag=%E8%AF%B7%E5%AE%A2`).then( (res)=>{
          this.hui = res.data.data.comments
        }).catch( (err)=>{})
     }else if(tag === '公司聚餐'){
       axios.get(`/api/meishi/api/poi/getMerchantComment?uuid=fa9baa37a8c94b3c984e.1559611305.2.0.0&platform=1&partner=126&originUrl=https%3A%2F%2Fwww.meituan.com%2Fmeishi%2F2183814%2F&riskLevel=1&optimusCode=1&id=2183814&userId=793948412&offset=${this.offset}&pageSize=10&sortType=${this.type}&tag=%E5%85%AC%E5%8F%B8%E8%81%9A%E9%A4%90`).then( (res)=>{
          this.hui = res.data.data.comments
        }).catch( (err)=>{})
     }else{
       axios.get(`/api/meishi/api/poi/getMerchantComment?uuid=fa9baa37a8c94b3c984e.1559611305.2.0.0&platform=1&partner=126&originUrl=https%3A%2F%2Fwww.meituan.com%2Fmeishi%2F2183814%2F&riskLevel=1&optimusCode=1&id=2183814&userId=793948412&offset=${this.offset}&pageSize=10&sortType=${this.type}&tag=%E5%88%86%E9%87%8F%E8%B6%B3`).then( (res)=>{
          this.hui = res.data.data.comments
        }).catch( (err)=>{})
     }
    },
    like (index) {
      if( this.num === index){
        this.num = ''
      }else{
        this.num = index
      }
    },
    // 点击换页
    btnClick (e) {
      this.offset = e -1
      this.liClick()
      // console.log(this.offset)
    },
    //质量排序
    hotClick (){
      this.type = 1
      this.act = 0
      this.liClick()
    },
    // 时间排序
    TimeClick () {
      this.type = 0
       this.act = 1
      this.liClick()
    }
  },
  computed: {
    count () {
      if(!this.commentList.tags){
        return
      }else{
         return this.commentList.tags[this.index].count
      }
    },
    pages () {
      if(!this.commentList.tags){
          return 0
        }else{
          return Math.floor( this.commentList.tags[this.index].count) 
        }
    }
  }
}
</script>

<style lang="scss" scoped>
  .comment{
    margin-top: 40px;
    .total{
      overflow: hidden;
      .dian{
        display: block;
        float: left;
        font-size: 20px;
      }
      .sort{
        float: right;
        span{
          font-size: 12px;
          margin-left: 20px;
          cursor: pointer;
          &.on{
            color: #00c9b3;
          }
        }
      }
    }
    .com-con{
      padding: 0px 8px;
      margin-top: 5px;
      border: 1px solid #e5e5e5;
      .list{
        ul{
          list-style: none;
          overflow: hidden;
          margin-top: 10px;
          li{
            float: left;
            padding: 10px 12px;
            border: 1px solid #e5e5e5;
            margin: 0px 10px 10px 0px;
            font-size: 14px;
            color: #666;
            cursor: pointer;
            &.active{
              background-color: #00C9B3;
              border: 1px solid #00C9B3;
              color: #fff;
            }
          }
        }

      }
      .pin{
        margin-top: 20px;
        .pin-item{
          display: flex;
          padding-top: 20px;
          .imgwrapper{
            background: url(https://s0.meituan.net/bs/file/?f=meis/meishi.web:assets/bee61f5f04046d07.png@331a8a1) center center no-repeat #e0e0e0;
            background-size: 60% auto;
            border-radius: 50%;
            width: 60px;
            height: 60px;
            margin-right: 20px;
            margin-left: 10px;
          }
          .img{
            width: 60px;
            height: 60px;
            margin-right: 20px;
            margin-left: 10px;
            img{
              width: 100%;
              height: 100%;
              border-radius: 50%;
            }
          }
          .desc{
            flex: 1;
            border-bottom: 1px solid #e5e5e5;
            .name{
              font-size: 16px;
              color: #222;
              line-height: 22px;
            }
            .title{
              font-size: 14px;
              line-height: 20px;
              padding-top: 13px;
              color: #666;
            }
            .start{
              overflow: hidden;
              margin-top: -5px;
              p{
                display: block;
                float: left;
                i{
                  color: #F90;
                  font-size: 14px;
                }
              }
              span{
                display: block;
                float: right;
                color: #666;
                margin-right: 10px;
              }
            }
            .reply{
              font-size: 14px;
              color: #31bbac;
              padding-top: 12px;
            }
            .zan{
                overflow: hidden;
                margin: 25px 0px;
                .like{
                 display:block;
                 float: right;
                 color: #666;
                 font-size: 12px;
                 cursor: pointer;
                 &.on{
                   color: #31bbac;
                 }
               }
            }
            .pinImg{
              margin-top: 15px;
              img{
                width: 140px;
                height: 140px;
                margin-left: 15px;
              }
            }
          }

        }
      }
      .page{
        margin: 30px 0px;
      }
      .page /deep/ .cont{
        width: 50%;
        margin: 0 auto;
        li{
          border-radius: 50%;
          min-width: 40px;
          height: 40px;
          line-height: 40px;
        }
        li:not(.disabled).active{
          background: #13d1be;
        }
        button{
          height: 40px;
          line-height: 40px;
          min-width: 40px;
          border-radius: 50%;
        }
      }
    }
  }
</style>