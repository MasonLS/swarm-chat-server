const pub = require('../redis/pub-sub').pub;

module.exports = function () {
  return function (hook) {
  	const {
  	  swarm_id,
  	  username,
  	  message
  	} = hook.data;
  	return pub.publishAsync(swarm_id, `${username}: ${message}`)
  	  .then(() => hook);
  }
}