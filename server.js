const Koa = require('koa');
const app = new Koa();
const cors = require('koa-cors');
const bodyParser = require('koa-bodyparser');

app.use(bodyParser());
app.use(cors());

//Routes
const index = require('./router.js')
app.use(index.routes());

const PORT = process.env.PORT || 3001;

//Server starts
const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;
