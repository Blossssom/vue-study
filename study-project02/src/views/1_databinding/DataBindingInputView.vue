<template>
  <div>
    <input type="text" v-model="userId" placeholder="Input text data" />
    <button @click="clickHandler">Click</button>
    <br />
    <input type="text" v-model.number="num1" /> +
    <input type="text" v-model.number="num2" /> =
    <span>{{ num1 + num2 }}</span>

    <!-- <input type="text" :value="userName" readonly>
    <img :src="imgSrc" alt="sparkle img"> -->
    <br />

    <input type="text" v-model="disabledText">
    <button :disabled="disabledText === ''">search</button>
  </div>
</template>
<script>
export default {
  name: 'bindingInput',
  components: {},
  data() {
    return {
      userName: 'bloxxom',
      userId: '',
      num1: 0,
      num2: 0,
      imgSrc: 'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/174x/image/pye3SMRLg7SSRbNzsolx25cyu9U.JPG',
      disabledText: ''
    }
  },
  setup() { },
  created() { },
  mounted() { },
  unmounted() { },
  methods: {
    clickHandler() {
      console.log(this.userId)
    }
  }
}
</script>
