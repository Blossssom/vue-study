<template>
  <div :style="style1">Style Binding : color = red, font-size = 30px</div>
  <button @click="style1.color = 'violet'">Change</button>
</template>

<script>
export default {
  data() {
    return {
      style1: {
        color: 'red',
        fontSize: '30px'
      }
    }
  }
}
</script>

<style scoped></style>
