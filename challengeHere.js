// Solution with for - loops

console.log(getCharCodes("I like JavaScript and the Arnold Code Academy"));

function getCharCodes(string)
{
    let array = [];

    for(let i = 0; i < string.length; i++)
    {
        let code = string.charCodeAt(i);
        array.push(code);
    }

    return array;
}


// Solution for pro developer!

console.log(getCharCodesPro("I like JavaScript and the Arnold Code Academy"));

function getCharCodesPro(string) {
    return [...string].map(char => char.charCodeAt(0))
}


// EXPLANATION in README.MD
