Template.logoutButton.events({
  "click #logout": function(event, template) {
    Meteor.logout();
    Session.set('loggedin', false)
  }
});
