//var params = Router.current().params;
//var route = Router.current().route.getName();

Template.games_game.onCreated(function() {
  var instance = this;

  var params = Router.current().params;

  instance.subscribe('game', params._id);
  instance.subscribe('game_positions', params._id);
  instance.subscribe('game_orders', params._id);

});

Template.games_game.onRendered(function() {
  var instance = this;

});

Template.games_game.helpers({
  positions: function() {
    var params = Router.current().params;
    return Diplomacy.Game._collections.Positions.find({game_id: params._id})
  }
});

Template.games_game.events({

});
