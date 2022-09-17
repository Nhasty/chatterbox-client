// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),
  initialize: function () {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function (event) {
    // Stop the browser from submitting the form
    var $input = $('#message');
    event.preventDefault();
    var lobby = /*if lobbby selected or*/undefined;
    var message = {};
    message.text = $input.val();
    message.username = App.username;
    message.roomname = lobby;

    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.
    Parse.create(message, () => {
      console.log('success!');
    });
  },

  setStatus: function (active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};