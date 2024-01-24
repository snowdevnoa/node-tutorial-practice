const {readFile, writeFile} = require('fs');

console.log('start');
readFile('./content/first.txt', 'utf-8', (err, result)=>{
 if(err){
    console.log(err)
    return
 }
 const first = result;
 readFile('./content/second.txt', 'utf-8',(err,result) => {
    if(err){
        console.log(err)
        return
     }
     const second = result
     writeFile('./content/result-async.txt', 'this is from async fs module', 
     {flag:'a'}, (err,result)=>{
        if(err){
            console.log(err)
            return
         }
         console.log('done w/ this task')
     })
 })
})
console.log('starting next task')