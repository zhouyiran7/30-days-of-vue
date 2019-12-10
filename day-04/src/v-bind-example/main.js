new Vue({
  el: '#app',
  data: {
    greeting: 'Hello World!',
    pros: 'Fata',
    team: 'Alliance',
    teamImage:
      'https://steamcdn-a.akamaihd.net/apps/dota2/images/team_logos/111474.png',
  },
  methods: {
    changeTeam() {
      if (this.team == 'Alliance') {
        this.teamImage =
          'https://steamcdn-a.akamaihd.net/apps/dota2/images/team_logos/6214538.png';
        this.team = 'Newbee';
      } else if (this.team == 'Newbee') {
        this.teamImage =
          'https://steamcdn-a.akamaihd.net/apps/dota2/images/team_logos/111474.png';
        this.team = 'Alliance';
      }
    },
  },
});
