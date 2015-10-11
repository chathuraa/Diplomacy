Template.loginButton.events({
  "click #login": function(event, template) {
    UI.currentModal = AntiModals.overlay("loginBox");
  }
});
