new Vue({
  el: '#app',
  data: {
    greeting: '', // greeting is initialized
    user: 'Hassan Djirdeh',
    city: 'Toronto',
  },
  methods: {
    addGreeting() {
      // greeting can now be updated!
      this.greeting = 'Hello World!';
    },
  },
});
