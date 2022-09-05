// Solution
console.log(getPrimes(10, 100));


function getPrimes(nPrimes, startAt)
{
    let array = [];

    let i = startAt;

    while(array.length < nPrimes)
    {
        if (isPrime(i))
        {
            array.push(i);
        }

        i++;
    }

    return array;
}

// Returns true if a number is prime
function isPrime(number)
{
    if (number < 2)
        return false;

    if (number == 2)
        return true;

    let maxDiv = Math.sqrt(number);

    for(let i = 2; i <= maxDiv; i++)
    {
        if (number % i == 0)
        {
            return false;
        }
    }

    return true;
}
// EXPLANATION in README.MD
