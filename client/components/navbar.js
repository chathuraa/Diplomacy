Template.navbar.helpers({
  "loggedin": function(event, template) {
    return Session.get('loggedin');
  }
});
