Diplomacy.Game = {};

Diplomacy.Game._collections = {
  Games: new Mongo.Collection("games"),
  Orders: new Mongo.Collection("game_orders"),
  Positions: new Mongo.Collection("game_positions")
};
