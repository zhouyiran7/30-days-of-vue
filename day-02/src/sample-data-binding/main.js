new Vue({
  el: '#app',
  data: {
    greeting: 'Hello World!',
    user: 'Hassan Djirden',
    city: 'Toronto',
  },
  methods: {
    changeGreeting() {
      this.greeting =
        this.greeting === 'Hello World!' ? 'What is up!' : 'Hello World!';
    },
  },
});
