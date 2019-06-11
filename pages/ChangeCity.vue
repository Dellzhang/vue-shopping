<template>
  <div class="m-city">
    <el-row>
      <el-col :span="24">
        <h3>按省份选择:</h3>
        <el-select v-model="value" placeholder="省份">
          <el-option
            v-for="item in province"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
        <el-select v-model="val" :disabled="value == ''" placeholder="城市" @change="selectClick">
          <el-option
            v-for="item of city[value] "
            :key="item.name"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
        <h3>直接搜索:</h3>
        <input class="input" v-model="kind" type="text" placeholder="请输入城市中文或拼音">
        <div class="kindlist" v-if="kind">
          <div class="searchlist">
            <ul>
              <li v-for="(item,inx) of kindlist" :key="inx" @click="changeClick(item.name)">{{item.name}}</li>
            </ul>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="hotList">
      <el-col :span="24" class="hot">
        <h3>热门城市</h3>
        <div>
         <ul>
          <li v-for="(item,ins) of HotList" @click="changeClick(item)" :key="ins">
            {{item}}
          </li>
         </ul>
        </div>
      </el-col>
    </el-row>
    <el-row class="lateList">
      <el-col :span="24" class="hot">
        <h3>最近访问</h3>
        <div>
         <ul>
          <li v-for="(item,ins) of lateList" @click="changeClick(item)" :key="ins">
            {{item}}
          </li>
         </ul>
        </div>
      </el-col>
    </el-row>
    <el-row class="A-list">
      <el-col :span="24" class="hot pin">
        <h3>按拼音首字母选择:</h3>
        <div>
          <ul class="top">
            <li v-for="(item,ins) of Alist" @click="Aclick(ins)" :key="ins">{{ins}}</li>
          </ul>
        </div>
      </el-col>
      <el-col :span="24" class="cityWrapper">
        <div v-for="(item,inx) of Alist" :key="inx" class="city">
          <div class="bg">{{inx}}</div>
          <div class="listWrapper">
            <ul class="bottom">
              <li v-for="(itm,ins) of item" :key="ins" @click="changeClick(itm.name)">{{itm.name}}</li>
            </ul>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Alist from '../assets/api/city.json'
import province from '../assets/api/province.json'
import city from '../assets/api/cities.json'
import {mapMutations} from 'vuex'
export default {
  data () {
    return {
      value: '',
      options: [],
      state: '',
      HotList: ['北京','上海','广州','深圳','天津','西安','重庆','杭州','南京','武汉','成都'],
      lateList: ['郑州','北京','石家庄'],
      Alist: Alist.data.cities,
      province,
      city,
      val: '',
      kind: '',
      kindlist: []
    }
  },
  methods:{
    changeClick(val){
      this.changeCity(val)
      location.href = '/'
      localStorage.setItem('city',val)
    },
    ...mapMutations(['changeCity']),
    selectClick(e){
      for(let i in city){
       city[i].forEach( (item)=>{
          if( e === item.id){
            this.changeClick(item.name)
          }
       })
     }
    },
    Aclick(ins){
      switch(ins){
        case 'A':
          return window.scrollTo(0,580);
        case 'B':
          return window.scrollTo(0,680);
        case 'C':
          return window.scrollTo(0,780);
        case 'D':
          return window.scrollTo(0,960);
        case 'E':
          return window.scrollTo(0,1150);
        case 'F':
          return window.scrollTo(0,1230);
        case 'G':
          return window.scrollTo(0,1340);
        case 'H':
          return window.scrollTo(0,1500);
        case 'J':
          return window.scrollTo(0,1725);
        case 'K':
          return window.scrollTo(0,1945);
        case 'L':
          return window.scrollTo(0,2020);
        case 'M':
          return window.scrollTo(0,2310);
        case 'N':
          return window.scrollTo(0,2410);
        case 'P':
          return window.scrollTo(0,2520);
        case 'Q':
          return window.scrollTo(0,2670);
        case 'R':
          return window.scrollTo(0,2805);
        case 'S':
          return window.scrollTo(0,2915);
        case 'T':
          return window.scrollTo(0,3180);
        case 'W':
          return window.scrollTo(0,3320);
        case 'X':
          return window.scrollTo(0,3500);
        case 'Y':
          return window.scrollTo(0,3720);
        default:
          return window.scrollTo(0,4120)
      }
      
    }
  },
  watch: {
    kind(){
      if(this.timer){
        clearInterval(this.timer)
      }
      if( !this.kind){
        this.kindList = []
        return 
      }
      this.timer = setInterval( ()=>{
          let kindList = [];
          for(let i in this.Alist ){
              this.Alist[i].forEach( (value) => {
                let kind = this.kind.toLowerCase()
                if(value.spell.indexOf(kind) > -1 || value.name.indexOf(this.kind) > -1){
                  kindList.push(value)
                }
              })
          }
          this.kindlist = kindList
        },100)
    }
  }
}
</script>

