<template>
    <div class="m-user">
        <template v-if="user">
          {{user}}
          [<nuxt-link to="/exit">退出</nuxt-link>]
        </template>
        <template v-else>
            <nuxt-link to="/login">立即登录</nuxt-link>
             <nuxt-link to="/register">注册</nuxt-link>
        </template>
    </div>
</template>

<script>
export default {
  data () {
    return {
      user: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .m-user{
    height: 40px;
    box-sizing: border-box;
    padding: 12px 14px;
  }
</style>



