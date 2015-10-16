Template
  .app
  .onCreated(function() {
    var instance = this;
    instance.subscribe('game');
    instance.subscribe('game_positions');
    instance.subscribe('game_orders');
  });

Template
  .app
  .onRendered(function() {
    UI.mapstate.initZoom = 2;
    UI.mapstate.s = Snap("#svg");
    UI.mapstate.bbox = UI.mapstate
      .s
      .getBBox();
    UI.mapstate.clickedRegion = null;

    UI.mapstate.wH = $(window).height();
    UI.mapstate.wW = $(window).width();
    if (Meteor.user()) {
      Session.set('loggedin', true);
    } else {
      Session.set('loggedin', false);
    }
    Session.set('countdown', 300);
    Meteor
      .setInterval(function() {
        var timeRemaining = Session.get('countdown');
        if (timeRemaining > 0) {
          Session.set('countdown', timeRemaining - 1);
        } else {
          Session.set('countdown', 300);
        }
      }, 1000);

    UI.mapstate
      .s
      .attr({
        viewBox: "0 0 " + UI.mapstate.wW + " " + UI.mapstate.wH
      });

    $(window)
      .resize(function() {
        UI.mapstate.wH = $(window).height();
        UI.mapstate.wW = $(window).width();
        UI.mapstate
          .s
          .attr({
            viewBox: "0 0 " + UI.mapstate.wW + " " + UI.mapstate.wH
          });
      });

    var regions = Diplomacy.Map
      ._collections
      .Provinces
      .find({}, {
        fields: {
          old: 1
        }
      })
      .fetch();

    console.log(regions);
    //
    //
    //
    //
    //
    //
    //acy.Map._collections.Provinces.update({abbreviation:Map,},
    //{$set:{}});

    var regionObjects = [];
    var iconObjects = [];
    _
      .each(regions, function(el, index) {

        if (el.old) {
          var color = '#7CB342';
          var country = UI.mapUtil
            .getColorByType(el.old.type, el.old.id);
          if (country) {
            if (_.isObject(country)) {
              color = country.vacantColor;
            } else {
              color = country;
            }
          };
          var pathPoints = el.old.path;

          if (_.isArray(pathPoints)) {
            _
              .each(pathPoints, function(el, index) {

                var region = UI.mapUtil
                  .createRegions(UI.mapstate.s, el, color, "white", 1);
                regionObjects.push(region);
                region
                  .hover(function() {
                    region.attr("fill", tinycolor(color).lighten(10));

                  }, function() {
                    region.attr("fill", color);
                  });
                region.node.onclick = function() {
                  if (!UI.mapstate.clickedRegion) {
                    UI.mapstate.clickedRegion = region;
                    //AntiModals.overlay("movePopUp");
                  } else {
                    UI.mapstate.clickedRegion = null;
                  }
                  //region.attr("fill", "black");
                };
                var regionData = region.getBBox();

                if (_.isObject(country)) {

                  if (!_.isNull(el.supply)) {

                    // var sympbols = UI.mapUtil
                    //.createSymbols(UI.mapstate.s, regionData,
                    //country.unitColor);
                    // regionObjects.push(sympbols);
                  }

                }
              });
          } else {
            if (!_.isUndefined(el.supply)) {
              if (!_.isNull(el.d)) {
                var region = UI.mapUtil
                  .createRegions(UI.mapstate.s, pathPoints, color, "white", 1);
                regionObjects.push(region);
                region
                  .hover(function() {
                    region.attr("fill", tinycolor(color).lighten(10));
                  }, function() {
                    region.attr("fill", color);
                  });
                region.node.onclick = function() {
                  if (!UI.mapstate.clickedRegion) {
                    UI.mapstate.clickedRegion = region;
                    //AntiModals.overlay("movePopUp");
                  } else {
                    UI.mapstate.clickedRegion = null;
                  }
                  //region.attr("fill", "black");
                };
                var regionData = region.getBBox();

                if (_.isObject(country)) {
                  if (!_.isNull(el.supply)) {
                    var sympbols = UI.mapUtil
                      .createSymbols(UI.mapstate.s, regionData, country.unitColor);
                    iconObjects.push(UI.mapUtil.createLabel(UI.mapstate.s, regionData, el.name, country.unitColor));
                    iconObjects.push(sympbols);
                  }

                }
              }

            }

          }
        }

      })
    var flattenedRegions = _.flatten([regionObjects, iconObjects,]);
    UI.mapstate.regionGroup = UI.mapstate
      .s
      .group(...flattenedRegions);
    var rMatrix = new Snap.Matrix();
    rMatrix.scale(UI.mapstate.initZoom, UI.mapstate.initZoom, UI.mapstate.bbox.cx, UI.mapstate.bbox.cy);
    rMatrix.translate(0, -300);
    UI.mapstate
      .regionGroup
      .transform(rMatrix);
    // UI.mapstate
    //   .regionGroup
    //   .limitDrag({
    //     x: 0,
    //     y: 0,
    //     minx: 0,
    //     miny: 0,
    //     maxx: UI.mapstate.wW,
    //     maxy: UI.mapstate.wH
    //   });
    UI.mapstate
      .regionGroup
      .drag(UI.mapUtil.move, UI.mapUtil.start, UI.mapUtil.stop)

  });
Template.app
  .events({
    "drag #svg": function(event, template) {}
  });
