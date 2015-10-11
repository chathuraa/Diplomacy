Router.route('/lobby', function () {
  this.render('games_lobby');
});


Router.route('/game/:_id', {
  name: "game",
  action: function () {
    this.render('games_game');
  }
});
