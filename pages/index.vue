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
  }
}
</script>

<style lang="scss">
</style>
