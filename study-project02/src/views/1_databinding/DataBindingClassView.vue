<template>
  <div>
    <div :class="{ text_red: hasError, active: isActive }">Class Binding1</div>
    <div :class="listClass">Class Binding2</div>
    <button @click="activeClickHandler">active</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      hasError: true,
      listClass: ['active', 'text_red']
    }
  },
  methods: {
    activeClickHandler() {
      this.isActive = !this.isActive
      this.hasError = !this.hasError
    }
  }
}
</script>

<style scoped>
.active {
  color: violet;
  font-weight: bold;
}

.text_red {
  color: red;
}
</style>
