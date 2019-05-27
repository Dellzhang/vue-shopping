<template>
  <div class="index-page">
    <el-row>
      <el-col :span="5">
        <index-menu/>
      </el-col>
      <el-col :span="19">
        <index-slide/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <index-artistic/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <index-mao/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'
import IndexMenu from '../components/index/menu'
import IndexSlide from '../components/index/slide'
import IndexArtistic from '../components/index/artistic'
import IndexMao from '../components/index/maoyan'
export default {
  components: {
    IndexMenu,
    IndexSlide,
    IndexArtistic,
    IndexMao
  },
  async fetch ({ store, params }) {
    let [result1,result2] = await Promise.all([
      axios.get('http://localhost:4000/get/menu'),
      axios.get('https://zz.meituan.com/ptapi/getScenesList?theme=quality&tab=all&ci=73&limit=10')
    ])
    store.commit('setMenu',result1.data)
    store.commit('setShow',result2.data)
      
  }
}

</script>

<style lang="scss">
</style>
