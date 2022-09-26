// Solution with for - loops
let reversedString = reverseString('JavaScript with ArnoldCode is the best!');
console.log(reversedString);

function reverseString(string)
{
    let string2 = "";

    for(let i = string.length - 1; i >= 0; i--)
    {
        string2 += string[i];
    }

    return string2;
}

// Solution for pro developer!
reversedString = reverseStringLikeAPro('JavaScript with ArnoldCode is the best!');
console.log(reversedString);

function reverseStringLikeAPro(string)
{
    return string.split('').reverse().join('')
}
// EXPLANATION in README.MD
