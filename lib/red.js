const redis = require('redis');
const config = require('../config/').redis;
const red = redis.createClient(config.url);

module.exports = red;
