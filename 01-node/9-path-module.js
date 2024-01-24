const path = require('path');

console.log(path.sep);

const filePath = path.join('/content','subfolder','test.txt');
// if string '/content' had '/content/', the trailing / would be removed automatically
// and be a propert path
console.log(filePath);

const base = path.basename(filePath);
console.log(base)

const absolute = path.resolve(__dirname, 'content','subfolder','test.txt');
console.log(absolute);