const BigEval = require("bigeval");

var Obj = new BigEval;
var result = Obj.exec("5! + 1e3 * (PI + E)"); // 5979.874482048837
var result2 = Obj.exec("sin(45 * deg)**2 + cos(pi / 4)**2"); // 1
var result3 = Obj.exec("0 & -7 ^ -7 - 0%1 + 6%2"); //-7
var result4 = Obj.exec("sin( acos( ceil( tan(pi/6) ) ) )"); // sin(0) i.e. 0
var result5 = Obj.exec("((1 << 4) ^ (14 >> 1)) + pi"); // 26.141592653589793

console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);