<template>
  <div>
    <h1>{{ userName }}</h1>
    <p>{{ str }}</p>
    <p>{{ clickEventHandler() }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: 'Bloxxom',
      str: ''
    }
  },
  methods: {
    clickEventHandler: () => {
      return 'hello!'
    }
  }
}
</script>

<style scoped>
/* scoped : 해당 template에만 적용되는 css */
</style>
