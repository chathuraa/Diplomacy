Meteor.publish("games", function() {
  // Display games you are currently playing or open games
  if (!this.userId)
    return [];
  else
    return Diplomacy.Game._collections.Games.find({$or: [{players: this.userId}, {started: false}]});
});

Meteor.publish("game", function(id) {
  console.log('publish game', id);
  //  Return all the settings for the selected game
  if (!this.userId)
    return [];
  else
    return Diplomacy.Game._collections.Games.find({_id: id})
});

Meteor.publish("game_positions", function(id) {
  console.log('publish game_positions', id);
  //  Return all the positions for the current move
  if (!this.userId)
    return [];
  else
    return Diplomacy.Game._collections.Positions.find();
});

Meteor.publish("game_orders", function(id) {
  console.log('publish game_orders', id);
  //  Manage the current orders for the game and player
  if (!this.userId)
    return [];
  else
    return Diplomacy.Game._collections.Orders.find({user_id: this.userId});
});
