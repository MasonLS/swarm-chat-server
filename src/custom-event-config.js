module.exports = function (io) {
  io.on('set user info', (socket, data) => {
  	// Not sure if you can do this, but seems like it might work...
  	// Want to track username, geocoords, and distance setting
  	// Only if we are going to update swarms-within-range upon creation
  	socket.user = data;
  });
}