const app = Vue.createApp({
  data() {
    return {
      boxA: false,
      boxB: false,
      boxC: false,
    };
  },
  methods: {
    selectBox(selectItem) {
      switch (selectItem) {
        case "A":
          this.boxA = true;
          break;
        case "B":
          this.boxB = true;
          break;
        case "C":
          this.boxC = true;
          break;
      }
    },
  },
});

app.mount("#styling");
