Template.app.onCreated(function() {
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

    // UI
    //   .mapstate
    //   .s
    //   .plugin(function(Snap, Element, Paper, global) {
    //
    //     Element.prototype.limitDrag = function(params) {
    //       this.data('minx', params.minx);
    //       this.data('miny', params.miny);
    //       this.data('maxx', params.maxx);
    //       this.data('maxy', params.maxy);
    //       this.data('x', params.x);
    //       this.data('y', params.y);
    //       this.data('ibb', this.getBBox());
    //       this.data('ot', this.transform().local);
    //       this.drag(limitMoveDrag, limitStartDrag);
    //       return this;
    //     };
    //
    //     // this code is old and clunky now, and transform possibly
    //     //in wrong order, so only use for simple cases
    //     function limitMoveDrag(dx, dy) {
    //       var tdx,
    //         tdy;
    //       var sInvMatrix = this.transform()
    //         .globalMatrix
    //         .invert();
    //       sInvMatrix.e = sInvMatrix.f = 0;
    //       tdx = sInvMatrix.x(dx, dy);
    //       tdy = sInvMatrix.y(dx, dy);
    //
    //       this.data('x', + this.data('ox') + tdx);
    //       this.data('y', + this.data('oy') + tdy);
    //       if (this.data('x') > this.data('maxx') - this.data('ibb').width) {
    //         this.data('x', this.data('maxx') - this.data('ibb').width)
    //       };
    //       if (this.data('y') > this.data('maxy') - this.data('ibb').height) {
    //         this.data('y', this.data('maxy') - this.data('ibb').height)
    //       };
    //       if (this.data('x') < this.data('minx')) {
    //         this.data('x', this.data('minx'))
    //       };
    //       if (this.data('y') < this.data('miny')) {
    //         this.data('y', this.data('miny'))
    //       };
    //       this.transform(this.data('ot') + "t" + [
    //         this.data('x'), this.data('y'),
    //       ]);
    //     };
    //
    //     function limitStartDrag(x, y, ev) {
    //       this.data('ox', this.data('x'));
    //       this.data('oy', this.data('y'));
    //     };
    //   });

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

    var regions = Map.spaces;

    //console.log(regions);

    var regionObjects = [];
    var iconObjects = [];
    _
      .each(regions, function(el, index) {
        var color = '#7CB342';
        var country = UI.mapUtil
          .getColorByType(el.type, el.id);
        if (country) {
          if (_.isObject(country)) {
            color = country.vacantColor;
          } else {
            color = country;
          }
        };
        var pathPoints = el.path;
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
