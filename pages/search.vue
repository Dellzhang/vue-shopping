<template>
  <div class="m-search">
    <div class="title">郑州美团>土大力拌饭名家（王府井店）</div>
    <div class="box">
      <div class="left">
        <search-slide/>
        <search-commen/>
      </div>
      <div class="right">
        <search-plat/>
        <detail-aside/>
      </div>
    </div>
    <search-nav/>
  </div>
</template>

<script>
import SearchSlide from '../components/search/slide'
import SearchCommen from '../components/search/commen'
import SearchPlat from '../components/search/plat'
import DetailAside from '../components/detail/aside'
import SearchNav from '../components/search/nav'
export default {
  components: {
    SearchSlide,
    SearchCommen,
    SearchPlat,
    DetailAside,
    SearchNav
  }
}
</script>

<style lang="scss" scoped>
  .m-search{
    .title{
      font-size: 12px;
      color: #222;
      padding: 19px 0px;
      line-height: 17px;
    }
    .box{
      display: flex;
      .left{
        width: 80%;
        margin-right: 10px;
      }
    }
  }
  .m-search /deep/ .detail-aside{
    margin-top: 0px;
  }
</style>