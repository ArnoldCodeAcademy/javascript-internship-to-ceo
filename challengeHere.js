// Solution with for - loops

console.log(factorial(70))

// Calculate factorial(n) ... using big number calculations
function factorial(n)
{
    let prod = "1";

    for(let i = 2; i <= n; i++)
    {
        prod = mult(prod, i.toString());
    }

    return prod;
}

// Multiplies sNumber1 * sNumber2
// Each number is provided as string
function mult(number1, number2)
{
    // Calculate partial results according to multiplication algorithm
    let intermediateResults = [];

    for(let i = number2.length - 1; i >= 0; i--)
    {
        let digit = parseInt(number2[i]);

        let partialResult = multDigit(number1, digit);
        partialResult += "0".repeat(intermediateResults.length);

        intermediateResults.push(partialResult);
    }

    // Sum partial results to obtain the product
    let sum = "";

    for(let r of intermediateResults)
    {
        sum = add(sum, r);
    }

    return sum;
}

// Multiplies number (as string) with a single digit number
function multDigit(number, digit)
{
    let p = "";
    let carry = 0;

    for(let i = number.length - 1; i >= 0; i--)
    {
        let numberDigit = parseInt(number[i]);

        let prod = digit * numberDigit + carry;
        let prodDigit = prod % 10;
        carry = Math.floor(prod / 10);

        p = prodDigit.toString() + p;
    }

    if (carry > 0)
        p = carry + p;

    return p;
}

function add(sNumber1, sNumber2)
{
    let maxSize = Math.max(sNumber1.length, sNumber2.length);

    let s1 = sNumber1.padStart(maxSize, "0");
    let s2 = sNumber2.padStart(maxSize, "0");

    let string = "";
    let carry = 0;

    for(let i = maxSize - 1; i >= 0; i--)
    {
        let digit1 = parseInt(s1[i]);
        let digit2 = parseInt(s2[i]);

        let sum = digit1 + digit2 + carry;
        let digitSum = sum % 10;
        carry = sum >= 10 ? 1 : 0;

        string = digitSum.toString() + string;
    }

    if (carry > 0)
        string = carry + string;

    return string;
}

// Solution for pro developer!

console.log(factorialPro(70))

function factorialPro(n) {
    let p = "1";
    for (let i = 2; i <= n; i++) {
        p = multPro(p, i.toString());
    }
    return p;
}

function multPro(num1, num2) {
    let results = [];
    for (let i = num2.length - 1; i >= 0; i--) {
        let digit = parseInt(num2[i]);
        let partial = multDigitPro(num1, digit);
        partial += "0".repeat(results.length);
        results.push(partial);
    }
    let sum = "";
    for (let r of results) {
        sum = addPro(sum, r);
    }
    return sum;
}

function multDigitPro(num, digit) {
    let p = "";
    let carry = 0;
    for (let i = num.length - 1; i >= 0; i--) {
        let numDigit = parseInt(num[i]);
        let prod = digit * numDigit + carry;
        let prodDigit = prod % 10;
        carry = Math.floor(prod / 10);
        p = prodDigit.toString() + p;
    }
    if (carry > 0) p = carry + p;
    return p;
}

function addPro(num1, num2) {
    let maxSize = Math.max(num1.length, num2.length);
    let s1 = num1.padStart(maxSize, "0");
    let s2 = num2.padStart(maxSize, "0");
    let str = "";
    let carry = 0;
    for (let i = maxSize - 1; i >= 0; i--) {
        let digit1 = parseInt(s1[i]);
        let digit2 = parseInt(s2[i]);
        let sum = digit1 + digit2 + carry;
        let digitSum = sum % 10;
        carry = sum >= 10 ? 1 : 0;
        str = digitSum.toString() + str;
    }
    if (carry > 0) str = carry + str;
    return str;
}


// EXPLANATION in README.MD
