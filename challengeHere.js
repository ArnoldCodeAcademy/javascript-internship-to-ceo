// Solution
function findFibonacci(number)
{
    if (number === 0)
        return 0;

    if (number === 1)
        return 1;

    return findFibonacci(number - 1) + findFibonacci(number - 2);
}

let fibonacciSeries = findFibonacci(14);
console.log(fibonacciSeries);
// EXPLANATION in README.MD
