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
      <el-col :span="24">
        <index-cheap/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <index-mao/>
      </el-col>
      <el-col :span="24">
        <index-love/>
      </el-col>
      <el-col :span="24">
        <index-nav/>
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
import IndexLove from '../components/index/love'
import IndexCheap from '../components/index/cheap'
import IndexNav from '../components/index/nav'
export default {
  components: {
    IndexMenu,
    IndexSlide,
    IndexArtistic,
    IndexMao,
    IndexCheap,
    IndexLove,
    IndexNav
  },
  async fetch ({ store, params }) {
    let [result1,result2,result3,result4,result5,result6,result7] = await Promise.all([
      axios.get('http://localhost:4000/get/menu'),
      axios.get('https://zz.meituan.com/ptapi/getScenesList?theme=quality&tab=all&ci=73&limit=10'),
      axios.get('https://zz.meituan.com/ptapi/getHotFilms?ci=73&limit=10'),
      axios.get('https://zz.meituan.com/ptapi/getComingFilms?ci=73&limit=10'),
      axios.get('https://zz.meituan.com/ptapi/recommends'),
      axios.get('https://zz.meituan.com/ptapi/getScenesList?theme=cheap&tab=all&ci=73&limit=20'),
      axios.get('http://localhost:4000/get/navlist')
    ])
    store.commit('setMenu',result1.data)
    store.commit('setShow',result2.data)
    store.commit('setHotFilms',result3.data.data)
    store.commit('setComingFilms',result4.data.data)
    store.commit('setRecommend',result5.data)
    store.commit('setCheap',result6.data)
    store.commit('setNav',result7.data)
  },
}
</script>

<style lang="scss">
</style>
