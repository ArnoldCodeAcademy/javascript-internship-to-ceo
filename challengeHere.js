// Solution
printPrimes(99);

// Function prints the first nPrimes numbers
function printPrimes(nPrimes)
{
    let n = 0;
    let i = 2;

    while(n < nPrimes)
    {
        if (isPrime(i))
        {
            console.log(n, " --> ", i);
            n++;
        }

        i++;
    }
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
