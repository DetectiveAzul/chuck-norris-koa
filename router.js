const Router = require('koa-router');
const router = new Router();
const celebrity = require('./db/celebrity_jokes.js');
const foodJokes = require('./db/food_jokes.js');
const jwt = require('koa-jwt');
const jwks = require('jwks-rsa');

const authCheck = jwt(
  {
    secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: "https://devazul.eu.auth0.com/.well-known/jwks.json"
    }),
    audience: "chucknorris.es",
    issuer: "https://devazul.eu.auth0.com/",
    algorithms: ['RS256']
});

router.get('/', async (ctx) => {
  ctx.body = {
    status: 'success',
    message: 'hello, world!'
  };
});

router.get('/api/v1/food/', async (ctx) => {
  ctx.body = {
    status: 'success',
    data: foodJokes
  };
});

router.get('/api/v1/celebrity/', /*authCheck,*/  async (ctx) => {
  ctx.body = {
    status: 'success',
    data: celebrity
  };
});

module.exports = router;
