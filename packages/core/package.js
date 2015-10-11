Package.describe({
  name: 'diplomacy:core',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Diplomacy Data and Rules Core',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');

  api.use("mongo");
  api.use('underscore');
  api.use('check');

  //api.use('iron:router');

  api.addFiles('functions.js');
  api.addFiles('core.js');

  api.addFiles('map/map.js');
  api.addFiles('map/connections.js');
  api.addFiles('map/nations.js');
  api.addFiles('map/province.js');

  api.addFiles('game/game.js');
  //api.addFiles('game/route.js', ['client']);
  api.addFiles('game/moves.js');
  api.addFiles('game/orders.js');
  api.addFiles('game/process.js');
  api.addFiles('game/positions.js');

  api.addFiles('game/methods.js', ['server']);
  api.addFiles('game/publish.js', ['server']);

  api.export(["Diplomacy"]);

});
