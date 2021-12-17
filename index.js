console.log('hello world');

// global in node js

global.number = 10;

console.log(global.number);

// Process -> Gives info on present node js process

console.log(process.platform); // or grab an environment variable

// Events

// Event driven, asynchrounous runtime. runtime impliments a loop, which allows node to put functions on a separate thread. It provides a fast non blocking event driven runtime.

process.on('exit', function(){
  console.log('exit');
});

// Exit is a event, function is a callback

// Make your own events

const { EventEmitter } = require('events');
const emitter = new EventEmitter();

emitter.on('messageLogged', function(){
  console.log('listener called');
});

emitter.emit('messageLogged'); // this will call the listener

// Useful when something is CPU intensive

// File system

const { readFile, readFileSync } = require('fs');

const text = readFileSync('./txt.txt', 'utf-8'); // blocking

// non blocking by refactoring this to a callback

readFile('./txt.txt', 'utf8', function(err, txt){
  console.log(txt);
});

console.log('Do this asap');