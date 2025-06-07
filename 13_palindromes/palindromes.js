const palindromes = function (input) {
    const cleanInput = input.replace(/[^a-z0-9]/gi, '').toLowerCase();

    const reverse = cleanInput.split('').reverse().join('');

    if(reverse === cleanInput) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
