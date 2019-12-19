new Vue({
  el: '#app',
  data: function() {
    return {
      km: 0,
    };
  },
  computed: {
    m: {
      get() {
        return this.km * 1000;
      },
      set(newValue) {
        this.km = newValue / 1000;
      },
    },
  },
});
