const {readFileSync, writeFileSync} = require('fs');

console.log('start');

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(`${first}. ${second}`);
writeFileSync('./content/result-sync.txt', 
`Here is the result ${first}, ${second}`,
{flag: 'a'}); 
//third argument, flag: a allows the new written content to append onto existing file

console.log('done w/ task')
console.log('starting the next task')