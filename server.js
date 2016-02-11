'use strict';

let logger = require('koa-logger');
let serve = require('koa-static');
let app = require('koa')();
let router = require('koa-router')();
let routes = require('./routes');

app.use(logger());
app.use(serve(__dirname + '/dist'));

router.get('/', routes.home);
router.get('/:id', routes.show);
router.get('/add', routes.add);
router.post('/create', routes.create);

app.use(router.routes());


app.listen(3000);
console.log('listening on port 3000');