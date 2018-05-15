const express = require('express');
const config = require('../config');
const instagram = require('../lib/insta');
const red = require('../lib/red');

const router = express.Router();
const redirectUri = `${config.app.host}/auth/instagram/callback`;


router.get('/instagram/login', (req, res) => {
  // https://github.com/totemstech/instagram-node/issues/111
  // https://www.instagram.com/oauth/authorize/?client_id=CLIENTID&redirect_uri=REDIRECT-URI&response_type=token&scope=basic+public_content+follower_list+relationships+likes+comments
  res.redirect(instagram.getAuthorizationUrl(redirectUri, {
    // an array of scopes
    scope: ['basic', 'likes', 'public_content', 'relationships', 'comments']
  },
    // add here an optional state
    // state: 'your state',
  ));
});

router.get('/instagram/callback', async (req, res) => {
  try {
    // The code from the request, here req.query.code for express
    const code = req.query.code;
    const data = await instagram.authorizeUser(code, redirectUri);
    // data.access_token contain the user access_token
    red.setex('accessToken', 86400, data.access_token);
    red.setex('me', 86400, JSON.stringify(data.user));
    res.redirect('/auth/profile');
  } catch (err) {
    res.json(err);
  }
});

router.get('/profile', (req, res, next) => {
  red.get('me', (err, me) => {
    if (err) return next();
    res.render('auth/profile', {me: JSON.parse(me)});
  });
});


module.exports = router;
