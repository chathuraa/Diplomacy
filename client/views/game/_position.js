//var params = Router.current().params;
//var route = Router.current().route.getName();

Template.game_position.onCreated(function() {
  var instance = this;

});

Template.game_position.onRendered(function() {
  var instance = this;

});

Template.game_position.helpers({
  orders: function() {
    var params = Router.current().params;
    return Diplomacy.Game._collections.Orders.find({game_id: params._id, processed: false})
  },
  positionOrder: function(id) {
    var params = Router.current().params;
    return Diplomacy.Game._collections.Orders.findOne({game_id: params._id, position: id, processed: false})
  }
});

Template.game_position.events({
  'click #selectOrderSupport': function(e,t) {
    var support = t.$("#support_"+this._id).val();
    console.log("support", this._id, support);

    Meteor.call('game:addOrder', this._id, {directive: 'support', destination: support, nation: this.nation})
  },
  'click #selectOrderMove': function(e,t) {
    var move = t.$("#move_"+this._id).val();
    console.log("move", this._id, move);

    Meteor.call('game:addOrder', this._id, {directive: 'move', destination: move})
  },
  'click #cancelOrder': function(e,t) {
    console.log("cancel", this._id);

    Meteor.call('game:cancelOrder', this._id);
  }
});
