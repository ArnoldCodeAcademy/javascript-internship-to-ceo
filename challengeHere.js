// Solution with for - loops

let jaggedArray = [2, 3, 4, 5, 10, [17, 4, [88, 89, 99], 4], [33, 12, 99], 0];
let deepCopy = copyArray(jaggedArray);

console.log(deepCopy);

function copyArray(array)
{
    let tempArray = [];

    for(let element of array)
    {
        if (Array.isArray(element))
        {
            element = copyArray(element);
        }

        tempArray.push(element);
    }

    return tempArray;
}

// Solution for pro developer!
let deepCopyPro = copyArrayPro(jaggedArray);
console.log(deepCopyPro)

function copyArrayPro(array) {
    return array.map(element => Array.isArray(element) ? copyArray(element) : element);
}

// EXPLANATION in README.MD
