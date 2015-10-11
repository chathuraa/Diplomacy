//var params = Router.current().params;
//var route = Router.current().route.getName();

Template.games_lobby.onCreated(function() {
  var instance = this;

});

Template.games_lobby.onRendered(function() {
  var instance = this;

});

Template.games_lobby.helpers({
  yourGames: function() {
    return Diplomacy.Game._collections.Games.find({players: Meteor.userId()});
  },
  openGames: function() {
    return Diplomacy.Game._collections.Games.find({players: {$ne: Meteor.userId()}, started: false});   
  }
});

Template.games_lobby.events({

});
