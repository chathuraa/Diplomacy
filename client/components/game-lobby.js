Template.gameLobby.helpers({

});

Template.gameLobby.events({
  "click #game-lobby": function(e, t) {
    e.preventDefault();
    AntiModals.overlay("gameLobbyPopUp");
  }
});