<style lang="scss" scoped>
  .m-city{
    background: #fff;
    border: 1px solid #e5e5e5;
    margin-top: 20px;
    box-shadow: 2px 2px 0px  #f8f8f8;
    border-radius: 4px;
    padding: 20px;
    box-sizing: border-box;
    ul{
      list-style: none;
      overflow: hidden;
      color: #666;
      li{
        float: left;
         margin: 0px 20px;
         &:hover{
           color: #13D1BE;
           cursor: pointer;
         }
      }
    }
    h3{
      margin-right: 20px;
      display: inline-block;
      color: #333;
      font-size: 16px;
      font-weight: 500
    }
    input{
      width: 220px;
      height: 40px;
      border-radius: 4px;
      border: 1px solid #E5E5E5;
      margin-left: 10px;
      font-size: 14px;
      color: #666;
      box-sizing: border-box;
      padding-left: 10px;
    }
    .kindlist{
      position: absolute;
      width: 156px;
      background: red;
      right: 337px;
      top: 46px;
      max-height: 375px;
      z-index: 10;
      .searchlist{
        max-height: 350px;
        border: 1px solid #E5E5E5;
        background: #fff;
        border-radius: 4px;
        box-shadow: 0 3px 5px 0 rgba(0,0,0,.1);
        overflow-y: scroll;
        padding: 0px 20px;
        li{
          float: none;
          color: #666;
          font-size: 12px;
          height: 20px;
          margin: 6px 38px 6px 0;
          &:hover{
            color: #13D1BE;
          }
        }
      }
      

      &:after{
        position: absolute;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 7px solid #E5E5E5;
        content: "";
        top: -5px;
      }
    }
    .hotList,.lateList,.A-list{
      padding: 30px 0px;
      .hot{
        display: flex;
        align-items: center;
      }
      .pin{
         padding: 30px 0px;
      }
    }
    .A-list{
      .top{
        padding-top: 4px;
        li{
          margin: 0px 10px;
          font-size: 15px;
          width: 25px;
          height: 20px;
          text-align: center;
        }
      }
      .cityWrapper{
        .city{
          padding: 13px 30px 13px 10px;
          overflow: hidden;
          display: flex;
          align-items: flex-start;
          border-radius: 6px;
          &:hover{
            background: #f8f8f8;
          }
          .bg{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            color: #fff;
            background: #13D1BE;
            text-align: center;
            line-height: 40px;
            margin-top: 5px;
          }
          .listWrapper{
            width: 95%;
            .bottom{
              li{
                margin: 10px 20px;
                font-size: 14px;
              }
            }
          }
        }
      } 
    }
  }
  .m-city /deep/ .el-input{
    width: 86%;
  }
  .m-city /deep/ .el-row{
    border-bottom: 1px solid #E5E5E5;
    padding-bottom: 30px;
  }
  .m-city /deep/ .A-list{
    border: none;
  }
   
</style>