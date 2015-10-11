Diplomacy.Map = {};

Diplomacy.Map._collections = {
  Provinces: new Mongo.Collection("map_provinces"),
  Connections: new Mongo.Collection("map_connections"),
  Nations: new Mongo.Collection("map_nations")
};
