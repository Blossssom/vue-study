const app = Vue.createApp({
  data() {
    return {
      alertText: "alert On!!",
      inputTextFirst: "",
      inputTextSecond: "",
    };
  },
  methods: {
    clickAlertHandler() {
      alert(this.alertText);
    },
    setParagraphEnter(event) {
      this.inputTextSecond = event.target.value;
    },
    setParagraphKey(event) {
      this.inputTextFirst = event.target.value;
    },
  },
});

app.mount("#app");
