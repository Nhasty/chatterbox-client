// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  render: function(messageObject) {
    var escapedUsername = $(`<div>${messageObject.username}</div>`).text();
    var escapedMessage = $(`<div>${messageObject.text}</div>`).text();
    var escapedRoomname = $(`<div>${messageObject.roomname}</div>`).text();

    var htmlString = ` <div class="chat">
    <div class="username">@${escapedUsername}: "${escapedMessage}" in ${escapedRoomname}</div>
    <div></div>
    </div>`;
    return htmlString;
  }


};


