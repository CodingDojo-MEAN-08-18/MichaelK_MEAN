
/*
var my_module = require('./my_module');
my_module.greet();
my_module.add(5,6);
*/


var math = require('./mathlib')();     //notice the extra invocation parentheses!
math.add(22, 3);
math.multiply(50, 10);
math.square(10);
math.random(11, 89);

