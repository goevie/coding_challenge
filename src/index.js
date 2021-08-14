const reverse = require('./reverse');

// using package yargs
const args = require('yargs')(process.argv.slice(2))
let string  = args.argv._[0];
let arg1, arg2 = false;

if (args.argv._.indexOf('word') < 0) {
    arg1 = true;
}

if (args.argv._.indexOf('letter') < 0) {
    arg2 = true;
}

try {
    console.log(reverse.reverseSentence(string, arg1, arg2));
} catch(error) {
    console.log('Invalid format of arguments, refer to docs');
}