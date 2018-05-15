const red = require('./red');

describe('redis', () => {
  it('is ready', (done) => {
    red.setex('key', 10000, 'value');
    red.get('key', (err, reply) => {
      expect(err).toBeFalsy();
      expect(reply).toBe('value');
      done();
    })

  });
})
