_.extend(Diplomacy.Game, {

  addOrder: function(position, order) {
    // position is the current position to start from
    // order is the type and target of the order

    check(position, String);
    check(order, {
      directive: String,
      destination: String,
      nation: Match.Optional(String),
    });

    var pos = Diplomacy.Game._collections.Positions.findOne({_id: position});

    var exist = Diplomacy.Game._collections.Orders.findOne({position: position, processed: false})

    if (!pos)
      return false;

    if (exist)
      return false;

    order.timestamp = new Date().getTime();
    order.processed = false;
    order.game_id = pos.game_id;
    order.position = position;
    order.user_id = Meteor.userId();

    Diplomacy.Game._collections.Orders.insert(order);

  },
  cancelOrder: function(id) {
    // position is the current position to start from
    // order is the type and target of the order

    check(id, String);

    var order = Diplomacy.Game._collections.Orders.findOne({_id: id});

    if (!order)
      return false;

    if (order.processed)
      return false;

    if (order.user_id !== Meteor.userId())
      return false;

    Diplomacy.Game._collections.Orders.remove(id);

  }

});
