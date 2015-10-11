Template.movePopUp.events({
  "click #makTheMove": function(event, template) {
    event.preventDefault();
    AntiModals.dismissOverlay(UI.currentModal);
    UI.mapstate.clickedRegion = null;
  }
});
