<template>
  <div class="m-menu">
    <div class="nav">
      <dl @mouseleave="DlMouseLeave">
        <dt>全部分类</dt>
        <dd @mouseenter="DdMouseEnter" v-for="(item,index) of this.$store.state.menu.msg.menu" :key="index">
          <i :class="item.type"></i>
          <nuxt-link to="/app">{{item.name}}</nuxt-link>
          <span class="arrow"></span>
        </dd>
      </dl>
      <div class="detail" v-if="kind" @mouseenter="DivMouseEnter" @mouseleave="DivMouseLeave">
        <template v-for="(item,index) of curdetail.child">
          <h2 :key="index">{{item.title}}
          <a href="#">更多<span class="arrow"></span></a>
          </h2>
          <nuxt-link to="#" v-for="(child) of item.child" :key="child">{{child}}</nuxt-link>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      kind: ''
    }
  },
  computed: {
    curdetail () {
      return this.$store.state.menu.msg.menu.filter( (item)=> item.type === this.kind)[0]
    }
  },
  methods: {
    DlMouseLeave () {
      this.timer = setTimeout( ()=>{
        this.kind = ''
      },150)
    },
    DdMouseEnter (e) {
      this.kind = e.target.querySelector('i').className;
    },
    DivMouseEnter () {
      clearTimeout( this.timer);
    },
    DivMouseLeave () {
      this.kind = ''
    }

  }
}
</script>

<style lang="scss" scoped>
  .m-menu{
    width: 230px;
    height: 475px;
    background: -webkit-linear-gradient(-90deg,rgba(2,181,157,.85) 2%,rgba(22,146,183,.85) 100%);
    position: relative;
    top: -50px;
    .nav{
      dl{
        dt{
          width: 230px;
          height: 50px;
          font-size: 16px;
          font-weight: 400;
          padding: 10px 0px 10px 10px;
          box-sizing: border-box;
          color: #fff;
          margin-bottom: 10px;
          line-height: 32px;
        }
        dd{
          padding: 5px 0px;
          position: relative;
          &:hover{
             background: rgba(255, 255, 255, .2);
          }
          i{
            font-family: 'meituan';
            font-size: 14px;
            font-style: normal;
            opacity: 0.3;
            margin-right: 6px;
            margin-left: 12px;
            &:before {
              width: 14px;
              height: 14px;
              display: inline-block;
            }
          }

          .food {
            &:before {
              content: "\e622";
            }
          }

          .takeout {
            &:before {
              content: "\e630";
            }
          }

          .hotel {
            &:before {
              content: "\e62a";
            }
          }

          .homestay {
            &:before {
              content: "\e631";
            }
          }

          .movie {
            &:before {
              content: "\e62c";
              position: relative;
              left: -2px;
            }
          }

          .airport {
            &:before {
              content: "\e632";
            }
          }

          .ktv {
            &:before {
              content: "\e627";
            }
          }

          .life {
            &:before {
              content: "\e633";
            }
          }

          .hair {
            &:before {
              content: "\e626";
              transform: scale(0.7);
            }
          }

          .marry {
            &:before {
              content: "\e629";
            }
          }

          .offspring {
            &:before {
              content: "\e623";
            }
          }

          .sport {
            &:before {
              content: "\e62b";
            }
          }

          .furniture {
            &:before {
              content: "\e625";
            }
          }

          .study {
            &:before {
              content: "\e624";
            }
          }

          .health {
            &:before {
              content: "\e628";
            }
          }

          .bar {
            &:before {
              content: "\e621";
            }
          }

        .arrow {
          width: 4px;
          height: 4px;
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
          a{
            color: #fff;
          }
        }
      }
      .detail{
        width: 400px;
        height: 420px;
        background: #fff;
        box-shadow: 0px 3px 5px 0px rgba(0,0,0,.1);
        position: absolute;
        box-sizing: border-box;
        left: 230px;
        top: 50px;
        z-index: 20;
        padding: 18px 20px;
        h2{
          color: #222;
          cursor: pointer;
          text-align: left;
          border-bottom: 1px solid #E5E5E5;
          padding: 0px 0px;
          overflow: hidden;
          a{
            position: relative;
            float: right;
            margin-right: 7px;
            color: #999;
            margin-top: 5px;
            .arrow{
              width: 4px;
              height: 4px;
              border-bottom: 1px solid #999;
              border-right: 1px solid #999;
              transform: rotate(-45deg);
              display: block;
              position: absolute;
              left: 24px;
              top: 5px;
              bottom: 0;
            }
          }

        }
        a{
          color: #999;
          margin-top: 10px;
          margin-bottom: 15px;
          display: inline-block;
          margin-right: 3px;
          &:hover{
            color: #13D1BE;
          }
        }
      }
    }
  }
</style>


