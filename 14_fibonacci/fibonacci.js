const fibonacci = function(input) {
 let num = Number(input);

 if (num < 0 || num === NaN){
    return 'OOPS';
 };

 if (num === 0) {return 0;};
 if (num === 1){return 1;};

 let a = 0;
 let b = 1;

 for(i = 2; i <= num; i++){
    let next = a + b;
    a = b;
    b = next;
 };

 return b;

};

// Do not edit below this line
module.exports = fibonacci;
