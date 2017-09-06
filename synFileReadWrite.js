let fs = require('fs');


var readMeSyn =fs.readFileSync('readMe.txt','utf8');
console.log(readMeSyn);

fs.writeFileSync('writeMeSyn.txt',readMeSyn);
