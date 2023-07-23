"use strict";

function recursiveOddSumTo(number) {
    if (number % 2 !== 0) {
        return number + recursiveOddSumTo(number - 1);
    }
    if (number <= 0) {
        return 0;
    }
    return recursiveOddSumTo(number - 1);
}

console.log('lesson 3:', recursiveOddSumTo(10));
