<template>
  <div>
    <input type="text" v-model="userId" placeholder="Input text data" />
    <button @click="clickHandler">Click</button>
    <br />
    <input type="text" v-model.number="num1" /> +
    <input type="text" v-model.number="num2" /> =
    <span>{{ num1 + num2 }}</span>
  </div>
</template>
<script>
export default {
  name: 'bindingInput',
  components: {},
  data() {
    return {
      userId: '',
      num1: 0,
      num2: 0
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    clickHandler() {
      console.log(this.userId)
    }
  }
}
</script>
