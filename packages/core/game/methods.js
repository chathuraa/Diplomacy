Meteor.methods({
  "game:addOrder": function(position, order) {

    if (!this.userId)
      return false;

    return Diplomacy.Game.addOrder(position, order)
  },

  "game:cancelOrder": function(id) {

    if (!this.userId)
      return false;

    return Diplomacy.Game.cancelOrder(id)
  },

  "games:newGame": function() {
    if (!this.userId)
      return false;

    var positions = [
      {nation: 'England', type: 'F', province: 'LON'},
      {nation: 'England', type: 'F', province: 'EDI'},
      {nation: 'England', type: 'A', province: 'LVP'},

      {nation: 'Germany', type: 'A', province: 'BER'},
      {nation: 'Germany', type: 'A', province: 'MUN'},
      {nation: 'Germany', type: 'F', province: 'KIE'},

      {nation: 'Russia', type: 'A', province: 'MOS'},
      {nation: 'Russia', type: 'A', province: 'WAR'},
      {nation: 'Russia', type: 'F', province: 'STP-S'},
      {nation: 'Russia', type: 'F', province: 'SEV'},

      {nation: 'Turkey', type: 'A', province: 'CON'},
      {nation: 'Turkey', type: 'A', province: 'SMY'},
      {nation: 'Turkey', type: 'F', province: 'ANK'},

      {nation: 'Austria', type: 'A', province: 'VIE'},
      {nation: 'Austria', type: 'A', province: 'BUD'},
      {nation: 'Austria', type: 'F', province: 'TRI'},

      {nation: 'Italy', type: 'A', province: 'ROM'},
      {nation: 'Italy', type: 'A', province: 'VEN'},
      {nation: 'Italy', type: 'F', province: 'NAP'},

      {nation: 'France', type: 'A', province: 'PAR'},
      {nation: 'France', type: 'A', province: 'MAR'},
      {nation: 'France', type: 'F', province: 'BRE'},
    ];

    var id = Diplomacy.Game._collections.Games.insert({
      timestamp: new Date().getTime(),
      players: [this.userId],
      started: false
    });

    _.each(positions, function(pos) {
      pos.game_id = id;
      pos.timestamp = new Date().getTime();
      Diplomacy.Game._collections.Positions.insert(pos);
    });

  }
})
