/* 
Streams
streams are used to read or write sequentially. when we have to handle/manipulate streaming data(continous source or a big file)

4 different types of streams:
Writeable - write data
Readable - read data
Duplex - read and write data
Transform - data can be modified when writing or reading 

streams EXTEND EventEmitter Class meaning we can use events like data and and on streams
*/

const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt", {
  highWaterMark: 9000,
  encoding: "utf8",
});

/*
default 64kb
last buffer - remainder
highWaterMark - control size
const stream = createReadStream('./content/bigtxt', {highwaterMark: 90000})
const stream = createReadStream('./content/bigtxt', {encoding: 'utf8'})

 */
stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => {
  console.log(err);
});
