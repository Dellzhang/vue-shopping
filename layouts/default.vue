<template>
  <div class="bac">
    <el-container>
      <el-header style="height: 40px">
        <my-header/>
      </el-header>
      <el-main>
        <nuxt/>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import MyHeader from '@/components/header/index.vue'
export default {
  components: {
    MyHeader
  }
}
</script>

