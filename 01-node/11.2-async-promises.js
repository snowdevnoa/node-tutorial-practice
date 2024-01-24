const { readFile, writeFile } = require("fs").promises;

// the util module has a method that is called promisify that returns a promise
/*
const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);
*/

//  Asynchronous Programming in node using Promise
/*
function getText(path) {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

getText("./content/first.txt")
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
  */

async function start() {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");
    await writeFile(
      "./content/result-mind-grenade.txt",
      `THIS IS AWESOME: ${first} ${second}`,
      { flag: "a" }
    );
    console.log(first, second);
  } catch (err) {
    console.log(err);
  }
}

start();
