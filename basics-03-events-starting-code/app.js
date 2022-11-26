const app = Vue.createApp({
  data() {
    return {
      counter: 5,
      name: "",
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
    addFirstName() {
      console.log("running computed");
      return this.name === "" ? "" : this.name + " bloxxom";
    },
  },
});

app.mount("#events");
