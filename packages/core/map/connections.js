_.extend(Diplomacy.Map, {

  addProvinceConnection: function(provinces, fleet, army) {
    var self = this;

    if (!fleet)
      fleet = false;

    if (!army)
      army = false;

    //make sure array
    check(provinces, Array);
    check(fleet, Boolean);
    check(army, Boolean);

    var exist = this._collections.Connections.findOne({$and: [{link: provinces[0]}, {link: provinces[1]}]});
    if (!exist) {

      // make sure only 2 link
      if (!provinces.length === 2)
        return {error: true, message: 'Two provinces required to link'};

      if (!fleet && !army)
        return {error: true, message: 'Province link must be for a Fleet, Army or Both'};

      //make sure provinces exist
      var isValid = true;
      _.each(provinces, function(prov) {
        var p = self.getProvinceByAbbreviation(prov)
        if (!p)
          isValid = false;
      });

      if (!isValid)
        return {error: true, message: 'Provinces need to exist to be connected'};

      if (provinces[0] === provinces[1])
        return {error: true, message: 'Province cannot connect to itself'};

      var rec = {
        link: provinces,
        army: army,
        fleet: fleet
      };

      return this._collections.Connections.insert(rec);
    } else {
      return {error: true, message: 'Provinces are already connected', fleet: exist.fleet, army: exist.army};
    }
  },

  removeProvinceConnection: function(provinces) {
    //make sure array
    check(provinces, Array);

    var exist = this._collections.Connections.findOne({$and: [{link: provinces[0]}, {link: provinces[1]}]});
    if (!exist) {
      return {error: true, message: 'Province link does not exist'};
    } else {
      return this._collections.Connections.remove({$and: [{link: provinces[0]}, {link: provinces[1]}]});
    }
  },

  updateProvinceConnection: function(provinces, fleet, army) {

    if (!fleet)
      fleet = false;

    if (!army)
      army = false;

    //make sure array
    check(provinces, Array);
    check(fleet, Boolean);
    check(army, Boolean);

    var exist = this._collections.Connections.findOne({$and: [{link: provinces[0]}, {link: provinces[1]}]});
    if (!exist) {
      return {error: true, message: 'Province link does not exist'};
    } else {

      if (fleet === exist.fleet && army === exist.army)
        return 1;

      // make sure only 2 link
      if (!provinces.length === 2)
        return {error: true, message: 'Two provinces required to link'};

      if (!fleet && !army)
        return {error: true, message: 'Province link must be for a Fleet, Army or Both'};

      return this._collections.Connections.update({_id: exist._id}, {$set: {fleet: fleet, army: army}});
    }
  },

  getProvinceConnections: function(abbreviation) {
    var self = this;

    // type devfines if land or sea, check for move type
    var links = this._collections.Connections.find({link: abbreviation}).fetch();
    var result = [];
    _.each(links, function(doc) {
      if (!_.contains(result, doc.link[0]) && doc.link[0] !== abbreviation) {
        var rec = self.getProvinceByAbbreviation(doc.link[0]);

        // set the rule for this particular link
        rec.link_fleet = doc.fleet;
        rec.link_army = doc.army;

        result.push(rec);
      }

      if (!_.contains(result, doc.link[1]) && doc.link[1] !== abbreviation) {
        var rec = self.getProvinceByAbbreviation(doc.link[1]);

        // set the rule for this particular link
        rec.link_fleet = doc.fleet;
        rec.link_army = doc.army;

        result.push(rec);
      }
    });

    return result;
  },

  getProvinceConnectionsForType: function(abbreviation, type) {
    check(abbreviation, String);
    check(type, StringOfType);

    // type devfines if land or sea, check for move type
    var links = this.getProvinceConnections(abbreviation);
    var result = [];

    _.each(links, function(doc) {
      if (doc.link_army && type === "A")
        result.push(doc);
      if (doc.link_fleet && type === "F")
        result.push(doc);
    });

    return result;
  },

  getProvinceConnectionsList: function(abbreviation) {
    var connections = this.getProvinceConnections(abbreviation);
    return _.map(connections, function(c) {
      return {
        province: c.abbreviation,
        army: c.link_army,
        fleet: c.link_fleet
      }
    });
  },

  isValidConnection: function(from, to, type) {

    var filter = {
      $and: [
        {link: from},
        {link: to}
      ]
    };

    if (type === 'A')
      filter.army = true;

    if (type === 'F')
      filter.fleet = true;

    var link = this._collections.Connections.findOne(filter);

    return !!link;
  }
  
});
