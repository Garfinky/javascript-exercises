const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArray) {
	let sum = 0;
  numArray.forEach(num => {
    sum += num;
  });
  return sum;
};

const multiply = function(multArray) {
  const sum = multArray.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
  return sum;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(n) {
	if (n===0 || n===1){
    return 1;
  };

  let result = 1;

  for(let i = 2; i <=n; i++){
    result *= i;
  };

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
