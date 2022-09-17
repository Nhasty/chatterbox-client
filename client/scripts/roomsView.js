// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    Messages._data.forEach(dataPoint => {
      if (!Rooms._data[dataPoint.roomname]) {
        Rooms._data[dataPoint.roomname] = {};
      }
    });
  },

  render: function() {
    // TODO: Render out the list of rooms.
    for (var key in Rooms._data) {
      RoomsView.renderRoom(key);
    }
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    var escapedRommname = $(`<div>${roomname}</div>`).text();
    $select.append(escapedRommname);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
  }

};
