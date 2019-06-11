<template>
  <div class="m-plat">
    <baidu-map class="map" ak='64477a996d04fe75cc3252d164f86824' :scroll-wheel-zoom="true" center="郑州" :zoom="zoom">
    </baidu-map>
    <span @click="showClick">
      <i class="el-icon-zoom-in"></i>
    </span>
  </div>
</template>

<script>
import BaiduMap from 'vue-baidu-map/components/Map/Map.vue'
export default {
  data () {
    return {
      zoom: 0,
    }
  },
  components: {
    BaiduMap
  },
  methods: {
    showClick (){
      this.$store.commit('showMap',true)
    }
  }
}
</script>

<style lang="scss" scoped>
  .m-plat{
    margin-bottom: 10px;
    margin-left: 10px;
    position: relative;
    .map{
      width: 230px;
      height: 220px;
      border-radius: 8px;
    }
    span{
      position: absolute;
      display: block;
      width: 45px;
      height: 35px;
      background: #000;
      opacity: .6;
      border-radius: 40px;
      text-align: center;
      line-height: 40px;
      right: 10px;
      bottom: 10px;
      cursor: pointer;
      i{
        color: #fff;
        font-size: 24px;
      }
    }
  }
</style>