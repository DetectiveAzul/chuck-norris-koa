const Koa = require('koa');
const app = new Koa();
const jwt = require('koa-jwt');
const jwks = require('jwks-rsa');
const cors = require('koa-cors');
const bodyParser = require('koa-bodyparser');

app.use(cors());
app.use(bodyParser());

const PORT = process.env.PORT || 3000;

//Server starts
const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;
