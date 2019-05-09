<template>
 <el-container>
  <div class="header">
    <div class="bac">
        <el-header style="height: 40px">
          <my-header/>
        </el-header>
    </div>
  </div>
  <el-main>
    <nuxt/>
  </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
import MyHeader from '@/components/header/index.vue'
export default {
  components: {
    MyHeader
  }
}
</script>

