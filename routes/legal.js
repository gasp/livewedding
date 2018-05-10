const fs = require('fs');
const express = require('express');
const router = express.Router();

router.get('/privacy', (req, res, next) => {
  const privacy = fs.readFileSync(`${__dirname}/../views/privacy.html`)
  res.set('Content-Type', 'text/html').send(privacy);
});

module.exports = router;
