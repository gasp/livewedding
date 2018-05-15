const express = require('express');
const router = express.Router();

const config = require('../config');
const red = require('../lib/red');
const insta = require('../lib/insta');
const simpleFeed = require('../lib/simpleFeed');

router.get('/', (req, res, next) => {

  // TODO: get back the token from redis in a middleware
  if (typeof insta.config.accessToken !== 'string') {
    console.log('err: missing accessToken please connect to instagram first');
    return next();
  }

  insta.get(`tags/${config.app.hashtag}/media/recent`).then(data => {
    const feed = simpleFeed(data);
    res.render('wall', {imgsrc: feed[0].image.url});

  }).catch(err => {
    next(err);
  });
});

module.exports = router;
