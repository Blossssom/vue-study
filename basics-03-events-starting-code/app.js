const app = Vue.createApp({
  data() {
    return {
      counter: 1,
      name: "",
      lastName: "",
      fullName: "",
    };
  },
  methods: {
    increaseCounter() {
      this.counter += 1;
    },
    setName(event) {
      this.name = event.target.value;
    },
    resetInput() {
      this.name = "";
    },
  },
  computed: {
    getFullName() {
      console.log("running computed");
      return this.name === "" || this.lastName === ""
        ? ""
        : this.name + ` ${this.lastName}`;
    },
  },
  watch: {
    counter(value) {
      if (value > 5) {
        setTimeout(() => {
          this.counter = 0;
        }, 2000);
      }
    },
  },
});

app.mount("#events");
