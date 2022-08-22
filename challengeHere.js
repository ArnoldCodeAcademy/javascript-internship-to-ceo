// Solution
function sumDigits(number)
{
    let string = number.toString();
    let sum = 0;

    for(let char of string)
    {
        let digit = parseInt(char);
        sum += digit;
    }

    return sum;
}

let sum = sumDigits(1235321);

console.log("Sum: ", sum);
// EXPLANATION in README.MD
