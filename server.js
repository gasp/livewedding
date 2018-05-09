const fs = require('fs');
const http = require('http');

const name = 'node-hello-world';
const port = 8911;

const app = new http.Server();

const views = {
  'privacy': fs.readFileSync(`${__dirname}/views/privacy.html`)
};

app.on('request', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  if (req.url.match(/^\/legal\/privacy/)) {
    res.write(views.privacy);
    return res.end('\n');
  }
  res.write('<html>live wedding<br><a href="/legal/privacy">privacy policy</a></html>');
  res.end('\n');
});

app.listen(port, () => {
  console.log(`${name} is listening on port ${port}`);
});
