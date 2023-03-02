function add(a, b) {
  var out = a+b;
  return out
}
function sub(a, b) {
  var out = a-b;
  return out
}
function mult(a, b) {
  var out = a*b;
  return out
}
function div(a, b) {
  var out = b/a;
  return out
}
const compiler = require('./compiler');
const input = '(div 6 (add 3 3))';
const output =  compiler(input);
console.log(output);
console.log("res is: ", eval(output));
//console.log(JSON.stringify(output, null, 2));
