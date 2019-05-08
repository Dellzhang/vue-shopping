<template>
  <div class="m-geo">
    <i class="el-icon-location"></i>郑州
    <nuxt-link to="/changCity">切换城市</nuxt-link>
    <span>[新郑 中牟 新密]</span>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
  .m-geo{
    height: 40px;
    padding: 12px 14px;
    box-sizing: border-box;
    color: #999;
    a{
      color: #666;
    }
  }
</style>


