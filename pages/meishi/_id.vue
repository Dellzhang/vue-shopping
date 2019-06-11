<template>
  <div class="m-detail">
    <div class="title">郑州美团>郑州美食>日韩料理</div>
    <detail-info/>
    <div class="btm-cont ">
      <div class="btm-left">
        <detail-shop></detail-shop>
        <detail-discounts/>
        <detail-recommend/>
        <detail-comment/>
      </div>
      <div class="btn-right">
        <detail-aside/>
      </div>
    </div>
    <detail-bottom/>
  </div>
</template>

<script>
import axios from 'axios'
import cheapCale from '../../assets/api/cheapCale'
import DetailAside from '../../components/detail/aside'
import DetailShop from '../../components/detail/shop'
import DetailInfo from '../../components/detail/info'
import DetailDiscounts from '../../components/detail/discounts'
import DetailRecommend from '../../components/detail/recommend'
import DetailComment from '../../components/detail/comment'
import DetailBottom from '../../components/detail/bottom'
export default {
  components: {
    DetailAside,
    DetailShop,
    DetailInfo,
    DetailDiscounts,
    DetailRecommend,
    DetailComment,
    DetailBottom
  }
}
</script>

<style lang="scss" scoped>
  .m-detail{
    .title{
      font-size: 12px;
      color: #222;
      padding: 19px 0px;
      line-height: 17px;
    }
    .btm-cont{
      display: flex;
      .btm-left{
        width: 80%;
      }
    }
  }
</style>