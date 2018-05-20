# livewedding

Display live instagram posts for a pre-defined hashtag


### Installing

To get a dev env up in running in seconds, you can use docker
```
docker-compose up
```

Or if you have node and redis on your local machine

```
npm i
npm start
```

## Running the tests

```
npm run test
```
## Running in prod
set env vars (see in /config)
```
REDIS_URL
APP_URL
APP_PORT
INSTAGRAM_CLIENT_ID
INSTAGRAM_CLIENT_SECRET
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
