var crypto = require('./crypto');

var encrypt = crypto.encrypt('undefined');
console.log(encrypt);

console.log(crypto.decrypt('98a088b840482fcc9e328e3397e68d28'));
