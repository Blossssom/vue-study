const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Good job, Finish!!!",
      vueLink:
        "https://vuejs.org/guide/essentials/application.html#mounting-the-app",
    };
  },
  methods: {},
});

app.mount("#user-goal");
