'use strict';

let render = require('./lib/render');
let logger = require('koa-logger');
let router = require('koa-router')();
let parse = require('co-body');
let serve = require('koa-static');
let koa = require('koa');
let app = koa();

// "database"

let posts = [];

// middleware
app.use(logger());
app.use(serve(__dirname + '/dist'));

// route middleware

router.get('/', home);

app.use(router.routes());
// app.use(route.get('/post/new', add));
// app.use(route.get('/post/:id', show));
// app.use(route.post('/post', create));

// route definitions

/**
 * Post listing.
 */

// function *list() {
//   this.body = yield render('list', { posts: posts });
// }



function home() {
	return function *(next){
		this.body = yield render('index', {});
	}
}

/**
 * Show creation form.
 */

// function *add() {
//   this.body = yield render('new');
// }

// /**
//  * Show post :id.
//  */

// function *show(id) {
//   var post = posts[id];
//   if (!post) this.throw(404, 'invalid post id');
//   this.body = yield render('show', { post: post });
// }

// /**
//  * Create a post.
//  */

// function *create() {
//   var post = yield parse(this);
//   var id = posts.push(post) - 1;
//   post.created_at = new Date;
//   post.id = id;
//   this.redirect('/');
// }

// listen

app.listen(3000);
console.log('listening on port 3000');