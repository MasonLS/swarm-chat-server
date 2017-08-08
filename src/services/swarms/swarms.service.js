// Initializes the `swarms` service on path `/swarms`
const createService = require('feathers-mongodb');
const hooks = require('./swarms.hooks');
const filters = require('./swarms.filters');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/swarms', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('swarms');

  mongoClient.then(db => {
    service.Model = db.collection('swarms');
  });

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
