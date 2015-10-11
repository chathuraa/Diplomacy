_.extend(Diplomacy.Map, {

  addProvince: function(province) {
    check(province, {
      name: String,
      abbreviation: String,
      type: String,
      sub_name: Match.Optional(String),
      nation: Object,
      supply: Boolean,
      master: Boolean,
      fleet: Boolean,
      army: Boolean
    });

    var exist = this.getProvinceByAbbreviation(province.abbreviation);

    if (!exist)
      return this._collections.Provinces.insert(province);
    else
      return {error: true, message: 'Province already exists'};

  },

  removeProvince: function(province) {
    check(province, String);

    var exist = this.getProvinceByAbbreviation(province);

    if (exist)
      return this._collections.Provinces.remove({abbreviation: province});
    else
      return {error: true, message: 'Province does not exists'};

  },

  getProvinceByAbbreviation: function(abbreviation) {
    return this._collections.Provinces.findOne({abbreviation: abbreviation});
  }

});
