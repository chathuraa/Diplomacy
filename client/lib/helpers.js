UI.mapUtil = {
  createDepotSymbol: function(snap, region, color) {
    return snap
      .circle(region.cx, region.cy, 5)
      .attr("fill", color);
  },
  createShape: function(snap, pathPoints, fillColor,
    strokColor, strokWidth) {

    return snap
      .path(pathPoints)
      .attr({
        fill: fillColor,
        stroke: strokColor,
        strokeWidth: strokWidth
      });
  },
  loadShape: function(file) {
    UI.mapstate.s.load('ship.svg', function(
      loadedFragment) {
      return loadedFragment;
    });
  },
  createRegions: function(snap, pathPoints, fillColor,
    strokColor, strokWidth) {

    return snap
      .path(pathPoints)
      .attr({
        fill: fillColor,
        stroke: strokColor,
        strokeWidth: strokWidth
      });
  },
  createArmySymbol: function(snap, region, color) {
    var g = snap.g();
    var circle = snap.circle(region.cx + 8, region
      .cy + 10, 14).attr({
      fill: color,
    });
    var img = g.image("/tank.png", region.cx + 1,
      region.cy +
      1, 17, 17).attr({
      "class": "army"
    });
    var group = snap
      .group(circle, img);
    return group;
  },
  createFleetSymbol: function(snap, region, color) {
    var g = snap.g();
    var circle = snap.circle(region.cx - 7, region
      .cy - 16, 14).attr({
      fill: color,
    });
    var img = g.image("/bs.png", region.cx - 15, region
      .cy -
      25, 17, 17).attr({
      "class": "fleet"
    });

    var group = snap
      .group(circle, img);

    return group;

  },
  createLabel: function(snap, region, text, color) {
    return snap.text(region.cx - 30, region.cy + 25,
      text).attr({
      fill: color
    });
  },
  createSymbols: function(snap, region, color) {
    var sympbols = [];



    sympbols.push(UI.mapUtil
      .createDepotSymbol(snap, region,
        "white"));

    var army = UI.mapUtil
      .createArmySymbol(snap, region,
        color);
    army.click(function() {
      console.log('army clicked');
      UI.currentModal = AntiModals.overlay(
        "movePopUp");
    });
    sympbols.push(army);
    var fleet = UI.mapUtil
      .createFleetSymbol(snap, region,
        color);
    fleet.click(function() {
      console.log('fleet clicked');
      UI.currentModal = AntiModals.overlay(
        "movePopUp");
    });

    sympbols.push(fleet);

    return sympbols;
  },

  move: function(dx, dy) {
    this.attr({
      transform: this.data('origTransform') + (this
        .data('origTransform') ? "T" : "t") + [
        dx, dy,
      ]
    });
  },

  start: function() {
    this.data('origTransform', this.transform().local);
  },
  stop: function() {
    console.log('finished dragging');
  },
  getColorByType: function(type, id) {
    var countries = Map.countries;

    if (type == "sea") {
      return '#90CAF9';
    } else {
      var country = _.find(countries, function(country) {
        return _.contains(country.startSpaces, id);
      });
      return country;
    }
  },


};
