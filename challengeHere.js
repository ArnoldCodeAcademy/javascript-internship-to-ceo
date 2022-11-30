// Solution with for - loops
printDistances(99)


function printDistances(n)
{
    var lastPrime = 2;
    var i = lastPrime + 1;
    var foundPrimes = 1;

    while(foundPrimes < n)
    {
        if (isPrime(i))
        {
            console.log(i - lastPrime, "\t", i, " - ", lastPrime);

            foundPrimes++;
            lastPrime = i;
        }

        i++;
    }
}

// Returns true if number n is prime
function isPrime(n)
{
    if (n < 2)
        return false;

    if (n == 2)
        return true;

    var maxDiv = Math.sqrt(n);

    for(var i = 2; i <= maxDiv; i++)
    {
        if (n % i === 0)
        {
            return false;
        }
    }

    return true;
}



// Solution for pro developer!

// EXPLANATION in README.MD
