new Vue({
  el: '#app',
  data: function() {
    return {
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
    };
  },
  methods: {
    submitForm() {
      console.log('name', this.ruleForm.name);
      console.log('region', this.ruleForm.region);
      console.log('type', this.ruleForm.type);
    },
  },
});
