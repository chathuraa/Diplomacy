_.extend(Diplomacy.Game, {

  findPositionsByProvinces: function(provinces) {
    // get a list of any active positions on the provided province array
    check(provinces, Array);
    var result = [];

    _.each(provinces, function(province) {
      var exist = Diplomacy.Game._collections.Positions.findOne({province: province});
      if (exist) {
        delete exist.moves;
        delete exist.support;
        result.push(exist);
      }
      
    });

    return result;
  }

});
