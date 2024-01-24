/*GLOBALS - NO WINDOW !!!

__dirname - path to current directory 
__filename - file name
require - function to use modules (CommonJS)
module - infor about current module (file)
process - info about env where program is being executed
*/


console.log(__filename);
setInterval(()=>{
    console.log('hello world')
},1000);