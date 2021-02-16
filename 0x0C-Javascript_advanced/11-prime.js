'use strict';

'use strict';

'use strict';

function countPrimeNumbers() {

    function checkPrimeNumber(n) {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }

    function primeNumbers() {
        let arr = [];
        for (let j = 2; j < 101; j++) {
            if (checkPrimeNumber(j) === 1) {
                arr[j] = j;
            }
        }
        return arr;
    }
    let result = primeNumbers();
    return result.length;
}

let a = performance.now();
for (let i = 0; i < 100; i++) {
    setTimeout(function() { countPrimeNumbers(); }, 0);
}
let b = performance.now();
console.log('Execution time of calculating prime numbers 100 times was ' + (b - a) + ' milliseconds.');