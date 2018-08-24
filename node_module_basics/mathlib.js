

module.exports = function (){
  return {
    add: function(num1, num2) { 
    	var addition = num1 + num2;
    	console.log("the sum is:" + addition);
    },
    multiply: function(num1, num2) {
    	var multiply = num1 * num2;
         console.log("The solutuon is:" + multiply);
    },
    square: function(num) {
    	var sqrt = num * num;
        console.log("The square root is:" + sqrt);
    },
    random: function(num1, num2) {
    	var randNum = Math.floor(Math.random() * (num2 - num1));
         console.log("The random number is" + randNum);
    }
  }
};