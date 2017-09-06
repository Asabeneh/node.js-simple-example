let time = 0;
let timer = setInterval(function(){
  time +=2;
  console.log(time + "seconds have passed");
if(time > 10){
  clearInterval(timer);
}},2000);

setTimeout(function(){
  console.log("Two seconds passed");
},2000);

console.log(__dirname);
console.log(__filename);
//normal function
function sayHi(name){
  console.log('hi ' + name);
}

sayHi("Eyob");

function Expression
var sayBye = function(name){
  console.log('bye ' + name);
}


function callFunction(fun) {
  fun();
}

callFunction(sayBye)
