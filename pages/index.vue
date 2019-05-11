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
      3
    </el-row>
  </div>
</template>

<script>
import IndexMenu from '../components/index/menu'
import IndexSlide from '../components/index/slide'
export default {
  components: {
    IndexMenu,
    IndexSlide
  }
}
</script>

<style lang="scss">
</style>
