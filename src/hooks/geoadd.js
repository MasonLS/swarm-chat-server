const redis = require('../redis/client');

module.exports = function () {
  return function (hook) {
  	const {
  	  lat,
  	  lng
  	} = hook.data;
    return redis.geoaddAsync('swarms', lng, lat, hook.id)
      .then(() => hook);
  }
}