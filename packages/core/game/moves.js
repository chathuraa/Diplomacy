_.extend(Diplomacy.Game, {

  calculateMoves: function(position) {
    var pos = Diplomacy.Game._collections.Positions.findOne({_id: position});

    if (!pos)
      return false;

    var prov = Diplomacy.Map.getProvinceByAbbreviation(pos.province);

    if (!prov)
      return false;

    var moves = Diplomacy.Map.getProvinceConnectionsForType(pos.province, pos.type);

    console.log("Moves:", pos.province, pos.type)
    return moves;

  },

  calculateAllMoves: function() {

    var positions = Diplomacy.Game._collections.Positions.find().fetch();

    _.each(positions, function(pos) {
      // each item on the board

      // all the possible moves for the piece
      var provincesCanMove = Diplomacy.Map.getProvinceConnectionsForType(pos.province, pos.type);

      // simplified move list array for the record
      positionMoves = _.map(provincesCanMove, function(move) {
        if (move) {
          var rec = {
            name: move.name,
            abbreviation: move.abbreviation,
            type: move.type
          };
          return rec;
        }
      });

      var supp = [];
      var support = [];

      // for each can move
      _.each(provincesCanMove, function(move) {
        //find positions that can move to it
        var canMoveToProvince = Diplomacy.Map.getProvinceConnectionsList(move.abbreviation);
        var positions = Diplomacy.Game.findPositionsByProvinces(_.map(canMoveToProvince, function(p) { return p.province; }));

        if (positions && positions.length > 0) {
          _.each(positions, function(p) {
            // skip if it is the current province
            if (p.province === pos.province)
              return;

            var thisMove = {type: p.type, from: p.province, to: move.abbreviation};
            
            if (Diplomacy.Map.isValidConnection(thisMove.from, thisMove.to, p.type)) {
              if (!supp[p.nation])
                supp[p.nation] = [thisMove]
              else
                if(!_.contains(supp[p.nation], thisMove));
                  supp[p.nation].push(thisMove);
            }
          });

        }

      });

      _.each(_.keys(supp), function(k) {
        var current = supp[k];
        console.log(k,current);
        var rec = {nation: k, for: current};
        support.push(rec);
      });

      Diplomacy.Game._collections.Positions.update({_id: pos._id}, {$set: {moves: positionMoves, support: support, new: false}})
    });
  },

  isValidMove: function(from, to, type) {

  }
});
