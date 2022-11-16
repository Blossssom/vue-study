<template>
  <div>
    <div>
      <input
        type="checkbox"
        name=""
        id="html"
        value="html"
        v-model="selectLanguage"
      />
      <label for="html">HTML</label>
    </div>
    <div>
      <input
        type="checkbox"
        name=""
        id="css"
        value="css"
        v-model="selectLanguage"
      />
      <label for="css">CSS</label>
    </div>
    <div>
      <input
        type="checkbox"
        name=""
        id="js"
        value="js"
        v-model="selectLanguage"
      />
      <label for="js">JAVASCRIPT</label>
    </div>
  </div>
</template>
<script>
export default {
  name: 'bindingCheckBox',
  components: {},
  data() {
    return {
      selectLanguage: []
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
