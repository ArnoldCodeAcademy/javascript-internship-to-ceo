// Solution with for - loops
console.log("Sum of first ", 99, " primes is ", sumPrimes(99));

function sumPrimes(number)
{
    let foundPrimes = 0;
    let i = 2;
    let sum = 0;

    while(foundPrimes < number)
    {
        if (isPrime(i))
        {
            foundPrimes++;
            sum += i;
        }

        i++;
    }

    return sum;
}

// Returns true if number n is prime
function isPrime(number)
{
    if (number < 2)
        return false;

    if (number == 2)
        return true;

    let maxDiv = Math.sqrt(number);

    for(let i = 2; i <= maxDiv; i++)
    {
        if (number % i === 0)
        {
            return false;
        }
    }

    return true;
}


// Solution for pro developer!

console.log("Sum of first " + 99 + "primes is" + sumOfNPrimes(99) + ". Calculated with Pro-Solution.");

function sumOfNPrimes(num) {
    return getNprimes(num).reduce((a, b) => a + b)
}

function getNprimes(n) {
    const primes = [];
    let i = 2

    while (primes.length < n) {
        if (isPrime(i)) {
            primes.push(i)
        }
        i++
    }
    return primes;
}


// EXPLANATION in README.MD
