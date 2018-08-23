const Koa = require('koa');
const app = new Koa();
const jwt = require('koa-jwt');
const jwks = require('jwks-rsa');
const cors = require('koa-cors');
const bodyParser = require('koa-bodyparser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
