const Koa = require('koa');
const app = new Koa();
const jwt = require('koa-jwt');
const jwks = require('jwks-rsa');
const cors = require('koa-cors');
const bodyParser = require('koa-bodyparser');

app.use(bodyParser());
app.use(cors());

//Auth0
const authCheck = jwt(
  {
    secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: "https://devazul.eu.auth0.com/.well-known/jwks.json"
    }),
    audience: 'chucknorris.es',
    issuer: "https://devazul.eu.auth0.com/",
    algorithms: ['RS256']
});

//Routes
const index = require('./router.js')
app.use(index.routes());

const PORT = process.env.PORT || 3001;

//Server starts
const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;
