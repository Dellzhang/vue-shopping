<template>
  <div class="index-page">
    <el-row>
      <el-col :span="5">
        <index-menu/>
      </el-col>
      <el-col :span="19">2</el-col>
    </el-row>
    <el-row>
      3
    </el-row>
  </div>
</template>

<script>
import IndexMenu from '../components/index/menu'
export default {
  components: {
    IndexMenu
  }
}
</script>

<style lang="scss">
</style>
