const Instagram = require('node-instagram').default;
const c = require('../config/instagram');

// get this accessToken https://github.com/totemstech/instagram-node/issues/111
const instagram = new Instagram({
  clientId: c.clientId,
  clientSecret: c.clientSecret,
});

module.exports = instagram;
