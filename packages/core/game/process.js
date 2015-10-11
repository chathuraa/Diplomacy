_.extend(Diplomacy.Game, {

  processOrders: function(game_id) {

    var orders = Diplomacy.Game._collections.Orders.find({game_id: game_id, processed: false}).fetch();

    _.each(orders, function(order) {
      console.log(order);
      if (order.directive === "move") {
        Diplomacy.Game._collections.Positions.update({_id: order.position}, {$set: {province: order.destination, moves: [], support: [], new: true}})
        Diplomacy.Game._collections.Orders.update({_id: order._id}, {$set: {processed: true}});
      }
    });

  }


});
