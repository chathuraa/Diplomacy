Template.mapZoomOutButton.events({
  "click #zoom-out": function(event, template) {
    if (UI.mapstate.initZoom > 1) {
      UI.mapstate.initZoom = UI.mapstate.initZoom - 1;
    }
    var rMatrix = new Snap.Matrix();
    var bbox = UI.mapstate.regionGroup.getBBox();
    rMatrix.scale(UI.mapstate
      .initZoom, UI.mapstate
      .initZoom,UI.mapstate.wW/2,UI.mapstate.wH/2);
    UI.mapstate.regionGroup.animate({
      transform: rMatrix
    }, 300, mina.linear);
    //UI.mapstate.regionGroup.transform('s' + UI.mapstate
    //  .initZoom);
  }
});
