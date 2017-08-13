const sub = require('../redis/pub-sub').sub;

module.exports = function () {
  return function (hook) {
  	const { io } = hook.app;
  	if (!io.rooms.includes(hook.id)) {
  	  return sub.subscribeAsync(hook.id); 
  	}
  }
}