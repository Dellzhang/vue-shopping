<template>
  <div class="m-geo">
    <i class="el-icon-location"></i>{{city}}
    <nuxt-link to="/ChangeCity">切换城市</nuxt-link>
    <span>[新郑 中牟 新密]</span>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['city'])
  },
  mounted(){
    if(localStorage.city){
      this.$store.commit('changeCity',localStorage.city)
    }
  }
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
      &:hover{
        color: #41B883
      }
    }
  }
</style>


