const Instagram = require('node-instagram').default;
const c = require('../config/instagram');

const instagram = new Instagram({
  clientId: c.clientId,
  clientSecret: c.clientSecret,
  // get this accessToken https://github.com/totemstech/instagram-node/issues/111
  // accessToken: '558789598.a08a1cf.8019baaa451c44139a4d5fcdb47e92be',
});

module.exports = instagram;
