//---other export method
let counter = function(arr){
  return 'There are ' + arr.length + ' elements in this array';
}
let adder = function(a,b){
  return `The sum of the 2 numbers is ${a +b}`;
}
var pi= 3.142;

//console.log(counter(['Asabeneh','Eyob','Fiker']));
module.exports = {counter,adder,pi};
//---- method one
module.exports.counter = function(arr){
  return 'There are ' + arr.length + ' elements in this array';
}
module.exports.adder = function(a,b){
  return `The sum of the 2 numbers is ${a +b}`;
}
module.exports.pi= 3.142;
