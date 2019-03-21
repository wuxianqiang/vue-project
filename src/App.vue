<template>
  <div>
    <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from 'components/HelloWorld'

export default {
  components: {
    HelloWorld
  },
  mounted () {
    console.log('hello world')
  }
}
</script>

