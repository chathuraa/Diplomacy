Template.loginBox.helpers({
  create: function() {

  },
  rendered: function() {

  },
  destroyed: function() {

  },
});

Template.loginBox.events({
  "click #close-login-box": function(event, template) {
    console.log('clciked to close');
    AntiModals.dismissOverlay(UI.currentModal);
  },

  "submit #login-form": function(event, template) {
    event.preventDefault();
    var email = t.find('#login-email').value,
      password = t.find('#login-password').value;
    Meteor.loginWithPassword(email, password,
      function(err) {
        if (err) {

        }
        // The user might not have been found, or their passwword
        // could be incorrect. Inform the user that their
        // login attempt has failed.
        else {
          AntiModals.dismissOverlay(UI.currentModal);
        }
        // The user has been logged in.
      });
    return false;
  },
  "click #login-with-facebook": function(event,
    template) {
    event.preventDefault();
    Meteor.loginWithFacebook({}, function(err) {
      if (err) {
        throw new Meteor.Error(
          "Facebook login failed");
      } else {
        AntiModals.dismissOverlay(UI.currentModal);
    
      }
    });
    return 'a';
  }
});
