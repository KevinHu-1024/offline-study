'use strict'

// const test = require('ava');

// // require('./index')();

// test('my test', t => {
//   t.is(3, 3)
// })

const exec = require('child_process').exec
import test from 'ava'

// test.beforeEach.cb()

test('my-test', t => {
  t.is(3, 3);
});
