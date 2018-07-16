console.log('Starting app.js');

const fs = require('fs');
// const os = require('os');
const notes = require('./notes.js');
const _ = require ('lodash');
const yargs = require('yargs');
// var user = os.userInfo();
// console.log(user);
// fs.appendFile ('greetings.txt' , 'Hello'+user.username+ 'You are' +notes.age);
// // console.log(notes.age);

// console.log('Result:' , notes.add(9 , -2));
 // var filteredArray = _.uniq(['animesh' , 'nikku' , 'purvi']);
 // console.log(filteredArray);

const argv = yargs.argv;
var command = process.argv[2];
console.log('Command :' , command);
console.log('Yargs' , argv);


if (command === 'add') {
  notes.addNote(argv.title , argv.body);
} else if (command === 'list') {
  notes.listing();
} else if (command === 'remove') {
  notes.removeNote(argv.title);
} else {
  console.log('command not recognized');
}
