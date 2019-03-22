<template>
  <div>
    <h1 class="title">
      {{ getName }}
    </h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      msg: 'hello'
    }
  },

  computed: {
    ...mapGetters(['getName'])
  }
}
</script>

<style lang="less" scoped>
.titlt {
  color: red;
}
</style>
