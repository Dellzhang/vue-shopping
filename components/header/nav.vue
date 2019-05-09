<template>
  <div class="m-nav">
    <ul class="list">
      <li class="has-child">
        <nuxt-link to="/my" class="my">我的美团</nuxt-link>
        <dl class="show">
          <dd>
            <nuxt-link to="/app">我的订单</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/app">我的收藏</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/app">抵用卷</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/app">账户设置</nuxt-link>
          </dd>
        </dl>
      </li>
      <li class="has-app">
        <nuxt-link to="/my">手机APP</nuxt-link>
      </li>
      <li class="has-child">
        <nuxt-link to="/my">商家中心</nuxt-link>
        <dl class="shapp show">
          <dd>
            <nuxt-link to="/app">登录商家中心</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/app">美团智能收银</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/app">我想合作</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/app">手机免费开店</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/app">餐饮代理商招募</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/app">商家申请开票</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/app">免费合作美团排队</nuxt-link>
          </dd>
        </dl>
      </li>
      <li class="has-child last-child">
        <nuxt-link to="/my">网站导航</nuxt-link>
        <div class="jiu">
            <dl class="show header-nav-jiu">
              <dt>酒店旅游</dt>
              <dd>
                <nuxt-link to="/app">国际机票</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="/app">火车票</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="/app">榛果民宿</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="/app">经济型酒店</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="/app">主题酒店</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="/app">商务酒店</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="/app">公寓</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="/app">豪华酒店</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="/app">客栈</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="/app">青年旅社</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="/app">度假酒店</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="/app">别墅</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="/app">农家院</nuxt-link>
              </dd>
            </dl>
            <dl class="show header-nav-jiu">
              <dt>吃美食</dt>
              <dd>
                <nuxt-link to="/app">烤鱼</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="/app">火车票</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="/app">特色小吃</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="/app">烧烤</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="/app">自助餐</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="/app">火锅</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="/app">代金券</nuxt-link>
              </dd>
            </dl>
            <dl class="show header-nav-jiu travel">
              <dt>看电影</dt>
              <dd>
                <nuxt-link to="/app">热映电影</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="/app">热门影院</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="/app">热映电影口碑榜</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="/app">最受期待电影</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="/app">国内票房榜</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="/app">北美票房榜</nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="/app">电影排行榜</nuxt-link>
              </dd>
              <dd class="last-dd">
                <nuxt-link to="/app">豪华酒店</nuxt-link>
              </dd>
            </dl>
            <dl class="show header-nav-jiu dl-img">
              <dt>手机应用</dt>
              <dd>
               <nuxt-link to="/app">
                <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png" alt="美团app" title="美团app">
               </nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="/app">
                  <img src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png" alt="外卖app" title="外卖app">
                </nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="/app">
                  <img src="//s0.meituan.net/bs/fe-web-meituan/404d350/img/appicons/zhenguo.png" alt="榛果app" title="榛果app">
                </nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="/app">
                  <img src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png" alt="点评app" title="点评app"/>
                </nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="/app">
                  <img src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png" alt="猫眼app" title="猫眼app">
                </nuxt-link>
              </dd>
            </dl>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
    
}
</script>

<style lang="scss" scoped>
  .m-nav{
    float: right;
    .list{
      list-style: none;
      // overflow: hidden;
      li{
        float: left;
        cursor: pointer;
      }
      a{
        color: #999;
        &:hover{
          color: #41B883;
          transition: 0.1s
        }
      }
      
      .has-child:hover{
        background: #fff;
        border-color: #e5e5e5;
        box-shadow: 0px 3px 5px 0px rgba(0,0,0,.1);
        
      }
      .last-child:hover{
          box-shadow: 0px 3px 5px 0px rgba(0,0,0,.1);
        }
      .show{
        display: none;
        box-shadow: 0px 3px 5px 0px rgba(0,0,0,.1);
      }
      .has-child:hover .show{
        display: block;
        background: #fff;

      }
      .has-app{
        height: 40px;
        padding: 12px 14px;
      }
      .has-child{
        // z-index: 99;
        position: relative;
        height: 40px;
        padding: 12px 14px;
        box-sizing: border-box;
        border-left: 1px solid transparent;
        border-right: 1px solid transparent;
        dl{
          z-index:99;
          position: absolute;
          top: 40px;
          width: 76px;
          left: 0px;
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
          &.shapp{
             width: 130px;
             left: -54px;
          }
          &.header-nav-jiu{
            box-sizing: border-box;
            border-top-left-radius: 4px;
            padding: 30px 36px 36px 47px;
          
          }
        }
        .jiu{
            width: 1190px;
            left: -1114px;
            z-index: 99;
            top: 40px;
            position: absolute;
            box-sizing: border-box;
            background: #fff;
            border-left: 1px solid transparent;
            border-right: 1px solid transparent;
            box-shadow: 0px 3px 5px 0px rgba(0,0,0,.1);
            dl{
              width: 234px;
              top:0;
              position:static;
              float: left;
              padding: 0px;
              border: none;
              box-shadow: none;
              margin-right: 30px;
              margin-left: 10px;
              margin-top: 30px;
              dt{
                color: #41B883;
                text-align: center;
                margin-bottom: 20px;
              }
              dd{
                width: 33%;
                float: left;
                padding: 5px 0px;
                text-align: center;
              }
              &.travel > dd{
                float: none;
                width: 100%;
                &.last-dd{
                  margin-bottom: 20px;
                }
              }
              &.dl-img{
                width: 340px;
                margin-right: 0px;
                dd{
                  width: 17%;
                  margin-right: 10px;
                  img{
                    width: 60px;
                    height: 60px;
                }
                }
              }
            }
          }
        dd{
          padding: 10px 14px;
        }
      }

    }
  }
</style>


