const fs=require('fs');

// my own asynchronous function
function kiratReadFile(){
  console.log("inside kirats read file");
  return new Promise(function(resolve){
    console.log("inside promise");
    fs.readFile("a.txt","utf-8",function(arr,data){
      console.log("before resolve");
      resolve(data);
    });
  })
}

// callback function to call
function onDone(data){
console.log(data);
}
kiratReadFile().then(onDone);