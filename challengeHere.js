// Solution with for - loops

console.log(fibonacci(500));

function fibonacci(n)
{
    if (n === 0)
        return "0";

    if (n === 1)
        return "1";

    let n1 = "0";
    let n2 = "1";

    for(let i = 2; i <= n; i++)
    {
        let sum = add(n1, n2);

        n1 = n2;
        n2 = sum;
    }

    return n2;
}

function add(number1, number2)
{
    let maxSize = Math.max(number1.length, number2.length);

    let s1 = number1.padStart(maxSize, "0");
    let s2 = number2.padStart(maxSize, "0");

    let s = "";
    let carry = 0;

    for(let i = maxSize - 1; i >= 0; i--)
    {
        let digit1 = parseInt(s1[i]);
        let digit2 = parseInt(s2[i]);

        let sum = digit1 + digit2 + carry;
        let digitSum = sum % 10;
        carry = sum >= 10 ? 1 : 0;

        s = digitSum.toString() + s;
    }

    if (carry > 0)
        s = carry + s;

    return s;
}

// Solution for pro developer!
console.log(fibonacciPro(500));

function fibonacciPro(n) {
    let [a, b] = ["0", "1"];
    for (let i = 2; i <= n; i++) [a, b] = [b, addPro(a, b)];
    return b;
};

function addPro(num1, num2) {
    const maxSize = Math.max(num1.length, num2.length);
    const padNumber = (num, size) => num.padStart(size, "0");

    num1 = padNumber(num1, maxSize);
    num2 = padNumber(num2, maxSize);

    let [carry, result] = [0, ""];

    for (let i = maxSize - 1; i >= 0; i--) {
        const sum = parseInt(num1[i]) + parseInt(num2[i]) + carry;
        result = (sum % 10) + result;
        carry = Math.floor(sum / 10);
    }

    if (carry) result = carry + result;

    return result;
};


// EXPLANATION in README.MD
