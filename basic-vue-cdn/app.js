Vue.createApp({
  // vue 에서 어떤 데이터를 사용할지 설정

  // data property : vue가 인식해야할 데이터 지정
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },

  // methods : 데이터 로직 객체
  methods: {
    addGoals() {
      this.goals.push(this.enteredValue);
    },
  },
}).mount("#app");
