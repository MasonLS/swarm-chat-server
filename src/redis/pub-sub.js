const redis = require('redis');
const Promise = require('bluebird');

Promise.promisifyAll(redis.RedisClient.prototype);
Promise.promisifyAll(redis.Multi.prototype);

const pub = redis.createClient(),
  sub = redis.createClient();

sub.on('message', (channel, message) => {
  // send down to client via socket.io
})

module.exports = {
  pub,
  sub
};