// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
  },

  fetch: function(callback = ()=>{}) {
    setTimeout(App.fetch, 3000);
    Parse.readAll((data) => {
      // examine the response from the server request:
      //iterate over data
      var lastChat = 0;
      if (Messages._data.length) {
        lastChat = Messages._data[0]['message_id'];
      }
      data.forEach((dataPoint) => {
        //push each object to Messages._data
        if (dataPoint['message_id'] > lastChat) {
          Messages._data.push(dataPoint);
        }
      });

      console.log(data);

      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
    });
    callback();
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
