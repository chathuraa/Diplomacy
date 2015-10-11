Template.countDownClock.helpers({
  countdown: function() {

    return moment.duration(Session.get('countdown'),
      's').format("mm:ss");
  },
  countDownColor: function() {
    var color = 'white';
    switch (true) {
      case (Session.get('countdown') < 30):
        color = '#E57373';
        break;
      case (Session.get('countdown') >= 30 && Session
        .get('countdown') < 90):
        color = '#FFB74D';
        break;
      case (Session.get('countdown') >= 90):
        color = 'white';
        break;
    }
    return color;
  }
});
