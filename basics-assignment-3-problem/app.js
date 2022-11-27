const app = Vue.createApp({
  data() {
    return {
      resultNum: 0,
    };
  },
  methods: {
    increaseNumber(value) {
      this.resultNum += value;
    },
  },
  computed: {
    outputResult() {
      if (this.resultNum > 37) {
        return "Too much!";
      } else if (this.resultNum < 37) {
        return "Not there yet";
      } else {
        return this.resultNum;
      }
    },
  },
  watch: {
    resultNum() {
      setTimeout(() => {
        this.resultNum = 0;
      }, 5000);
    },
  },
});

app.mount("#assignment");
