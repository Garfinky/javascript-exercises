const sumAll = function(min, max) {

 // check if the input is not a number, or if it is not positive
 if (!Number.isInteger(min) || !Number.isInteger(max)) return 'ERROR';
 if (min < 0 || max < 0) return 'ERROR';

 let sum = 0;

  // loop through the numbers, while i is less than or equal to max, then add it to min
 if (min > max) {
    const big = min;
    min = max;
    max = big;
 }

 for(i = min; i <= max; i ++) {
    sum += i;
 }

 return sum
 
};

// Do not edit below this line
module.exports = sumAll;
