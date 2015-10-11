_.extend(Diplomacy.Map, {

  addNation: function(name) {
    check(name, String);
    var exist = this._collections.Nations.findOne({name: name});
    if (!exist)
      return this._collections.Nations.insert({name: name});
  },

  addProvincesToNation: function(name, abbreviations) {
    check(name, String);
    check(abbreviations, NonEmptyArray);

    var exist = this._collections.Nations.findOne({name: name});
    if (!exist)
      return {error: true, message: 'Nation does not exist'};

    return this._collections.Provinces.update(
      {abbreviation: {$in: abbreviations}},
      {$set: {nation: {_id: exist._id, name: exist.name}}},
      {multi:true}
    );
  }
  
});
