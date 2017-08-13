module.exports = {
  created (data, connection, hook) {
    if (!Object.keys(connection.rooms).includes(hook.data.swarm_id)) {
      return false;
    }
    return data;
  }
};
