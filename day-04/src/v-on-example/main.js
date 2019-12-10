new Vue({
  el: '#app',
  data: {
    greeting: 'Hello World!',
    alertMessage: '',
  },
  methods: {
    changeGreeting() {
      this.greeting =
        this.greeting === 'Hello World!' ? 'What is up!' : 'Hello World!';
    },
    alertMessageGreeting() {
      this.greeting = 'You typed something';
    },
    alertEnterGreeting() {
      this.greeting = 'You typed and pressedd Enter!';
    },
  },
});
