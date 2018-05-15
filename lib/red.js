const redis = require('redis');
const red = redis.createClient({ port: 6379, host: 'localhost' });

module.exports = red;
