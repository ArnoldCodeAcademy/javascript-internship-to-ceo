// Solution with for - loops

console.log(getRandomNumbers(10));

function getRandomNumbers(n)
{
    let array = [];

    for(let i = 1; i <= n; i++)
    {
        array.push(i);
    }

    shuffleArray(array);

    return array;
}

// Shuffle array implemented using Fisher–Yates shuffle algorithm
function shuffleArray(array)
{
    for(let i = array.length - 1; i > 0; i--)
    {
        let j = getRandomInteger(0, i - 1);

        let t = array[i];
        array[i] = array[j];
        array[j] = t;
    }

    return array;
}

// Get a random int between min and max (both included)
function getRandomInteger(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


// Solution for pro developer!
console.log(getRandomNumbersPro(10));

function getRandomNumbersPro(n) {
    let arr = Array.from({length: n}, (_, i) => i + 1);
    return shuffleArray(arr);
}

function shuffleArrayPro(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = getRandomInteger(0, i - 1);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// EXPLANATION in README.MD
