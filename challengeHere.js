// Solution with for - loops

let array = ["Shuffle", "this", "array", "of", "ArnoldCode", "magic!"];

console.log(shuffleArray(array));

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
console.log(shuffleArrayPro(array));

function shuffleArrayPro(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// EXPLANATION in README.MD
