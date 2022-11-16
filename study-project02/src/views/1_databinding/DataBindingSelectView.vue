<template>
  <div>
    <select v-model="selectedCity">
      <option value=""></option>
      <option value="02">서울</option>
      <option value="031">경기</option>
      <option value="051">부산</option>
    </select>
    <p>{{ selectedCity }}</p>
  </div>
</template>
<script>
export default {
  name: 'bindingSelect',
  components: {},
  data() {
    return {
      selectedCity: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
