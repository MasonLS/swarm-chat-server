const assert = require('assert');
const app = require('../../src/app');

describe('\'swarms\' service', () => {
  it('registered the service', () => {
    const service = app.service('swarms');

    assert.ok(service, 'Registered the service');
  });
});
