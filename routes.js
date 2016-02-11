'use strict';

let parse = require('co-body');
let render = require('./lib/render');

let db = require('./db');
let wrap = require('co-monk');

let posts = wrap(db.get('posts'));

module.exports.home = function *home(next) {
	this.body = yield render('index');
}

module.exports.show = function *show(next) {
	let post = yield posts.findOne({_id: this.params.id});
	if (!post) {
		this.body = yield render('not-found');
	} else {
		this.body = yield render('index', post);
	}
}

module.exports.add = function *add(next) {
	this.body = yield render('add');
}

module.exports.create = function *create(next) {
	console.log('this is', this);
	let post = yield parse(this);

	console.log('parsed post is', post);
	post.created_at = new Date;

	yield posts.insert(post);
	this.redirect('/');
}