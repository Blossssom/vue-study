<template>
  <div>
    <input
      type="search"
      name=""
      id=""
      v-model="searchText"
      @keyup.stop.enter="checkEnter($event)"
    />
    <button @click="doSearch">Search</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: ''
    }
  },
  methods: {
    doSearch() {},
    checkEnter(event) {
      console.log(event.target.value)
      //   if (event.keyCode === 13) {
      //     console.log(event.target.value)
      //   }
    }
  }
}
</script>

<style></style>
