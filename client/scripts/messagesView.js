// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    setTimeout(MessagesView.render, 1000);
  },

  render: function () {
    // TODO: Render _all_ the messages.
    // iterate over the Messages._data
    Messages._data.forEach((dataPoint) => {
      MessagesView.renderMessage(dataPoint);
    });
    //at each data point meassage.render
  },

  renderMessage: function (message) {
    // TODO: Render a single message.
    var singleMessage = MessageView.render(message);
    MessagesView.$chats.prepend(singleMessage);
  },

  handleClick: function (event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};