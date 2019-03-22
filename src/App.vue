<template>
  <div>
    <img src="./assets/img/logo.jpg" alt="logo" class="logo">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  mounted () {
    console.log('hello world')
  }
}
</script>

<style lang="less" scoped>
.logo {
  width: 100%;
  overflow: hidden;
}
</style>
