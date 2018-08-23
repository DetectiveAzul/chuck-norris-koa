const Router = require('koa-router');
const router = new Router();
const celebrity = require('./db/celebrity_jokes.js');
const foodJokes = require('./db/food_jokes.js')

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

router.get('/api/v1/celebrity/', async (ctx) => {
  ctx.body = {
    status: 'success',
    data: celebrity
  };
});

module.exports = router;
